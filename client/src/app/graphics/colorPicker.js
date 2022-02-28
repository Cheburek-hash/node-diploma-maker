"use strict";
import React, { useRef, useEffect } from "react";
import * as PIXI from "pixi.js";
import { gradient, DraggableObject } from "./source";
import { Stage } from "@inlet/react-pixi";

PIXI.utils.skipHello();
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

export const Toolbar = () => {
  const toolbar = useRef(null);
  const c = 0x01262a;
  const w = 470;
  const h = 50;
  useEffect(() => {
    toolbar.current.app.stage.addChild(
      PIXI.Sprite.from(gradient("#ff0000", "#0000ff", w, h))
    );
  }, []);

  const mouseListener = (e) => {
    // console.log(e)
    console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };
  return (
    <Stage
      width={w}
      height={h}
      options={{ interactive: true, autoDensity: true, backgroundColor: c }}
      ref={toolbar}
      onMouseMove={mouseListener}
    ></Stage>
  );
};
export const Picker = () => {
  const color = null;
  const w = 470;
  const h = 500;
  const c = 0x01262a;
  const stage = useRef(null);
  const bg = useRef(null);

  let texture = gradient(`#f7f`, "#f33", w, h);
  const sprite = PIXI.Sprite.from(texture);
  // sprite.options = { interactive: true, createImageBitmap: true };

  const mouseListener = (e) => {
    console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  useEffect(() => {
    stage.current.app.stage.addChild(sprite);
    // stage.current.app.stage.addChild(sprite);
  }, [sprite]);

  console.log(stage.current.app);

  return (
    <Stage
      width={w}
      height={h}
      options={{ interactive: true, autoDensity: true, backgroundColor: c }}
      ref={stage}
      onMouseMove={mouseListener}
    >
      {/* <Sprite ref={bg} options={{interactive: true}} texture={gradient(getRandomColor(), getRandomColor(), w, h)} /> */}
    </Stage>
  );
};
