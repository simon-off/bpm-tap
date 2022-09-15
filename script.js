const instructions = document.getElementById("instructions");
const bpm_label = document.getElementById("bpm");
const reset_btn = document.getElementById("reset");
const taps = [];
let timestamp = null;

reset();

document.addEventListener("keydown", (event) => {
  if (event.key == "r") {
    reset();
    return;
  }
  if (!event.repeat) tap();
});

document.body.addEventListener("mousedown", (event) => {
  if (event.target != reset_btn) tap();
});

function tap() {
  if (!timestamp) {
    bpm_label.innerHTML = 0;
    bpm_label.style.display = "block";
    reset_btn.style.display = "block";
    instructions.style.display = "none";
  } else {
    if (taps.push(Date.now() - timestamp) >= 17) {
      taps.shift();
    }
    let average = taps.reduce((a, b) => a + b) / taps.length;
    let bpm = (60000 / average).toFixed(0);
    bpm_label.innerHTML = bpm;
  }
  timestamp = Date.now();
  blink();
}

reset_btn.addEventListener("click", () => {
  reset();
});

function reset() {
  taps.length = 0;
  timestamp = null;
  bpm_label.innerHTML = "";
  bpm_label.style.display = "none";
  reset_btn.blur();
  reset_btn.style.display = "none";
  instructions.style.display = "block";
}

function blink() {
  bpm_label.style.filter = "invert(15%)";
  setTimeout(() => (bpm_label.style.filter = "invert(0%)"), 50);
}
