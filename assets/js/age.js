if (localStorage.getItem("ageAccepted")) {
  document.getElementById("age-gate").style.display = "none";
}

function acceptAge() {
  localStorage.setItem("ageAccepted", "true");
  document.getElementById("age-gate").style.display = "none";
}

function leaveSite() {
  window.location.href = "https://google.com";
}
