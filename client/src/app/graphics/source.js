import React from "react";
import { Sprite, useTick, Text } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
const { useState } = React;

export const gradient = (from, to, width, height) => {
  const c = document.createElement("canvas");
  c.width = width;
  c.height = height;
  const ctx = c.getContext("2d");
  const grd = ctx.createLinearGradient(0, 0, width, height);
  grd.addColorStop(0, from);
  grd.addColorStop(1, to);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, width, height);

  return new PIXI.Texture.from(c);
};
export const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Bunny = () => {
  // states
  let i = 0;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  // custom ticker
  useTick((delta) => {
    // console.log(delta);
    i += 0.05 * delta;

    setX(Math.sin(i) * 100);
    setY(Math.sin(i / 1.5) * 100);
    setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);
  });

  return (
    <Sprite
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
      anchor={0.5}
      x={x}
      y={y}
      rotation={rotation}
    />
  );
};
const useDrag = ({ x, y }) => {
  const sprite = React.useRef();
  const [isDragging, setIsDragging] = React.useState(false);
  const [position, setPosition] = React.useState({ x, y });

  const onDown = React.useCallback(() => setIsDragging(true), []);
  const onUp = React.useCallback(() => setIsDragging(false), []);
  const onMove = React.useCallback(
    (e) => {
      if (isDragging && sprite.current) {
        setPosition(e.data.getLocalPosition(sprite.current.parent));
      }
    },
    [isDragging, setPosition]
  );

  return {
    ref: sprite,
    interactive: true,
    pointerdown: onDown,
    pointerup: onUp,
    pointerupoutside: onUp,
    pointermove: onMove,
    alpha: isDragging ? 0.5 : 1,
    anchor: 0.5,
    position,
  };
};

export const DraggableImage = ({
  x = 400,
  y = 300,
  source,
  scale = { x: 4, y: 4 },
}) => {
  const bind = useDrag({ x, y });
  return <Sprite image={source} scale={(scale.x, scale.y)} {...bind} />;
};

export const DraggableText = ({text, x, y, ...props }) => {
  const bind = useDrag({ x, y });
  return (
    <Text text={text} anchor={0.5} {...bind} {...props}/>
    );
};


export const DraggableObject = ({ x, y, ...props }) => {
  const bind = useDrag({ x, y });

  return (
    <Sprite {...props} {...bind} texture={PIXI.Texture.WHITE} />
  );
};