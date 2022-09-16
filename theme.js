const sheet = document.getElementById("theme").sheet;
const toggle = document.getElementById("theme-toggle");

let colorMode = localStorage.getItem("colorMode") ? localStorage.getItem("colorMode") : "light";

changeColorMode(colorMode);

toggle.addEventListener("click", () => {
  if (colorMode == "light") {
    changeColorMode("dark");
    colorMode = "dark";
    return;
  }
  changeColorMode("light");
  colorMode = "light";
});

function changeColorMode(mode) {
  mode == "light" ? (toggle.src = "icon/moon.svg") : (toggle.src = "icon/sun.svg");
  sheet.deleteRule(0);
  sheet.insertRule(`@import "theme/${mode}.css";`, 0);
  localStorage.setItem("colorMode", mode);
}
