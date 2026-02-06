document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Vérifier thème sauvegardé
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("dark", "light");
    body.classList.add(savedTheme);
    toggle.checked = savedTheme === "light";
  }

  // Changer le thème
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
