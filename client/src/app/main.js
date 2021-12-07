import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as PIXI from "pixi.js";
import { Stage, Container, render, unmountComponentAtNode  } from "@inlet/react-pixi";
import { Bunny, DraggableImage, DraggableObject } from "./graphics/source";

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
    this.components = [];
    this.handleClick = this.handleClick.bind(this);
    this.componentsBuffer = []
  }

  toDataUrl() {
    return this.stage.current.app.renderer.plugins.extract.base64(
      this.stage.current.app.stage
    );
  }
  changeTheme() {
    console.log(this.stage.current);
  }
  // removeComponent(){
  //   unmountComponentAtNode(this.stage.current.app.stage);
  // }
  addComponent(type) {

    switch (type) {
      case "text":
        break;
        case "square":
          // this.componentsBuffer.push(<DraggableObject key={uuidv4()} tint={0x00ffff} x={150} y={100} />)
          // console.log(this.componentsBuffer);
         
          render(<DraggableObject key={uuidv4()} tint={0x00ffff} x={150} y={100} />, this.stage.current.app.stage);
         
          
          break;
      default:
        break;
    }
  }

  handleClick(event) {
    // this.components.push({comp: <DraggableObject tint={0x00ffff} x={150} y={100} />})
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
            {/* <DraggableObject tint={0x00ffff} x={150} y={100} /> */}
            {/* <DraggableImage
          source="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          key={uuidv4()}
        /> */}
        
           {this.components.forEach(obj => {
            <obj.comp key={uuidv4()} />
          })
          } 
           
            
          
          </Container>
        </Stage>
     
    );
  }
}
