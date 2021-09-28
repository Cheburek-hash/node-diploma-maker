import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as PIXI from 'pixi.js'
import { Stage, Sprite, Container, useTick, Graphics } from "@inlet/react-pixi";

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

    setX(Math.sin(i) * 200);
    setY(Math.sin(i / 1.5) * 200);
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
  const onMove = React.useCallback(e => {
    if (isDragging && sprite.current) {
      setPosition(e.data.getLocalPosition(sprite.current.parent));
    }
  }, [isDragging, setPosition]);
  
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

const DraggableBunny = ({ x = 400, y = 300, ...props }) => {
  const bind = useDrag({ x, y })
  return (
    <Sprite
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png" 
      scale={4}
      {...bind}
      {...props}
    />
  );
}


export class Canvas extends React.Component {
  constructor() {
    super();
    this.pixelRatio = window.devicePixelRatio;
    this.w = 793 * this.pixelRatio;
    this.h = 1054 * this.pixelRatio;
    this.c = 0x01262a;
    this.state = {
      components: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const newComponents = [
      ...this.state.components,
      { comp: Bunny, x: event.clientX, y: event.clientY },
    ];

    this.setState({
      components: newComponents,
    });
    // console.log(this.state.children);
    console.log(event);
  }

  render() {
    // console.log(this.state.children);
    const { components } = this.state;
    return (
      <Stage
        width={this.w}
        height={this.h}
        options={{ autoDensity: true, backgroundColor: this.c }}
        // onClick={this.handleClick}
      >
        <DraggableBunny/>
        {components.length !== 0 &&
          components.map((Component) => {
            return (
              <Container x={-Component.x} y={-Component.y} key={uuidv4()}>
                <Component.comp key={uuidv4()} />
              </Container>
            );
          })}
      </Stage>
    );
  }
}
