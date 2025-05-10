document.addEventListener("DOMContentLoaded", function() {
    // ========== CONFIGURACIÓN INICIAL ========== //
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'es';
    
    // Aplicar tema guardado
    document.getElementById('theme-style').setAttribute('href', `${savedTheme}.css`);
    document.getElementById('theme-toggle').textContent = savedTheme === 'light' ? '🌙' : '🌞';

    // ========== FUNCIONALIDAD TEMA OSCURO/CLARO ========== //
    document.getElementById("theme-toggle").addEventListener("click", function() {
        const themeStyle = document.getElementById("theme-style");
        const newTheme = themeStyle.getAttribute("href") === "light.css" ? "dark" : "light";
        
        themeStyle.setAttribute("href", `${newTheme}.css`);
        this.textContent = newTheme === "light" ? "🌙" : "🌞";
        localStorage.setItem('theme', newTheme);
    });

    // ========== FUNCIÓN FECHA/HORA ========== //
    function updateDateTime() {
        const now = new Date();
        const lang = document.documentElement.lang || savedLang;
        const options = texts[lang].dateFormat;
        
        try {
            const dateStr = now.toLocaleDateString(lang, options);
            const timeStr = now.toLocaleTimeString(lang, options);
            document.getElementById('current-date-time').textContent = `${dateStr} ${timeStr}`;
        } catch (e) {
            console.error("Error al formatear fecha:", e);
            const fallbackDate = now.toLocaleDateString('es', texts['es'].dateFormat);
            const fallbackTime = now.toLocaleTimeString('es', texts['es'].dateFormat);
            document.getElementById('current-date-time').textContent = `${fallbackDate} ${fallbackTime}`;
        }
    }

    // ========== TRADUCCIONES COMPLETAS ========== //
    const texts = {
        es: {
            // Secciones principales
            pageTitle: "Tina Calleja - CV",
            name: "Tina Calleja",
            title: "Desarrolladora Web Full Stack",
            aboutTitle: "Sobre Mí",
            aboutText: `Soy desarrolladora web full-stack con experiencia en backend y frontend, apasionada por la tecnología y la seguridad informática.
            Mi formación intensiva en desarrollo web, junto con mi actual formación en seguridad informática, me ha permitido adquirir habilidades clave en programación, análisis de datos y gestión eficiente de procesos.
            Además, mi experiencia en diversos sectores me ha brindado una gran capacidad de adaptación, pensamiento analítico y trabajo en equipo.`,
            educationTitle: "Formación Académica",
            experienceTitle: "Experiencia Laboral",
            languagesTitle: "Idiomas",
            contactTitle: "Contacto",
            contactText: "📍 Bilbao, 48013",
            linkedin: "LinkedIn",
            github: "GitHub",
            portfolio: "Portfolio",
            curriculum: "Currículum Vitae",
            spanish: "Castellano (nativo)",
            basque: "Euskera (básico)",
            english: "Inglés (técnico)",
            copyright: "© 2024 Tina Calleja - Todos los derechos reservados",

            // Formación Académica
            "cybersecurity": "Seguridad Informática (IFCT0109)",
            "cybersecurity-details": "EDE Fundazioa (Febrero 2025 - Junio 2025)",
            "cybersecurity-description": "420 horas en análisis de vulnerabilidades, protección de sistemas y detección de amenazas.",
            "java-course": "Curso de Java",
            "java-details": "Fundación EDE (Octubre 2024 - Diciembre 2024)",
            "java-description": "210 horas en Programación Orientada a Objetos y bases de datos relacionales.",
            "bootcamp": "Bootcamp Desarrollo Web Full-Stack",
            "bootcamp-details": "Kooperativa Peñascal (Noviembre 2023 - Junio 2024)",
            "bootcamp-description": "775 horas de formación intensiva en desarrollo web full-stack.",
            "urduliz": "Piscina Urduliz 42",
            "urduliz-details": "(Octubre 2023)",
            "urduliz-description": "Formación en lenguaje C con metodología de gamificación.",
            "android-course": "Curso Programación Aplicaciones Android",
            "android-details": "Fundación EDE (Octubre 2022 - Marzo 2023)",
            "android-description": "350 horas de desarrollo de aplicaciones nativas con Java y SQL.",
            "certification": "Certificado Profesionalidad Sistemas Microinformáticos",
            "certification-details": "IFAP (2017)",
            "certification-description": "560 horas en instalación de sistemas operativos y redes.",
            "highschool": "Estudios de Bachillerato",
            "highschool-details": "I.E.S Errekaldeberri (2000)",

            // Experiencia Laboral
            "internships": "2024 - Prácticas",
            "internships-details": "Desarrollo de procesamiento de datos en C++.",
            "internships2": "2017 - Prácticas",
            "internships2-details": "Instalación de servidores Windows Server 2012.",
            "pesaje": "Pesaje del Norte - Bilbao",
            "pesaje-details": "Informatización de datos con software específico.",
            "manufacturing": "Sector Industria Manufacturera (2002 - 2008)",
            "healthcare": "Sector Socio-Sanitario (2016)",
            "commerce": "Sector Comercial (2012)",
            "hospitality": "Sector Hostelería (2015 - 2018)",

            // Formato fecha
            dateFormat: {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Europe/Madrid'
            }
        },
        en: {
            // Main sections
            pageTitle: "Tina Calleja - Resume",
            name: "Tina Calleja",
            title: "Full Stack Web Developer",
            aboutTitle: "About Me",
            aboutText: `I am a full-stack web developer with backend and frontend experience, passionate about technology and cybersecurity.
            My intensive training in web development, along with my current cybersecurity studies, has given me key skills in programming, data analysis and efficient process management.
            Additionally, my experience in various sectors has provided me with strong adaptability, analytical thinking and teamwork skills.`,
            educationTitle: "Education",
            experienceTitle: "Work Experience",
            languagesTitle: "Languages",
            contactTitle: "Contact",
            contactText: "📍 Bilbao, 48013",
            linkedin: "LinkedIn",
            github: "GitHub",
            portfolio: "Portfolio",
            curriculum: "Curriculum Vitae",
            spanish: "Spanish (native)",
            basque: "Basque (basic)",
            english: "English (technical)",
            copyright: "© 2024 Tina Calleja - All rights reserved",

            // Education
            "cybersecurity": "Cybersecurity (IFCT0109)",
            "cybersecurity-details": "EDE Foundation (February 2025 - June 2025)",
            "cybersecurity-description": "420 hours in vulnerability analysis, system protection and threat detection.",
            "java-course": "Java Course",
            "java-details": "EDE Foundation (October 2024 - December 2024)",
            "java-description": "210 hours in Object-Oriented Programming and relational databases.",
            "bootcamp": "Full-Stack Web Development Bootcamp",
            "bootcamp-details": "Peñascal Kooperative (November 2023 - June 2024)",
            "bootcamp-description": "775 hours of intensive full-stack web development training.",
            "urduliz": "Urduliz 42 Pool",
            "urduliz-details": "(October 2023)",
            "urduliz-description": "C language training with gamification methodology.",
            "android-course": "Android App Development Course",
            "android-details": "EDE Foundation (October 2022 - March 2023)",
            "android-description": "350 hours of native app development with Java and SQL.",
            "certification": "Professional IT Systems Certificate",
            "certification-details": "IFAP (2017)",
            "certification-description": "560 hours in operating systems and network installation.",
            "highschool": "High School Studies",
            "highschool-details": "I.E.S Errekaldeberri (2000)",

            // Work Experience
            "internships": "2024 - Internship",
            "internships-details": "Data processing development in C++.",
            "internships2": "2017 - Internship",
            "internships2-details": "Windows Server 2012 installation.",
            "pesaje": "Pesaje del Norte - Bilbao",
            "pesaje-details": "Data digitization with specialized software.",
            "manufacturing": "Manufacturing Industry Sector (2002 - 2008)",
            "healthcare": "Healthcare Sector (2016)",
            "commerce": "Commercial Sector (2012)",
            "hospitality": "Hospitality Sector (2015 - 2018)",

            // Date format
            dateFormat: {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'UTC'
            }
        },
        eu: {
            // Atal nagusiak
            pageTitle: "Tina Calleja - Curriculum",
            name: "Tina Calleja",
            title: "Full Stack Web Garatzailea",
            aboutTitle: "Niri Buruz",
            aboutText: `Full-stack web garatzailea naiz, backend eta frontend esperientziarekin, teknologiaren eta zibersegurtasunaren zalea.
            Web garapeneko prestakuntza intentsiboari eta zibersegurtasunean egiten ari naizen ikasketei esker, programazioan, datuen analisian eta prozesuen kudeaketan trebetasunak eskuratu ditut.
            Gainera, hainbat sektoretan izandako esperientziak egokitzeko gaitasuna, pentsamendu analitikoa eta talde-lana garatu ditut.`,
            educationTitle: "Hezkuntza",
            experienceTitle: "Lan Esperientzia",
            languagesTitle: "Hizkuntzak",
            contactTitle: "Kontaktua",
            contactText: "📍 Bilbo, 48013",
            linkedin: "LinkedIn",
            github: "GitHub",
            portfolio: "Portfolio",
            curriculum: "Curriculum Vitae",
            spanish: "Gaztelania (ama hizkuntza)",
            basque: "Euskara (oinarrizkoa)",
            english: "Ingelesa (teknikoa)",
            copyright: "© 2024 Tina Calleja - Eskubide guztiak erreserbatuta",

            // Hezkuntza
            "cybersecurity": "Zibersegurtasuna (IFCT0109)",
            "cybersecurity-details": "EDE Fundazioa (2025eko Otsaila - 2025eko Ekaina)",
            "cybersecurity-description": "420 ordu ahultasunak aztertzen, sistemak babesten eta mehatxuak detektatzen.",
            "java-course": "Java Ikastaroa",
            "java-details": "EDE Fundazioa (2024ko Urria - 2024ko Abendua)",
            "java-description": "210 ordu Objektuetara Bideratutako Programazioan eta datu-base erlazionaletan.",
            "bootcamp": "Full-Stack Web Garapen Bootcampa",
            "bootcamp-details": "Peñascal Kooperatiba (2023ko Azaroa - 2024ko Ekaina)",
            "bootcamp-description": "775 orduko web garapen intentsiboa.",
            "urduliz": "Urduliz 42 Igerilekua",
            "urduliz-details": "(2023ko Urria)",
            "urduliz-description": "C hizkuntzako prestakuntza gamifikazio metodologiarekin.",
            "android-course": "Android Aplikazioen Garapen Ikastaroa",
            "android-details": "EDE Fundazioa (2022ko Urria - 2023ko Martxoa)",
            "android-description": "350 ordu Java eta SQL erabiliz aplikazio natiboak garatzen.",
            "certification": "Sistema Mikroinformatikoen Ziurtagiri Profesionala",
            "certification-details": "IFAP (2017)",
            "certification-description": "560 ordu sistema eragileak eta sareak instalatzen.",
            "highschool": "Batxilergoko Ikasketak",
            "highschool-details": "I.E.S Errekaldeberri (2000)",

            // Lan Esperientzia
            "internships": "2024 - Praktikak",
            "internships-details": "Datu-prozesamendua C++-n garatzen.",
            "internships2": "2017 - Praktikak",
            "internships2-details": "Windows Server 2012 instalatzen.",
            "pesaje": "Pesaje del Norte - Bilbo",
            "pesaje-details": "Datuak digitalizatzen software espezializatuarekin.",
            "manufacturing": "Industria Ekoizpen Sektorea (2002 - 2008)",
            "healthcare": "Gizarte-Osasun Sektorea (2016)",
            "commerce": "Merkataritza Sektorea (2012)",
            "hospitality": "Ostalari Sektorea (2015 - 2018)",

            // Data formatua
            dateFormat: {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Europe/Madrid'
            }
        }
    };

    // ========== FUNCIÓN CAMBIO DE IDIOMA ========== //
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        // Actualizar todos los textos
        Object.keys(texts[lang]).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                if (key === "about-text") {
                    element.innerHTML = texts[lang][key].replace(/\n/g, "<br>");
                } else {
                    element.textContent = texts[lang][key];
                }
            }
        });

        updateDateTime();
    }

    // ========== INICIALIZACIÓN ========== //
    changeLanguage(savedLang);
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Event listeners para botones de idioma
    document.getElementById("lang-es").addEventListener("click", () => changeLanguage("es"));
    document.getElementById("lang-en").addEventListener("click", () => changeLanguage("en"));
    document.getElementById("lang-eu").addEventListener("click", () => changeLanguage("eu"));
});