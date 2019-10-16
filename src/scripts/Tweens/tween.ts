import { animate } from "../animation";
import { createTween } from "../TweenCreate/tweenCreate";

export function firstTween(left: HTMLElement, right: HTMLElement) {
  const coords = { x: 0, y: 0 };

  const tween0 = createTween(
    coords,
    { x: 20, y: 0 },
    left,
    right,
    "start",
    "horizontalAndVerticalRightUp",
    500,
    "QuadraticInOut"
  );

  const tween1 = createTween(
    coords,
    { x: 10, y: 0 },
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
    { x: 20, y: 0 },
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
    { x: 0, y: 20 },
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
    500,
    "ElasticInOut"
  );
  tween3.chain(tween4);

  const tween5 = createTween(
    coords,
    { x: 0, y: 20 },
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
    "horizontalAndVerticalRightUp",
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
    "horizontalAndVerticalRightUp",
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
    { x: 20, y: 0 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftDown",
    200,
    "ElasticInOut"
  );
  tween16.chain(tween17);

  const tween18 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    300,
    "ElasticInOut"
  );
  tween17.chain(tween18);

  const tween19 = createTween(
    coords,
    { x: 0, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    100,
    "ElasticInOut"
  );
  tween18.chain(tween19);

  const tween20 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    100,
    "ElasticInOut"
  );
  tween19.chain(tween20);

  const tween21 = createTween(
    coords,
    { x: 0, y: 0 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    100,
    "ElasticInOut"
  );
  tween20.chain(tween21);

  const tween22 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalRightDown",
    100,
    "ElasticInOut"
  );
  tween21.chain(tween22);

  const tween23 = createTween(
    coords,
    { x: 0, y: 0 },
    left,
    right,
    "none",
    "horizontalAndVerticalRightDown",
    50,
    "ElasticInOut"
  );
  tween22.chain(tween23);

  const tween24 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    50,
    "ElasticInOut"
  );
  tween23.chain(tween24);

  const tween25 = createTween(
    coords,
    { x: 0, y: 0 },
    left,
    right,
    "none",
    "horizontalAndVerticalLeftUp",
    300,
    "ElasticInOut"
  );
  tween24.chain(tween25);

  const tween26 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalAndVerticalRightUp",
    100,
    "ElasticInOut"
  );
  tween25.chain(tween26);

  const tween27 = createTween(
    coords,
    { x: 0, y: 0 },
    left,
    right,
    "none",
    "verticalTop",
    500,
    "ElasticInOut"
  );
  tween26.chain(tween27);

  const tween28 = createTween(
    coords,
    { x: 10, y: 20 },
    left,
    right,
    "none",
    "horizontalRight",
    100,
    "ElasticInOut"
  );
  tween27.chain(tween28);

  const tween29 = createTween(
    coords,
    { x: 20, y: 20 },
    left,
    right,
    "none",
    "horizontalRight",
    500,
    "ExponentialOut"
  );
  tween28.chain(tween29);

  const tween30 = createTween(
    coords,
    { x: 0, y: 20 },
    left,
    right,
    "finish",
    "horizontalRight",
    500,
    "ElasticOut"
  );
  tween29.chain(tween30);

  tween0.start();

  requestAnimationFrame(animate);
}
