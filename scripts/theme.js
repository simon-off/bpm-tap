const body = document.querySelector("body");
const toggle = document.querySelector("#theme-toggle");

let darkMode = localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false;

window.onload = () => {
  document.documentElement.classList.add("fade");
};

toggle.addEventListener("click", () => {
  darkMode = !darkMode;
  toggleDarkMode(darkMode);
});

function toggleDarkMode(darkMode) {
  if (darkMode) {
    toggle.src = "icons/sun.svg";
    body.classList.add("dark-mode");
  } else {
    toggle.src = "icons/moon.svg";
    body.classList.remove("dark-mode");
  }
  localStorage.setItem("darkMode", darkMode);
}

toggleDarkMode(darkMode);
