import { addStyle, removeStyle } from "../styles";
import TWEEN from "@tweenjs/tween.js";
import { EasingTypes, getEasing } from "./getEasing";

type Movement =
  | "horizontalRight"
  | "horizontalLeft"
  | "verticalTop"
  | "VerticalBottom"
  | "horizontalAndVerticalRightUp"
  | "horizontalAndVerticalRightDown"
  | "horizontalAndVerticalLeftUp"
  | "horizontalAndVerticalLeftDown";

type StartFinish = "none" | "start" | "finish";

export function createTween(
  coords: { x: number; y: number },
  tweenNum: { x: number; y: number },
  left: HTMLElement,
  right: HTMLElement,
  position: StartFinish,
  move: Movement,
  speed: number,
  easing: EasingTypes
) {
  const tween = new TWEEN.Tween(coords)
    .to(
      {
        y: coords.y + tweenNum.y,
        x: coords.x + tweenNum.x
      },
      speed / 5
    )
    .delay(0)
    .onStart(() => {
      if (position === "start") {
        addStyle(left, right);
      }
    })
    .onUpdate(() => {
      const numberNegX = -coords.x;
      const numberNegY = -coords.y;
      switch (move) {
        case "horizontalRight":
          left.style.left = `${coords.x}px`;
          right.style.left = `${numberNegX}px`;
          break;
        case "horizontalLeft":
          right.style.left = `${coords.x}px`;
          left.style.left = `${numberNegX}px`;
          break;
        case "verticalTop":
          left.style.top = `${coords.y}px`;
          right.style.top = `${numberNegY}px`;
          break;
        case "VerticalBottom":
          right.style.top = `${coords.y}px`;
          left.style.top = `${numberNegY}px`;
          break;
        case "horizontalAndVerticalRightUp":
          left.style.left = `${coords.x}px`;
          right.style.left = `${numberNegX}px`;
          left.style.top = `${coords.y}px`;
          right.style.top = `${numberNegY}px`;
          break;
        case "horizontalAndVerticalRightDown":
          left.style.left = `${coords.x}px`;
          right.style.left = `${numberNegX}px`;
          right.style.top = `${coords.y}px`;
          left.style.top = `${numberNegY}px`;
          break;
        case "horizontalAndVerticalLeftUp":
          right.style.left = `${coords.x}px`;
          left.style.left = `${numberNegX}px`;
          left.style.top = `${coords.x}px`;
          right.style.top = `${numberNegY}px`;
          break;
        case "horizontalAndVerticalLeftDown":
          right.style.left = `${coords.x}px`;
          left.style.left = `${numberNegX}px`;
          right.style.top = `${coords.y}px`;
          left.style.top = `${numberNegY}px`;
          break;
      }
    })
    .onComplete(() => {
      if (position === "finish") {
        removeStyle(left, right);
      }
    });
  getEasing(easing, tween);
  // getOnUpdate(left, right, move, tween, coords);
  return tween;
}
