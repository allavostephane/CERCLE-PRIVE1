const toggle = document.getElementById("theme-toggle");

// Init theme
const savedTheme = localStorage.getItem("theme");
if(savedTheme){
    document.body.className = savedTheme;
    toggle.checked = savedTheme === "light";
}

toggle.addEventListener("change", () => {
    if(toggle.checked){
        document.body.className = "light";
        localStorage.setItem("theme", "light");
    } else {
        document.body.className = "dark";
        localStorage.setItem("theme", "dark");
    }
});
