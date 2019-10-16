import { detectFeatures } from "./featureDetection";
import { timer } from "./timer";
import { callAnimate } from "./animation";
// const classLeft = document.getElementsByClassName("effect--left");
// const classRight = document.getElementsByClassName("effect--right");

function onLoaded() {
  detectFeatures();
  timer();
  callAnimate();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onLoaded);
} else {
  // `DOMContentLoaded` already fired
  onLoaded();
}
