document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("age-popup");
  const acceptBtn = document.getElementById("accept-age");
  const declineBtn = document.getElementById("decline-age");

  // Afficher le pop-up si pas encore accepté
  if (!localStorage.getItem("ageConfirmed")) {
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Accepter
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("ageConfirmed", "true");
    popup.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Refuser
  declineBtn.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });
});
