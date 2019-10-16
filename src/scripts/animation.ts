import { animateEffect } from "./Tweens/animateEffect";
import TWEEN from "@tweenjs/tween.js";
const classLeft = document.getElementsByClassName("effect--left");
const classRight = document.getElementsByClassName("effect--right");

export function callAnimate() {
  // tslint:disable-next-line:no-increment-decrement
  for (let i = 0; i < classLeft.length; ++i) {
    const elementLeft = classLeft[i] as HTMLElement;
    const elementRight = classRight[i] as HTMLElement;
    animateEffect(elementLeft, elementRight);
  }
}

export function animate(time: number) {
  const stopId = requestAnimationFrame(animate);
  TWEEN.update(time);
}
