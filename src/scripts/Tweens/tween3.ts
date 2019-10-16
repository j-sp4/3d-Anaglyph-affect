import { animate } from "../animation";
import { createTween } from "../TweenCreate/tweenCreate";

export function forthTween(left: HTMLElement, right: HTMLElement) {
  const coords = { x: 0, y: 0 };

  const tween0 = createTween(
    coords,
    { x: 20, y: 0 },
    left,
    right,
    "start",
    "horizontalAndVerticalRightUp",
    400,
    "ElasticInOut"
  );

  const tween1 = createTween(
    coords,
    { x: 20, y: 10 },
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
    { x: 10, y: 10 },
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
    { x: 10, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalRightUp",
    100,
    "ElasticInOut"
  );
  tween2.chain(tween3);

  const tween4 = createTween(
    coords,
    { x: 0, y: 0 },
    left,
    right,
    "none",
    "horizontalAndVerticalRightUp",
    300,
    "ElasticInOut"
  );
  tween3.chain(tween4);

  const tween5 = createTween(
    coords,
    { x: 20, y: 0 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
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
    "horizontalAndVerticalLeftUp",
    300,
    "ElasticInOut"
  );
  tween5.chain(tween6);

  const tween7 = createTween(
    coords,
    { x: 0, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    100,
    "ElasticInOut"
  );
  tween6.chain(tween7);

  const tween8 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    100,
    "ElasticInOut"
  );
  tween7.chain(tween8);

  const tween9 = createTween(
    coords,
    { x: 0, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    200,
    "ElasticInOut"
  );
  tween8.chain(tween9);

  const tween10 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    100,
    "ElasticInOut"
  );
  tween9.chain(tween10);

  const tween11 = createTween(
    coords,
    { x: 20, y: 0 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    300,
    "ElasticInOut"
  );
  tween10.chain(tween11);

  const tween12 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftDown",
    100,
    "ElasticInOut"
  );
  tween11.chain(tween12);

  const tween13 = createTween(
    coords,
    { x: 20, y: 0 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftDown",
    200,
    "ElasticInOut"
  );
  tween12.chain(tween13);

  const tween14 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    100,
    "ElasticInOut"
  );
  tween13.chain(tween14);

  const tween15 = createTween(
    coords,
    { x: 20, y: 0 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    100,
    "ElasticInOut"
  );
  tween14.chain(tween15);

  const tween16 = createTween(
    coords,
    { x: 0, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftDown",
    100,
    "ElasticInOut"
  );
  tween15.chain(tween16);

  const tween17 = createTween(
    coords,
    { x: 0, y: 0 },
    left,
    right,
    "finish",
    "horizontalAndVerticalLeftDown",
    200,
    "ElasticOut"
  );
  tween16.chain(tween17);

  tween0.start();

  requestAnimationFrame(animate);
}
