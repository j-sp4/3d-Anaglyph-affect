import { animate } from "../animation";
import { createTween } from "../TweenCreate/tweenCreate";

export function thirdTween(left: HTMLElement, right: HTMLElement) {
  const coords = { x: 0, y: 0 };

  const tween0 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "start",
    "horizontalAndVerticalRightUp",
    500,
    "ElasticInOut"
  );

  const tween1 = createTween(
    coords,
    { x: 10, y: 10 },
    left,
    right,
    "none",
    "horizontalAndVerticalRightUp",
    100,
    "ElasticInOut"
  );
  tween0.chain(tween1);

  const tween2 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalRightUp",
    100,
    "ElasticInOut"
  );
  tween1.chain(tween2);

  const tween3 = createTween(
    coords,
    { x: 0, y: 0 },
    left,
    right,
    "none",
    "horizontalAndVerticalRightUp",
    200,
    "ElasticInOut"
  );
  tween2.chain(tween3);

  const tween4 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftDown",
    200,
    "ElasticInOut"
  );
  tween3.chain(tween4);

  const tween5 = createTween(
    coords,
    { x: 10, y: 10 },
    left,
    right,
    "none",
    "horizontalAndVerticalRightUp",
    100,
    "ElasticInOut"
  );
  tween4.chain(tween5);

  const tween6 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftDown",
    100,
    "ElasticInOut"
  );
  tween5.chain(tween6);

  const tween7 = createTween(
    coords,
    { x: 0, y: 0 },
    left,
    right,
    "finish",
    "horizontalAndVerticalLeftDown",
    500,
    "ElasticInOut"
  );
  tween6.chain(tween7);

  tween0.start();

  requestAnimationFrame(animate);
}
