document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.querySelector(".theme-toggle");

  // If there's no toggle button on this page, do nothing
  if (!toggleBtn) {
    console.log("No theme toggle button found on this page.");
    return;
  }

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }

  // Set initial icon
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }

  // Handle click
  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    console.log("Theme is now:", isDark ? "dark" : "light");
  });
});