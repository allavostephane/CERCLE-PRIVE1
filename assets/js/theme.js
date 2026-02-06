document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        body.classList.remove("dark");
        body.classList.add("light");
        toggle.checked = true;
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        toggle.checked = false;
    }

    // Changement manuel
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            body.classList.remove("dark");
            body.classList.add("light");
            localStorage.setItem("theme", "light");
        } else {
            body.classList.remove("light");
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    });
});
