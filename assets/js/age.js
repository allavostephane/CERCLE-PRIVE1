document.addEventListener("DOMContentLoaded", () => {
  const ageGate = document.getElementById("age-gate");

  if (localStorage.getItem("ageAccepted") === "true") {
    ageGate.style.display = "none";
  }
});

function acceptAge() {
  localStorage.setItem("ageAccepted", "true");
  document.getElementById("age-gate").style.display = "none";
}

function leaveSite() {
  window.location.href = "https://google.com";
}
