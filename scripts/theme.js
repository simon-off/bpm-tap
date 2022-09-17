const body = document.getElementsByTagName("body")[0];
const toggle = document.getElementById("theme-toggle");

let darkMode = localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false;

setColorMode(darkMode);

toggle.addEventListener("click", () => {
  darkMode = !darkMode;
  setColorMode(darkMode);
});

function setColorMode(darkMode) {
  if (darkMode) {
    toggle.src = "icons/sun.svg";
    body.classList.add("dark-mode");
  } else {
    toggle.src = "icons/moon.svg";
    body.classList.remove("dark-mode");
  }
  localStorage.setItem("darkMode", darkMode);
}
