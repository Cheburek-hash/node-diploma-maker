import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as PIXI from "pixi.js";
import { Stage, Sprite, useTick, Container } from "@inlet/react-pixi";

const { useState } = React;

let i = 0;
const Bunny = () => {
  // states
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

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

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

const DraggableObject = ({
  x = 400,
  y = 300,
  source,
  scale = { x: 4, y: 4 },
}) => {
  const bind = useDrag({ x, y });
  return <Sprite image={source} scale={(scale.x, scale.y)} {...bind} />;
};

export class Canvas extends React.Component {
  constructor() {
    super();
    this.pixelRatio = window.devicePixelRatio;
    this.w = 793 * this.pixelRatio;
    this.h = 1054 * this.pixelRatio;
    this.c = 0x01262a;
    this.stage = React.createRef();
    this.components = [];
    this.handleClick = this.handleClick.bind(this);
  }

  toDataUrl() {
    return this.stage.current.app.renderer.plugins.extract.base64(
      this.stage.current.app.stage
    );
  }

  handleClick(event) {
    this.components.push({component: DraggableObject, source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"});
    console.log(this.components);
    // console.log(event);
  }

  render() {
       

    return (
      <Stage
        width={this.w}
        height={this.h}
        options={{ autoDensity: true, backgroundColor: this.c }}
        ref={this.stage}
        // onClick={this.handleClick}
      >
        {/* <Container position={[150, 150]}  key={uuidv4()}> <Bunny key={uuidv4()} /> </Container> */}
        
        <DraggableObject
          source="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          key={uuidv4()}
        />
        {/* {this.components.forEach(component => {
            console.log(component);
          })
        } */}
      </Stage>
    );
  }
}
