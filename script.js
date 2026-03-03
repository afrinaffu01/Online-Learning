document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  if (!toggle) return;

  // Set mode on load
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark");
    toggle.checked = true;
  }

  // Toggle listener
  toggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "on");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "off");
    }
  });
});
