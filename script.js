document.addEventListener("DOMContentLoaded", function() {
    // Cambio de tema (Modo claro/oscuro)
    document.getElementById("theme-toggle").addEventListener("click", function() {
        let themeStyle = document.getElementById("theme-style");
        let themeButton = document.getElementById("theme-toggle");

        if (themeStyle.getAttribute("href") === "light.css") {
            themeStyle.setAttribute("href", "dark.css"); // Cambiar a modo oscuro
            themeButton.textContent = "🌞"; // Cambiar icono a sol
        } else {
            themeStyle.setAttribute("href", "light.css"); // Cambiar a modo claro
            themeButton.textContent = "🌙"; // Cambiar icono a luna
        }
    });


    // Textos en español e inglés
    const texts = {
        es: {
            pageTitle: "Tina Calleja - CV",
            name: "Tina Calleja",
            title: "Desarrolladora Web Full Stack",
            aboutTitle: "Sobre Mí",
            aboutText: `Soy desarrolladora web full-stack con experiencia en backend y frontend, apasionada por la tecnología y la seguridad informática.
            Mi formación intensiva en desarrollo web, junto con mi actual formación en seguridad informática, me ha permitido adquirir habilidades clave en programación, análisis de datos y gestión eficiente de procesos.
            Además, mi experiencia en diversos sectores me ha brindado una gran capacidad de adaptación, pensamiento analítico y trabajo en equipo, habilidades esenciales tanto en entornos de desarrollo como en la resolución de desafíos en ciberseguridad.`,
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

            // Formación Académica
            "cybersecurity": "Seguridad Informática (IFCT0109)",
            "cybersecurity-details": "EDE Fundazioa (Febrero 2025 - Junio 2025)",
            "cybersecurity-description": "420 horas en análisis de vulnerabilidades, protección de sistemas, detección de amenazas y prácticas con Raspberry Pi Pico y programación en MicroPython orientadas a seguridad y control de dispositivos.",
            "java-course": "Curso de Java",
            "java-details": "Fundación EDE (Octubre 2024 - Diciembre 2024)",
            "java-description": "210 horas en Programación Orientada a Objetos, estructuras de control y gestión de bases de datos relacionales.",
            "bootcamp": "Bootcamp Desarrollo Web Full-Stack",
            "bootcamp-details": "Kooperativa Peñascal (Noviembre 2023 - Junio 2024)",
            "bootcamp-description": "775 horas de formación intensiva en desarrollo web full-stack.",
            "urduliz": "Piscina Urduliz 42",
            "urduliz-details": "(Octubre 2023)",
            "urduliz-description": "- Formación en lenguaje C con metodología de gamificación y aprendizaje colaborativo en entorno macOS.",
            "android-course": "Curso Programación Aplicaciones Android",
            "android-details": "Fundación EDE (Octubre 2022 - Marzo 2023)",
            "android-description": "350 horas de desarrollo de aplicaciones nativas con Java y SQL.",
            "certification": "Certificado Profesionalidad Sistemas Microinformáticos",
            "certification-details": "IFAP (2017)",
            "certification-description": " 560 horas en instalación y configuración de sistemas operativos, servidores y redes.",
            "highschool": "Estudios de Bachillerato",
            "highschool-details": "I.E.S Errekaldeberri (2000)",

            // Experiencia Laboral
            
        "internships": "2024 - Prácticas",
        "internships-details": "Desarrollo de procesamiento de datos en C++.",
        "internships2": "2017 - Prácticas",
        "internships2-details": "Instalación y configuración de servidores Windows Server 2012.",
        "pesaje": "Pesaje del Norte - Bilbao",
        "pesaje-details": "Informatización de datos con software específico.",
        "manufacturing": "Sector Industria Manufacturera (2002 - 2008)",
        "healthcare": "Sector Socio-Sanitario (2016)",
        "commerce": "Sector Comercial (2012)",
        "hospitality": "Sector Hostelería (2015 - 2018)",
        },
        en: {
            pageTitle: "Tina Calleja - Resume",
            name: "Tina Calleja",
            title: "Full Stack Web Developer",
            aboutTitle: "About Me",
            aboutText: `I am a full-stack web developer with experience in backend and frontend, passionate about technology and cybersecurity.
            My intensive training in web development, along with my current studies in cybersecurity, has allowed me to acquire key skills in programming, data analysis, and efficient process management.
            Additionally, my experience in various sectors has given me a strong ability to adapt, analytical thinking, and teamwork—essential skills both in development environments and in solving cybersecurity challenges.`,
            educationTitle: "Education",
            experienceTitle: "Work Experience",
            languagesTitle: "Languages",
            contactTitle: "Contact",
            contactText: "📍 Bilbao, 48013",
            linkedin: "LinkedIn",
            github: "GitHub",
            portfolio: "Portfolio",
            curriculum: "Currículum Vitae",
            spanish: "Spanish (native)",
            basque: "Basque (basic)",
            english: "English (technical)",

            // Academic Background
            "cybersecurity": "Cybersecurity (IFCT0109)",
            "cybersecurity-details": "EDE Foundation (February 2025 - June 2025)",
            "cybersecurity-description": "420 hours in vulnerability analysis, system protection, threat detection, and hands-on practice with Raspberry Pi Pico and MicroPython programming focused on security and device control.",
            "java-course": "Java Course",
            "java-details": "Fundación EDE (October 2024 - December 2024)",
            "java-description": "210 hours in Object-Oriented Programming, control structures, and relational database management.",
            "bootcamp": "Full-Stack Web Development Bootcamp",
            "bootcamp-details": "Kooperativa Peñascal (November 2023 - June 2024)",
            "bootcamp-description": "775 hours of intensive training in full-stack web development.",
            "urduliz": "Piscina Urduliz 42",
            "urduliz-details": "(October 2023)",
            "urduliz-description": "C language training using gamification and collaborative learning methodology in a macOS environment.",
            "android-course": "Android Application Development Course",
            "android-details": "Fundación EDE (October 2022 - March 2023)",
            "android-description": "350 hours of native app development with Java and SQL.",
            "certification": "Professional Certificate in IT Systems",
            "certification-details": "IFAP (2017)",
            "certification-description": "560 hours in operating systems, servers and network installation and configuration.",
            "highschool": "High School Studies",
            "highschool-details": "I.E.S Errekaldeberri (2000)",

            // Work Experience
            "internships": "2024 - Internship",
            "internships-details": "Data processing development in C++.",
            "internships2": "2017 - Internship",
            "internships2-details": "Installation and configuration of Windows Server 2012.",
            "pesaje": "Pesaje del Norte - Bilbao",
            "pesaje-details": "Data digitization with specialized software.",
            "manufacturing": "Manufacturing Industry Sector (2002 - 2008)",
            "healthcare": "Healthcare Sector (2016)",
            "commerce": "Commercial Sector (2012)",
            "hospitality": "Hospitality Sector (2015 - 2018)",
        },
        eu: {
            pageTitle: "Tina Calleja - CV",
            name: "Tina Calleja",
            title: "Full Stack Web Garatzailea",
            aboutTitle: "Niri Buruz",
            aboutText: `Full-stack web garatzailea naiz, backend eta frontend esperientziarekin, teknologiaren eta zibersegurtasunaren zale.
            Web garapeneko prestakuntza intentsiboari eta zibersegurtasunean egiten ari naizen ikasketei esker, programazioan, datuen analisian eta prozesuen kudeaketa eraginkorrean trebetasun garrantzitsuak eskuratu ditut.
            Horrez gain, sektore ezberdinetako esperientziari esker, egokitzeko gaitasun handia, pentsamendu analitikoa eta talde-lanerako trebetasuna lortu ditut, bai garapen-inguruneetan bai zibersegurtasun erronkei aurre egitean funtsezkoak diren gaitasunak.`,
            educationTitle: "Hezkuntza",
            experienceTitle: "Lan Esperientzia",
            languagesTitle: "Hizkuntzak",
            contactTitle: "Kontaktua",
            contactText: "📍 Bilbo, 48013",
            linkedin: "LinkedIn",
            github: "GitHub",
            portfolio: "Portfolio",
            curriculum: "Currículum Vitae",
            spanish: "Gaztelania (ama hizkuntza)",
            basque: "Euskara (oinarrizkoa)",
            english: "Ingelesa (teknikoa)",

           // Hezkuntza
            "cybersecurity": "Zibersegurtasuna (IFCT0109)",
            "cybersecurity-details": "EDE Fundazioa (2025eko Otsaila - 2025eko Ekaina)",
            "cybersecurity-description": "420 ordu ahultasunak aztertzen, sistemak babesten, mehatxuak detektatzen eta Raspberry Pi Pico-rekin eta MicroPython programazioarekin segurtasunerako eta gailuen kontrolerako praktikak egiten.",
            "java-course": "Java Ikastaroa",
            "java-details": "Fundación EDE (2024ko Urria - 2024ko Abendua)",
            "java-description": "210 ordu, Objektuetara Bideratutako Programazioa, kontrol-egiturak eta erlazionatutako datu-baseen kudeaketa.",
            "bootcamp": "Full-Stack Web Garapen Bootcampa",
            "bootcamp-details": "Kooperatiba Peñascal (2023ko Azaroa - 2024ko Ekaina)",
            "bootcamp-description": "775 orduko prestakuntza intentsiboa full-stack web garapenean.",
            "urduliz": "Urduliz 42 Igerilekua",
            "urduliz-details": "(2023ko Urria)",
            "urduliz-description": "C hizkuntzan prestakuntza, gamifikazioa eta ikaskuntza kolaboratiboa erabiliz macOS ingurune batean.",
            "android-course": "Android Aplikazioen Garapen Ikastaroa",
            "android-details": "Fundación EDE (2022ko Urria - 2023ko Martxoa)",
            "android-description": "350 ordu, Java eta SQL erabiliz aplikazio natiboen garapenean.",
            "certification": "Sistema Mikroinformatikoen Profesionaltasun Ziurtagiria",
            "certification-details": "IFAP (2017)",
            "certification-description": "560 ordu sistema eragileetan, zerbitzariak eta sareen instalazio eta konfigurazioan.",
            "highschool": "Batxilergoko Ikasketak",
            "highschool-details": "I.E.S Errekaldeberri (2000)",

// Lan Esperientzia
"internships": "2024 - Praktikak",
"internships-details": "Datu-prozesamenduaren garapena C++-n.",
"internships2": "2017 - Praktikak",
"internships2-details": "Windows Server 2012 instalazioa eta konfigurazioa.",
"pesaje": "Pesaje del Norte - Bilbo",
"pesaje-details": "Datuen digitalizazioa software espezializatua erabiliz.",
"manufacturing": "Industria Ekoizpen Sektorea (2002 - 2008)",
"healthcare": "Gizarte-Osasun Sektorea (2016)",
"commerce": "Merkataritza Sektorea (2012)",
"hospitality": "Ostalari Sektorea (2015 - 2018)",

        }
};

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        document.getElementById("page-title").textContent = texts[lang].pageTitle;
        document.getElementById("name").textContent = texts[lang].name;
        document.getElementById("title").textContent = texts[lang].title;
        document.getElementById("about-title").textContent = texts[lang].aboutTitle;
        document.getElementById("about-text").innerHTML = texts[lang].aboutText.replace(/\n/g, "<br>");
        document.getElementById("education-title").textContent = texts[lang].educationTitle;
        document.getElementById("experience-title").textContent = texts[lang].experienceTitle;
        document.getElementById("languages-title").textContent = texts[lang].languagesTitle;
        document.getElementById("contact-title").textContent = texts[lang].contactTitle;
        document.getElementById("contact-text").textContent = texts[lang].contactText;
        document.getElementById("linkedin").textContent = texts[lang].linkedin;
        document.getElementById("github").textContent = texts[lang].github;
        document.getElementById("portfolio").textContent = texts[lang].portfolio;
        document.getElementById("curriculum").textContent = texts[lang].curriculum;
        document.getElementById("spanish").textContent = texts[lang].spanish;
        document.getElementById("basque").textContent = texts[lang].basque;
        document.getElementById("english").textContent = texts[lang].english;
    
        // Actualizar textos de la formación académica
        const educationElements = [
    "java-course", "java-details", "java-description",
    "bootcamp", "bootcamp-details", "bootcamp-description",
    "urduliz", "urduliz-details", "urduliz-description",
    "android-course", "android-details", "android-description",
    "certification", "certification-details", "certification-description",
    "highschool", "highschool-details",
    "cybersecurity", "cybersecurity-details", "cybersecurity-description" // << AÑADIDO AQUÍ
];
        ];

        educationElements.forEach(id => {
            if (document.getElementById(id)) {
                document.getElementById(id).textContent = texts[lang][id];
            }
        });

        // Actualizar textos de la experiencia laboral
        const experienceElements = [
            "internships", "internships-details", "internships2", "internships2-details",
            "pesaje", "pesaje-details", "manufacturing", "healthcare", "commerce", "hospitality"
        ];

        experienceElements.forEach(id => {
            if (document.getElementById(id)) {
                document.getElementById(id).textContent = texts[lang][id];
            }
        });
    }

    // Listeners para los botones de cambio de idioma
    document.getElementById("lang-es").addEventListener("click", () => changeLanguage("es"));
    document.getElementById("lang-en").addEventListener("click", () => changeLanguage("en"));
    document.getElementById("lang-eu").addEventListener("click", () => changeLanguage("eu"));
});

