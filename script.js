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
            peñascal: "Fundación Peñascal",
            ede: "Fundación EDE",
            urduliz: "Piscina Urduliz 42",
            android: "Curso Programación Aplicaciones Android",
            certification: "Certificado Profesionalidad Sistemas Informáticos",
            highschool: "Estudios de Bachillerato",
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
            peñascal: "Peñascal Foundation",
            ede: "EDE Foundation",
            urduliz: "42 Urduliz Piscine",
            android: "Android App Development Course",
            certification: "Professional Certification in IT Systems",
            highschool: "High School Studies",
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
        document.getElementById("peñascal").textContent = texts[lang].peñascal;
        document.getElementById("ede").textContent = texts[lang].ede;
        document.getElementById("urduliz").textContent = texts[lang].urduliz;
        document.getElementById("android").textContent = texts[lang].android;
        document.getElementById("certification").textContent = texts[lang].certification;
        document.getElementById("highschool").textContent = texts[lang].highschool;
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

    // Agregar event listeners a los botones de idioma
    document.getElementById("lang-es").addEventListener("click", function() {
        changeLanguage("es");
    });

    document.getElementById("lang-en").addEventListener("click", function() {
        changeLanguage("en");
    });
});
