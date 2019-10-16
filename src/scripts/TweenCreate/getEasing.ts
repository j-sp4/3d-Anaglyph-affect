import TWEEN from "@tweenjs/tween.js";

export type EasingTypes =
  | "Exponential"
  | "Bounce"
  | "Quadratic"
  | "Circular"
  | "Elastic"
  | "ExponentialIn"
  | "BounceIn"
  | "QuadraticIn"
  | "CircularIn"
  | "ElasticIn"
  | "ExponentialOut"
  | "BounceOut"
  | "QuadraticOut"
  | "CircularOut"
  | "ElasticOut"
  | "ExponentialInOut"
  | "BounceInOut"
  | "QuadraticInOut"
  | "CircularInOut"
  | "ElasticInOut";

export function getEasing(easing: EasingTypes, tween: TWEEN.Tween) {
  switch (easing) {
    case "ExponentialInOut":
      tween.easing(TWEEN.Easing.Exponential.InOut);
      break;
    case "BounceInOut":
      tween.easing(TWEEN.Easing.Bounce.InOut);
      break;
    case "QuadraticInOut":
      tween.easing(TWEEN.Easing.Quadratic.InOut);
      break;
    case "CircularInOut":
      tween.easing(TWEEN.Easing.Circular.InOut);
      break;
    case "ElasticInOut":
    default:
      return TWEEN.Easing.Elastic.InOut;
    case "ExponentialIn":
      tween.easing(TWEEN.Easing.Exponential.In);
      break;
    case "BounceIn":
      tween.easing(TWEEN.Easing.Bounce.In);
      break;
    case "QuadraticIn":
      tween.easing(TWEEN.Easing.Quadratic.In);
      break;
    case "CircularIn":
      tween.easing(TWEEN.Easing.Circular.In);
      break;
    case "ElasticIn":
      return TWEEN.Easing.Elastic.In;
      break;
    case "ExponentialOut":
      tween.easing(TWEEN.Easing.Exponential.Out);
      break;
    case "BounceOut":
      tween.easing(TWEEN.Easing.Bounce.Out);
      break;
    case "QuadraticOut":
      tween.easing(TWEEN.Easing.Quadratic.Out);
      break;
    case "CircularOut":
      tween.easing(TWEEN.Easing.Circular.Out);
      break;
    case "ElasticOut":
      return TWEEN.Easing.Elastic.Out;
      break;
  }
}
