document.addEventListener("DOMContentLoaded", function() {
    // ===== CONFIGURACIÓN INICIAL ===== //
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'es';
    
    // Aplicar configuración guardada
    document.documentElement.lang = savedLang;
    document.getElementById('theme-style').setAttribute('href', `${savedTheme}.css`);
    document.getElementById('theme-toggle').textContent = savedTheme === 'light' ? '🌙' : '🌞';

    // ===== FUNCIÓN FECHA/HORA ===== //
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
            timeZone: lang === 'en' ? 'UTC' : 'Europe/Madrid'
        };

        try {
            const dateStr = now.toLocaleDateString(lang, options);
            const timeStr = now.toLocaleTimeString(lang, {hour: '2-digit', minute: '2-digit'});
            document.getElementById('current-date-time').textContent = `${dateStr} • ${timeStr}`;
        } catch (e) {
            console.error("Error formateando fecha:", e);
            document.getElementById('current-date-time').textContent = now.toLocaleString();
        }
    }

    // ===== TRADUCCIONES COMPLETAS (IDs CORREGIDOS) ===== //
    const texts = {
        es: {
            // Secciones principales
            'page-title': "Tina Calleja - CV",
            'name': "Tina Calleja",
            'title': "Desarrolladora Web Full Stack",
            'about-title': "Sobre Mí",
            'about-text': `Soy desarrolladora web full-stack con experiencia en backend y frontend, apasionada por la tecnología y la seguridad informática.
            Mi formación intensiva en desarrollo web, junto con mi actual formación en seguridad informática, me ha permitido adquirir habilidades clave en programación, análisis de datos y gestión eficiente de procesos.
            Además, mi experiencia en diversos sectores me ha brindado una gran capacidad de adaptación, pensamiento analítico y trabajo en equipo, habilidades esenciales tanto en entornos de desarrollo como en la resolución de desafíos en ciberseguridad.`,
            'education-title': "Formación Académica",
            'experience-title': "Experiencia Laboral",
            'languages-title': "Idiomas",
            'contact-title': "Contacto",
            'contact-text': "📍 Bilbao, 48013",
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
            'internships-details': "Desarrollo de procesamiento de datos en C++.",
            'internships2': "2017 - Prácticas",
            'internships2-details': "Instalación y configuración de servidores Windows Server 2012.",
            'pesaje': "Pesaje del Norte - Bilbao",
            'pesaje-details': "Informatización de datos con software específico.",
            'manufacturing': "Sector Industria Manufacturera (2002 - 2008)",
            'healthcare': "Sector Socio-Sanitario (2016)",
            'commerce': "Sector Comercial (2012)",
            'hospitality': "Sector Hostelería (2015 - 2018)",
            'dandais': "D&A Innovative Systems",
            'aduogroup': "Aduogroup Bilbao",

            // Formato fecha
            'dateFormat': {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Europe/Madrid'
            }
        },
        en: {
            // ... (traducciones en inglés con la misma estructura y IDs con guiones)
            // Ejemplo:
            'page-title': "Tina Calleja - Resume",
            'name': "Tina Calleja",
            'title': "Full Stack Web Developer",
            'about-title': "About Me",
            // ... (resto de traducciones en inglés)
            'dateFormat': {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'UTC'
            }
        },
        eu: {
            // ... (traducciones en euskera con la misma estructura y IDs con guiones)
            // Ejemplo:
            'page-title': "Tina Calleja - Curriculum",
            'name': "Tina Calleja",
            'title': "Full Stack Web Garatzailea",
            'about-title': "Niri Buruz",
            // ... (resto de traducciones en euskera)
            'dateFormat': {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Europe/Madrid'
            }
        }
    };

    // ===== FUNCIÓN CAMBIO DE IDIOMA ===== //
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

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
            'dandais', 'aduogroup'
        ];

        htmlIds.forEach(id => {
            const element = document.getElementById(id);
            if (element && texts[lang][id]) {
                if (id === 'about-text') {
                    element.innerHTML = texts[lang][id].replace(/\n/g, "<br>");
                } else {
                    element.textContent = texts[lang][id];
                }
            }
        });

        updateDateTime();
    }

    // ===== EVENT LISTENERS ===== //
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

    document.getElementById("theme-toggle").addEventListener("click", function() {
        const themeStyle = document.getElementById("theme-style");
        const newTheme = themeStyle.getAttribute("href") === "light.css" ? "dark" : "light";
        themeStyle.setAttribute("href", `${newTheme}.css`);
        this.textContent = newTheme === "light" ? "🌙" : "🌞";
        localStorage.setItem('theme', newTheme);
    });

    // ===== INICIALIZACIÓN ===== //
    changeLanguage(savedLang);
    updateDateTime();
    setInterval(updateDateTime, 1000);
});