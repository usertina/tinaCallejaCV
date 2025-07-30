document.addEventListener("DOMContentLoaded", function() {
    // ===== CONFIGURACIÓN INICIAL ===== //
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'es';

    // Aplicar configuración guardada
    document.documentElement.lang = savedLang;
    document.getElementById('theme-style').setAttribute('href', `${savedTheme}.css`);
    updateThemeButton(savedTheme);

    // ===== FUNCIÓN ACTUALIZAR BOTÓN TEMA ===== //
    function updateThemeButton(theme) {
        const themeButton = document.getElementById('theme-toggle');
        const icon = themeButton.querySelector('i');
        
        if (theme === 'light') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }

    // ===== FUNCIÓN FECHA/HORA MEJORADA ===== //
    function updateDateTime() {
        const now = new Date();
        const lang = document.documentElement.lang;
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };

        try {
            const dateTimeStr = now.toLocaleString(lang === 'eu' ? 'eu-ES' : lang, options);
            document.getElementById('current-date-time').textContent = dateTimeStr;
        } catch (e) {
            console.error("Error formateando fecha:", e);
            document.getElementById('current-date-time').textContent = now.toLocaleString();
        }
    }

    // ===== TRADUCCIONES COMPLETAS ===== //
    const texts = {
        es: {
            // Secciones principales
            'page-title': "Tina Calleja - CV",
            'name': "Tina Calleja",
            'title': "Desarrolladora Web Full Stack",
            'about-title': "Sobre Mí",
            'about-text': `Soy desarrolladora web full-stack con experiencia en backend y frontend, apasionada por la tecnología y la seguridad informática.
            Mi formación intensiva en desarrollo web, junto con mi formación en seguridad informática, me ha permitido adquirir habilidades clave en programación, análisis de datos y gestión eficiente de procesos.
            Además, mi experiencia en diversos sectores me ha brindado una gran capacidad de adaptación, pensamiento analítico y trabajo en equipo, habilidades esenciales tanto en entornos de desarrollo como en la resolución de desafíos en ciberseguridad.`,
            'education-title': "Formación Académica",
            'experience-title': "Experiencia Laboral",
            'languages-title': "Idiomas",
            'contact-title': "Contacto",
            'contact-text': "Bilbao, 48013",
            'linkedin': "LinkedIn",
            'github': "GitHub",
            'portfolio': "Portfolio",
            'curriculum': "Currículum Vitae",
            'spanish': "Castellano (nativo)",
            'basque': "Euskera (básico)",
            'english': "Inglés (técnico)",
            'copyright': "© 2024 Tina Calleja - Todos los derechos reservados",

            // Formación Académica
            'cybersecurity': "Seguridad Informática (IFCT0109)",
            'cybersecurity-details': "EDE Fundazioa (Febrero 2025 - Junio 2025)",
            'cybersecurity-description': "420 horas en análisis de vulnerabilidades, protección de sistemas, detección de amenazas y prácticas con Raspberry Pi Pico y programación en MicroPython orientadas a seguridad y control de dispositivos.",
            'java-course': "Curso de Java",
            'java-details': "Fundación EDE (Octubre 2024 - Diciembre 2024)",
            'java-description': "210 horas en Programación Orientada a Objetos, estructuras de control y gestión de bases de datos relacionales.",
            'bootcamp': "Bootcamp Desarrollo Web Full-Stack",
            'bootcamp-details': "Kooperativa Peñascal (Noviembre 2023 - Junio 2024)",
            'bootcamp-description': "775 horas de formación intensiva en desarrollo web full-stack.",
            'urduliz': "Piscina Urduliz 42",
            'urduliz-details': "(Octubre 2023)",
            'urduliz-description': "Formación en lenguaje C con metodología de gamificación y aprendizaje colaborativo en entorno macOS.",
            'android-course': "Curso Programación Aplicaciones Android",
            'android-details': "Fundación EDE (Octubre 2022 - Marzo 2023)",
            'android-description': "350 horas de desarrollo de aplicaciones nativas con Java y SQL.",
            'certification': "Certificado Profesionalidad Sistemas Microinformáticos",
            'certification-details': "IFAP (2017)",
            'certification-description': "560 horas en instalación y configuración de sistemas operativos y redes.",
            'highschool': "Estudios de Bachillerato",
            'highschool-details': "I.E.S Errekaldeberri (2000)",

            // Experiencia Laboral
            'internships': "2024 - Prácticas",
            'qubiz': "QUBIZ.TEAM",
            'qubiz-internship': "2025 - Prácticas",
            'qubiz-details': "Creación de una app para la búsqueda de papers científicos.<br>Python (backend), HTML5, CSS y JavaScript (frontend). 84 horas.",
            'internships-details': "Desarrollo de procesamiento de datos en C++. 120 horas.",
            'internships2': "2017 - Prácticas",
            'internships2-details': "Instalación y configuración de servidores Windows Server 2012.40 horas",
            'pesaje': "Pesaje del Norte - Bilbao",
            'pesaje-details': "Informatización de datos con software específico.",
            'manufacturing': "Sector Industria Manufacturera",
            'healthcare': "Sector Socio-Sanitario",
            'commerce': "Sector Comercial",
            'hospitality': "Sector Hostelería",
            'dandais': "D&A Innovative Systems",
            'aduogroup': "Aduogroup Bilbao"
        },
        en: {
            // Main sections
            'page-title': "Tina Calleja - Resume",
            'name': "Tina Calleja",
            'title': "Full Stack Web Developer",
            'about-title': "About Me",
            'about-text': `I am a full-stack web developer with backend and frontend experience, passionate about technology and cybersecurity.
            My intensive training in web development, along with my training in cybersecurity, has allowed me to acquire key skills in programming, data analysis and efficient process management.
            In addition, my experience in various sectors has given me great adaptability, analytical thinking and teamwork skills, essential skills both in development environments and in solving cybersecurity challenges.`,
            'education-title': "Education",
            'experience-title': "Work Experience",
            'languages-title': "Languages",
            'contact-title': "Contact",
            'contact-text': "Bilbao, 48013",
            'linkedin': "LinkedIn",
            'github': "GitHub",
            'portfolio': "Portfolio",
            'curriculum': "Curriculum Vitae",
            'spanish': "Spanish (native)",
            'basque': "Basque (basic)",
            'english': "English (technical)",
            'copyright': "© 2024 Tina Calleja - All rights reserved",

            // Education
            'cybersecurity': "Cybersecurity (IFCT0109)",
            'cybersecurity-details': "EDE Fundazioa (February 2025 - June 2025)",
            'cybersecurity-description': "420 hours in vulnerability analysis, system protection, threat detection and practices with Raspberry Pi Pico and MicroPython programming oriented to security and device control.",
            'java-course': "Java Course",
            'java-details': "EDE Foundation (October 2024 - December 2024)",
            'java-description': "210 hours in Object Oriented Programming, control structures and relational database management.",
            'bootcamp': "Full-Stack Web Development Bootcamp",
            'bootcamp-details': "Kooperativa Peñascal (November 2023 - June 2024)",
            'bootcamp-description': "775 hours of intensive full-stack web development training.",
            'urduliz': "Urduliz 42 Pool",
            'urduliz-details': "(October 2023)",
            'urduliz-description': "Training in C language with gamification methodology and collaborative learning in macOS environment.",
            'android-course': "Android App Programming Course",
            'android-details': "EDE Foundation (October 2022 - March 2023)",
            'android-description': "350 hours of native app development with Java and SQL.",
            'certification': "Microcomputer Systems Professional Certificate",
            'certification-details': "IFAP (2017)",
            'certification-description': "560 hours in installation and configuration of operating systems and networks.",
            'highschool': "High School Studies",
            'highschool-details': "I.E.S Errekaldeberri (2000)",

            // Work Experience
            'internships': "2024 - Internship",
            'qubiz': "QUBIZ.TEAM",
            'qubiz-internship': "2025 - Internship",
            'qubiz-details': "Development of a scientific paper search app.<br>Python (backend), HTML5, CSS and JavaScript (frontend). 84 hours.",
            'internships-details': "Data processing development in C++. 120 hours.",
            'internships2': "2017 - Internship",
            'internships2-details': "Installation and configuration of Windows Server 2012 servers. 40 hours.",
            'pesaje': "Pesaje del Norte - Bilbao",
            'pesaje-details': "Data computerization with specific software.",
            'manufacturing': "Manufacturing Industry Sector",
            'healthcare': "Socio-Health Sector",
            'commerce': "Commercial Sector",
            'hospitality': "Hospitality Sector",
            'dandais': "D&A Innovative Systems",
            'aduogroup': "Aduogroup Bilbao"
        },
        eu: {
            // Atal nagusiak
            'page-title': "Tina Calleja - Curriculum",
            'name': "Tina Calleja",
            'title': "Full Stack Web Garatzailea",
            'about-title': "Niri Buruz",
            'about-text': `Web garatzaile full-stack naiz atzeko eta aurreko esperientziarekin, teknologia eta zibersegurtasunaren zalea.
            Web garapenean duten prestakuntza intentsiboak, eta zibersegurtasun prestakuntzak, programazioan, datuen analisian eta prozesuen kudeaketa eraginkorrean gaitasun gakoak eskuratzeko aukera eman dit.
            Gainera, hainbat sektoretan izandako esperientziak egokitzeko gaitasun handia, pentsamendu analitikoa eta talde-lana egiteko trebetasunak eman dizkit, garapen inguruneetan zein zibersegurtasun erronketan ezinbestekoak diren trebetasunak.`,
            'education-title': "Hezkuntza",
            'experience-title': "Lan Esperientzia",
            'languages-title': "Hizkuntzak",
            'contact-title': "Kontaktua",
            'contact-text': "Bilbao, 48013",
            'linkedin': "LinkedIn",
            'github': "GitHub",
            'portfolio': "Portfolio",
            'curriculum': "Curriculum Vitae",
            'spanish': "Gaztelania (jatorrizkoa)",
            'basque': "Euskara (oinarrizkoa)",
            'english': "Ingelesa (teknikoa)",
            'copyright': "© 2024 Tina Calleja - Eskubide guztiak erreserbatuta",

            // Hezkuntza
            'cybersecurity': "Zibersegurtasuna (IFCT0109)",
            'cybersecurity-details': "EDE Fundazioa (Otsaila 2025 - Ekaina 2025)",
            'cybersecurity-description': "420 ordu hutsuneen analisian, sistemak babestean, mehatxuak detektatzean eta Raspberry Pi Pico eta MicroPython programazioarekin praktiketan, segurtasunari eta gailuen kontrolari begira.",
            'java-course': "Java Ikastaroa",
            'java-details': "EDE Fundazioa (Urria 2024 - Abendua 2024)",
            'java-description': "210 ordu Objektuei Orientatutako Programazioan, kontrol egituretan eta datu-base erlazionalen kudeaketan.",
            'bootcamp': "Full-Stack Web Garapen Bootcamp",
            'bootcamp-details': "Peñascal Kooperatiba (Azaroa 2023 - Ekaina 2024)",
            'bootcamp-description': "775 orduko web garapen full-stack formakuntza intentsiboa.",
            'urduliz': "Urduliz 42 Pool",
            'urduliz-details': "(Urria 2023)",
            'urduliz-description': "C lengoaiaren formakuntza gamifikazio metodologia eta ikasketa kolaboratiboarekin macOS ingurunean.",
            'android-course': "Android Aplikazioen Programazio Ikastaroa",
            'android-details': "EDE Fundazioa (Urria 2022 - Martxoa 2023)",
            'android-description': "350 ordu Java eta SQL-ekin aplikazio natiboak garatzen.",
            'certification': "Mikroinformatika Sistemetako Ziurtagiri Profesionala",
            'certification-details': "IFAP (2017)",
            'certification-description': "560 ordu sistema eragileak eta sareak instalatzen eta konfiguratzen.",
            'highschool': "Batxilergoko Ikasketak",
            'highschool-details': "I.E.S Errekaldeberri (2000)",

            // Lan Esperientzia
            'internships': "2024 - Praktikak",
            'qubiz': "QUBIZ.TEAM",
            'qubiz-internship': "2025 - Praktikak",
            'qubiz-details': "Artikulu zientifikoak bilatzeko aplikazio baten garapena.<br>Python (backend), HTML5, CSS eta JavaScript (frontend). 84 ordu.",
            'internships-details': "Datu prozesamendua C++-n garatzen. 120 ordu.",
            'internships2': "2017 - Praktikak",
            'internships2-details': "Windows Server 2012 zerbitzariak instalatzen eta konfiguratzen. 40 ordu.",
            'pesaje': "Pesaje del Norte - Bilbao",
            'pesaje-details': "Datuak informatizatzen software espezifikoarekin.",
            'manufacturing': "Manufaktura Industria Sektorea",
            'healthcare': "Gizarte-Osasun Sektorea",
            'commerce': "Merkataritza Sektorea",
            'hospitality': "Ostalaritza Sektorea",
            'dandais': "D&A Innovative Systems",
            'aduogroup': "Aduogroup Bilbao"
        }
    };

    // ===== FUNCIÓN CAMBIO DE IDIOMA MEJORADA ===== //
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        // Actualizar idioma activo visualmente
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
        });
        document.getElementById(`lang-${lang}`).classList.add('active');

        // Lista completa de IDs del HTML
        const htmlIds = [
            'page-title', 'name', 'title', 'about-title', 'about-text',
            'education-title', 'experience-title', 'languages-title',
            'contact-title', 'contact-text', 'copyright',
            'linkedin', 'github', 'portfolio', 'curriculum',
            'spanish', 'basque', 'english',
            'cybersecurity', 'cybersecurity-details', 'cybersecurity-description',
            'java-course', 'java-details', 'java-description',
            'bootcamp', 'bootcamp-details', 'bootcamp-description',
            'urduliz', 'urduliz-details', 'urduliz-description',
            'android-course', 'android-details', 'android-description',
            'certification', 'certification-details', 'certification-description',
            'highschool', 'highschool-details',
            'internships', 'internships-details', 'internships2', 'internships2-details',
            'pesaje', 'pesaje-details', 'manufacturing', 'healthcare', 'commerce', 'hospitality',
            'dandais', 'aduogroup', 'qubiz', 'qubiz-internship', 'qubiz-details'
        ];

        htmlIds.forEach(id => {
            const element = document.getElementById(id);
            if (element && texts[lang] && texts[lang][id]) {
                if (id === 'about-text' || id === 'qubiz-details') {
                    element.innerHTML = texts[lang][id].replace(/\n/g, "<br>");
                } else {
                    element.textContent = texts[lang][id];
                }
            }
        });

        updateDateTime();
    }

    // ===== EFECTOS VISUALES MEJORADOS ===== //
    function addVisualEffects() {
        // Animación de entrada para cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observar todas las cards
        document.querySelectorAll('.card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Efecto parallax sutil en el header
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.main-header');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Animación de las barras de progreso de idiomas
        setTimeout(() => {
            document.querySelectorAll('.progress-fill').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        }, 1000);
    }

    // ===== FUNCIÓN DE TOGGLE DE TEMA MEJORADA ===== //
    function toggleTheme() {
        const themeStyle = document.getElementById("theme-style");
        const currentTheme = themeStyle.getAttribute("href").replace('.css', '');
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        // Transición suave
        document.body.style.transition = 'all 0.3s ease';
        
        themeStyle.setAttribute("href", `${newTheme}.css`);
        updateThemeButton(newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Limpiar transición después del cambio
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    // ===== EVENT LISTENERS MEJORADOS ===== //
    document.getElementById("lang-es").addEventListener("click", (e) => {
        e.preventDefault();
        changeLanguage("es");
    });

    document.getElementById("lang-en").addEventListener("click", (e) => {
        e.preventDefault();
        changeLanguage("en");
    });

    document.getElementById("lang-eu").addEventListener("click", (e) => {
        e.preventDefault();
        changeLanguage("eu");
    });

    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

    // ===== FUNCIONALIDADES ADICIONALES ===== //
    
    // Smooth scroll para navegación interna (si se añaden enlaces de navegación)
    document.addEventListener('click', (e) => {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });

    // Mejora de accesibilidad: navegación por teclado
    document.addEventListener('keydown', (e) => {
        // Cambio de tema con Ctrl/Cmd + D
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            toggleTheme();
        }
        
        // Cambio de idioma con Alt + L
        if (e.altKey && e.key === 'l') {
            e.preventDefault();
            const currentLang = document.documentElement.lang;
            const langs = ['es', 'en', 'eu'];
            const currentIndex = langs.indexOf(currentLang);
            const nextLang = langs[(currentIndex + 1) % langs.length];
            changeLanguage(nextLang);
        }
    });

    // Preloader simple
    function showContent() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }

    // ===== INICIALIZACIÓN ===== //
    changeLanguage(savedLang);
    updateDateTime();
    addVisualEffects();
    showContent();
    
    // Actualizar fecha/hora cada segundo
    setInterval(updateDateTime, 1000);
    
    // Log de inicialización
    console.log(`%c🎨 CV de Tina Calleja cargado correctamente`, 'color: #60a5fa; font-size: 14px; font-weight: bold;');
    console.log(`%cTema: ${savedTheme} | Idioma: ${savedLang}`, 'color: #94a3b8; font-size: 12px;');
});
