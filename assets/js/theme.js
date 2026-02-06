// Init theme
let savedTheme = localStorage.getItem("theme");
if(savedTheme) document.body.className = savedTheme;
const toggle = document.getElementById("theme-toggle");
toggle.checked = document.body.classList.contains("light");

// Changement du mode
toggle.addEventListener("change", () => {
    if(toggle.checked){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});
