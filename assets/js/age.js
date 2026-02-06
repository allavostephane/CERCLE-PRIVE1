document.addEventListener("DOMContentLoaded", () => {
    const ageGate = document.getElementById("age-gate");

    // Sécurité : si l'élément n'existe pas
    if (!ageGate) return;

    // Vérifier si l'âge est déjà confirmé
    const ageAccepted = localStorage.getItem("ageAccepted");

    if (ageAccepted !== "true") {
        ageGate.classList.add("active");
        document.body.style.overflow = "hidden";
    }
});

function acceptAge() {
    localStorage.setItem("ageAccepted", "true");
    document.getElementById("age-gate").classList.remove("active");
    document.body.style.overflow = "auto";
}

function leaveSite() {
    window.location.href = "https://www.google.com";
}
