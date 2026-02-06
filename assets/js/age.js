document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("age-popup");
    const acceptBtn = document.getElementById("accept-age");
    const declineBtn = document.getElementById("decline-age");

    // Si l'utilisateur a déjà confirmé son âge, on cache le popup
    if (!localStorage.getItem("ageConfirmed")) {
        popup.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    // Bouton accepter
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("ageConfirmed", "true");
        popup.classList.remove("active");
        document.body.style.overflow = "auto";
    });

    // Bouton quitter
    declineBtn.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });
});
