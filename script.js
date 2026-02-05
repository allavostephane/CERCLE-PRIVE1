/* ==========================
   POPUP +18 (Glassmorphism)
========================== */
document.addEventListener("DOMContentLoaded", () => {
    const agePopup = document.getElementById("age-popup");
    const acceptBtn = document.getElementById("accept-age");
    const declineBtn = document.getElementById("decline-age");

    // Vérifie si déjà accepté
    if (!localStorage.getItem("ageVerified")) {
        agePopup.classList.add("active");
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("ageVerified", "true");
        agePopup.classList.remove("active");
    });

    declineBtn.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });
});

/* ==========================
   MODE JOUR / NUIT
========================== */
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

// Charger le thème sauvegardé
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

/* ==========================
   NAVIGATION CARTES
========================== */
document.getElementById("card-femme").addEventListener("click", () => {
    window.location.href = "femmes.html";
});

document.getElementById("card-homme").addEventListener("click", () => {
    window.location.href = "hommes.html";
});
