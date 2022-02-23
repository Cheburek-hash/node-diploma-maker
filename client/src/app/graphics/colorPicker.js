"use strict";
import React, { useRef, useEffect } from "react";
import * as PIXI from "pixi.js";

import {
  Stage,
  Sprite,
  Container,
  render,
  Graphics,
  unmountComponentAtNode,
} from "@inlet/react-pixi";

PIXI.utils.skipHello();
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

export const Picker = () => {
  const color = null;
  const w = 470;
  const h = 500;
  const c = 0x01262a;
  const stage = useRef(null);

  const gradient = (from, to, width, height) => {
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

  useEffect(() => {
    var graphics = new PIXI.Graphics();
    graphics.hitArea = new PIXI.Rectangle(0, 0, 100, 100);

    stage.current.app.stage.addChild(graphics);
    var mouseIn = false;
    graphics.on("mouseover", function (e) {
      console.log("over");
      mouseIn = true;
      console.log("didmount");
    });
  }, []);

  return (
    <Stage
      width={w}
      height={h}
      options={{ autoDensity: true, backgroundColor: c }}
      ref={stage}
    >
      <Sprite texture={gradient("#f9f", "#f33", w, h)} />
    </Stage>
  );
};
