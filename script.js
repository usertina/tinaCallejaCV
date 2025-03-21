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
