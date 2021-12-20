import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as PIXI from "pixi.js";
import {
  Stage,
  Container,
  render,
  unmountComponentAtNode,
} from "@inlet/react-pixi";
import {
  Bunny,
  DraggableImage,
  DraggableObject,
  DraggableText,
} from "./graphics/source";
import { TextStyle } from "pixi.js";

PIXI.utils.skipHello();
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

export class Canvas extends React.Component {
  constructor() {
    super();
    this.pixelRatio = window.devicePixelRatio;
    this.w = 793 * this.pixelRatio;
    this.h = 1054 * this.pixelRatio;
    this.c = 0x01262a;
    this.stage = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.componentsBuffer = [];
    this.TextStyle = new TextStyle({
      align: "center",
      fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
      fontSize: 50,
      fontWeight: 400,
      fill: ["#ffffff", "#00ff99"], // gradient
      stroke: "#01d27e",
      strokeThickness: 5,
      letterSpacing: 20,
      dropShadow: true,
      dropShadowColor: "#ccced2",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
    });
  }

  toDataUrl() {
    return this.stage.current.app.renderer.plugins.extract.base64(
      this.stage.current.app.stage
    );
  }
  changeTheme() {
    console.log(this.stage.current);
  }
  removeComponent() {
    unmountComponentAtNode(this.stage.current.app.stage.children.pop());
  }
  addComponent(info) {
    switch (info.type) {
      case "text":
        this.componentsBuffer.push(
          <Container key={uuidv4()}>
            <DraggableText
              text={info?.data}
             
              height={100}
              style={this.TextStyle}
              x={150}
              y={100}
            />
          </Container>
        );
        break;
      case "square":
        this.componentsBuffer.push(
          <Container key={uuidv4()}>
            <DraggableObject
              width={100}
              height={100}
              tint={0x00ffff}
              x={300}
              y={100}
            />
          </Container>
        );

        break;
    }
    render(
      <React.Fragment>{this.componentsBuffer}</React.Fragment>,
      this.stage.current.app.stage
    );
  }

  handleClick(event) {
    console.log("click!");
  }

  render() {
    return (
      <Stage
        width={this.w}
        height={this.h}
        options={{ autoDensity: true, backgroundColor: this.c }}
        ref={this.stage}
        onClick={this.handleClick}
      >
        <Container>
          {/* <DraggableObject tint={0x00faaf} x={150} y={100} /> */}

          {/* <DraggableImage
          source="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          key={uuidv4()}
        /> */}
        </Container>
      </Stage>
    );
  }
}
