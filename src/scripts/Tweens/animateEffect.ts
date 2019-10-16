import { firstTween } from "./tween";
import { secondTween } from "./tween1";
import { thirdTween } from "./tween2";
import { forthTween } from "./tween3";

export function animateEffect(left: HTMLElement, right: HTMLElement) {
  const chooser = Math.floor(Math.random() * 4) + 1;
  switch (chooser) {
    case 1:
    default:
      firstTween(left, right);
      break;
    case 2:
      secondTween(left, right);
      break;
    case 3:
      thirdTween(left, right);
      break;
    case 4:
      forthTween(left, right);
      break;
  }
}
