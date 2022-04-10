import React, { useRef, useEffect } from "react";
import * as PIXI from "pixi.js";
import { gradient, DraggableImage, DraggableObject } from "./source";
import { Stage, Graphics, Sprite } from "@inlet/react-pixi";

PIXI.utils.skipHello();
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

export const Toolbar = () => {
  const toolbar = useRef(null);
  const c = 0x01262a;
  const w = 470;
  const h = 50;
  let texture = gradient("#ff0000", "#0000ff", w, h);
  useEffect(() => {
    // toolbar.current.app.stage.addChild(PIXI.Sprite.from(texture));
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
    >
      <Sprite texture={texture} />
      <DraggableObject tint={0x00faaf} width={10} height={60} x={50} y={35} />
      {/* <DraggableImage
        source={require("../../assets/images/cursor.png")}
        x={50}
        y={30}
        scale={{ x: 0.04, y: 0.04 }}
      /> */}
    </Stage>
  );
};
export const Picker = () => {
  const color = null;
  const w = 470;
  const h = 500;
  const c = 0x01262a;
  const stage = useRef(null);

  let texture = gradient(`#f7f`, "#f33", w, h);
  const sprite = PIXI.Sprite.from(texture);

  // console.log(stage.current.app.renderer.view);

  // sprite.options = { interactive: true, createImageBitmap: true };

  let data = null;
 
  useEffect(() => {
    const renderer = new PIXI.Extract(stage.current.app.renderer).renderer;
    data = renderer.plugins.extract.pixels(stage.current.app.stage);

  }, [sprite, stage]);

  const mouseListener = (e) => {
    // console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    console.log(data[e.nativeEvent.offsetX*e.nativeEvent.offsetY])
  };
  // console.log(stage.current.app);

  return (
    <>
      <Stage
        width={100}
        height={100}
        style={{position: "absolute"}}
        options={{ backgroundColor: 0xFFF}}></Stage>
      <Stage
        width={w}
        height={h}
        options={{ interactive: true, autoDensity: true, backgroundColor: c }}
        ref={stage}
        onMouseMove={mouseListener}
      >
        {/* <Sprite ref={bg} options={{interactive: true}} texture={gradient(getRandomColor(), getRandomColor(), w, h)} /> */}
        <Sprite texture={texture} />
        <DraggableImage
          source={require("../../assets/images/cursor.png")}
          x={300}
          y={100}
          scale={{ x: 0.005, y: 0.05 }}
        />
      </Stage>
    </>
  );
};
