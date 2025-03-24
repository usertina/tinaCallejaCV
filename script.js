document.addEventListener("DOMContentLoaded", function() {
    // Cambio de tema (Modo claro/oscuro)
    document.getElementById("theme-toggle").addEventListener("click", function() {
        let themeStyle = document.getElementById("theme-style");

        if (themeStyle.getAttribute("href") === "light.css") {
            themeStyle.setAttribute("href", "dark.css");
        } else {
            themeStyle.setAttribute("href", "light.css");
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
            spanish: "Castellano (nativo)",
            basque: "Euskera (básico)",
            english: "Inglés (técnico)"
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
            spanish: "Spanish (native)",
            basque: "Basque (basic)",
            english: "English (technical)"
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
        document.getElementById("spanish").textContent = texts[lang].spanish;
        document.getElementById("basque").textContent = texts[lang].basque;
        document.getElementById("english").textContent = texts[lang].english;
    }

    // Listeners para cambiar el idioma
    document.getElementById("lang-es").addEventListener("click", function() {
        changeLanguage("es");
    });

    document.getElementById("lang-en").addEventListener("click", function() {
        changeLanguage("en");
    });
});
