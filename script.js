document.addEventListener("DOMContentLoaded", function() {
    // Modo oscuro/claro
    document.getElementById("theme-toggle").addEventListener("click", function() {
        let themeStyle = document.getElementById("theme-style");

        if (themeStyle.getAttribute("href") === "light.css") {
            themeStyle.setAttribute("href", "dark.css");
            this.textContent = "☀️ Modo Claro";
        } else {
            themeStyle.setAttribute("href", "light.css");
            this.textContent = "🌙 Modo Oscuro";
        }
    });

    // Textos en Español e Inglés
    const texts = {
        es: {
            pageTitle: "Tina Calleja - CV",
            name: "Tina Calleja",
            title: "Desarrolladora Web Full Stack",
            aboutTitle: "Sobre Mí",
            aboutText: `Soy desarrolladora web full-stack con experiencia en backend y frontend, apasionada por la tecnología y la seguridad informática.
            Mi formación intensiva en desarrollo web, junto con mi actual formación en seguridad informática, me ha permitido adquirir habilidades clave en programación, análisis de datos y gestión eficiente de procesos.
            Además, mi experiencia en diversos sectores me ha brindado una gran capacidad de adaptación, pensamiento analítico y trabajo en equipo, habilidades esenciales tanto en entornos de desarrollo como en la resolución de desafíos en ciberseguridad.`,
            skillsTitle: "Habilidades Técnicas",
            languagesTitle: "Lenguajes",
            webTechTitle: "Tecnologías Web",
            toolsTitle: "Herramientas",
            methodologiesTitle: "Metodologías",
            educationTitle: "Formación Académica",
            peñascalDetails: "Fundación Peñascal (Noviembre 2023 - Junio 2024)",
            edeDetails: "Fundación EDE (Octubre 2024 - Diciembre 2024)",
            urdulizDetails: "(Octubre 2023)",
            androidDetails: "Fundación EDE (Octubre 2022 - Marzo 2023)",
            certificationDetails: "IFAP (2017)",
            highschoolDetails: "I.E.S Errekaldeberri (2000)",
            experienceTitle: "Experiencia Laboral",
            internships: "Prácticas",
            internships2: "Prácticas",
            pesaje: "Pesaje del Norte - Bilbao",
            manufacturing: "Sector Industria Manufacturera",
            healthcare: "Sector Socio-Sanitario",
            commerce: "Sector Comercial",
            hospitality: "Sector Hostelería",
            languagesSectionTitle: "Idiomas",
            spanish: "Castellano (nativo)",
            basque: "Euskera (básico)",
            english: "Inglés (técnico)",
            contactTitle: "Contacto",
            contactText: "📍 Bilbao, 48013"
        },
        en: {
            pageTitle: "Tina Calleja - Resume",
            name: "Tina Calleja",
            title: "Full Stack Web Developer",
            aboutTitle: "About Me",
            aboutText: `I am a full-stack web developer with experience in backend and frontend, passionate about technology and cybersecurity.
            My intensive training in web development, along with my current studies in cybersecurity, has allowed me to acquire key skills in programming, data analysis, and efficient process management.
            Additionally, my experience in various sectors has given me a strong ability to adapt, analytical thinking, and teamwork—essential skills both in development environments and in solving cybersecurity challenges.`,
            skillsTitle: "Technical Skills",
            languagesTitle: "Programming Languages",
            webTechTitle: "Web Technologies",
            toolsTitle: "Tools",
            methodologiesTitle: "Methodologies",
            educationTitle: "Education",
            peñascalDetails: "Peñascal Foundation (November 2023 - June 2024)",
            edeDetails: "EDE Foundation (October 2024 - December 2024)",
            urdulizDetails: "(October 2023)",
            androidDetails: "EDE Foundation (October 2022 - March 2023)",
            certificationDetails: "IFAP (2017)",
            highschoolDetails: "I.E.S Errekaldeberri (2000)",
            experienceTitle: "Work Experience",
            internships: "Internships",
            internships2: "Internships",
            pesaje: "Pesaje del Norte - Bilbao",
            manufacturing: "Manufacturing Industry Sector",
            healthcare: "Healthcare Sector",
            commerce: "Commercial Sector",
            hospitality: "Hospitality Sector",
            languagesSectionTitle: "Languages",
            spanish: "Spanish (native)",
            basque: "Basque (basic)",
            english: "English (technical)",
            contactTitle: "Contact",
            contactText: "📍 Bilbao, 48013"
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        document.getElementById("page-title").textContent = texts[lang].pageTitle;
        document.getElementById("name").textContent = texts[lang].name;
        document.getElementById("title").textContent = texts[lang].title;
        document.getElementById("about-title").textContent = texts[lang].aboutTitle;
        document.getElementById("about-text").innerHTML = texts[lang].aboutText.replace(/\n/g, "<br>");
        document.getElementById("skills-title").textContent = texts[lang].skillsTitle;
        document.getElementById("languages-title").textContent = texts[lang].languagesTitle;
        document.getElementById("web-tech-title").textContent = texts[lang].webTechTitle;
        document.getElementById("tools-title").textContent = texts[lang].toolsTitle;
        document.getElementById("methodologies-title").textContent = texts[lang].methodologiesTitle;
        document.getElementById("education-title").textContent = texts[lang].educationTitle;
        document.getElementById("peñascal-details").textContent = texts[lang].peñascalDetails;
        document.getElementById("ede-details").textContent = texts[lang].edeDetails;
        document.getElementById("urduliz-details").textContent = texts[lang].urdulizDetails;
        document.getElementById("android-details").textContent = texts[lang].androidDetails;
        document.getElementById("certification-details").textContent = texts[lang].certificationDetails;
        document.getElementById("highschool-details").textContent = texts[lang].highschoolDetails;
        document.getElementById("experience-title").textContent = texts[lang].experienceTitle;
        document.getElementById("internships").textContent = texts[lang].internships;
        document.getElementById("internships2").textContent = texts[lang].internships2;
        document.getElementById("pesaje").textContent = texts[lang].pesaje;
        document.getElementById("manufacturing").textContent = texts[lang].manufacturing;
        document.getElementById("healthcare").textContent = texts[lang].healthcare;
        document.getElementById("commerce").textContent = texts[lang].commerce;
        document.getElementById("hospitality").textContent = texts[lang].hospitality;
        document.getElementById("languages-section-title").textContent = texts[lang].languagesSectionTitle;
        document.getElementById("spanish").textContent = texts[lang].spanish;
        document.getElementById("basque").textContent = texts[lang].basque;
        document.getElementById("english").textContent = texts[lang].english;
        document.getElementById("contact-title").textContent = texts[lang].contactTitle;
        document.getElementById("contact-text").textContent = texts[lang].contactText;
    }

    // Event listeners para cambiar el idioma
    document.getElementById("lang-es").addEventListener("click", function() {
        changeLanguage("es");
    });

    document.getElementById("lang-en").addEventListener("click", function() {
        changeLanguage("en");
    });
});
