'use strict';

const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true, 
    backgroundAlpha: true
});

document.body.appendChild(app.view);
