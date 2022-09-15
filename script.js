const instructions = document.getElementById("instructions");
const bpm_label = document.getElementById("bpm");
const reset_btn = document.getElementById("reset");
const taps = [];
let timestamp = null;

reset();

document.addEventListener("keydown", () => {
  tap();
});

document.addEventListener("click", () => {
  tap();
});

function tap() {
  if (!timestamp) {
    bpm_label.innerHTML = 0;
    reset_btn.style.display = "block";
    instructions.style.display = "none";
  } else {
    if (taps.push(Date.now() - timestamp) >= 17) {
      taps.shift();
    }
    let avarage = taps.reduce((a, b) => a + b) / taps.length;
    let bpm = (60000 / avarage).toFixed(0);
    bpm_label.innerHTML = bpm;
  }
  timestamp = Date.now();
}

reset_btn.addEventListener("click", () => {
  reset();
});

function reset() {
  taps.length = 0;
  timestamp = null;
  bpm_label.innerHTML = "";
  reset_btn.blur();
  reset_btn.style.display = "none";
  instructions.style.display = "block";
}
