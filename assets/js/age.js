document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("age-popup");
    const accept = document.getElementById("accept-age");
    const decline = document.getElementById("decline-age");

    if(!localStorage.getItem("ageConfirmed")){
        popup.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    accept.addEventListener("click", () => {
        localStorage.setItem("ageConfirmed", "true");
        popup.classList.remove("active");
        document.body.style.overflow = "auto";
    });

    decline.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });
});
