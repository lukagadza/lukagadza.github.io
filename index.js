// Get references to the theme toggle button, body element, and theme status element.
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeStatus = document.getElementById("theme-status");

// Check if a theme is stored in local storage and apply it.
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  themeStatus.textContent = `Current Theme: ${
    savedTheme === "dark" ? "Dark" : "Light"
  }`;
}

// Add a click event listener to the theme toggle button.
themeToggle.addEventListener("click", toggleTheme);

// Function to toggle the theme.
function toggleTheme() {
  // Toggle the "dark-theme" class on the body element.
  body.classList.toggle("dark-theme");

  // Update the theme status.
  themeStatus.textContent = `Current Theme: ${
    body.classList.contains("dark-theme") ? "Dark" : "Light"
  }`;

  // Store the selected theme in local storage.
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-theme") ? "dark" : "light"
  );
}

// Function to toggle the mobile menu.
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Toggle the "open" class on both the menu and icon elements.
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
