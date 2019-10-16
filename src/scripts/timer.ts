import { callAnimate } from "./animation";
const classLeft = document.getElementsByClassName("effect--left");
const classRight = document.getElementsByClassName("effect--right");

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function timer() {
  const timeoutMs: number = getRandomNumber(5000, 10000);
  const interval = setInterval(callAnimate, timeoutMs);
}
