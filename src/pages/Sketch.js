import React, {useState} from "react";
import Sketch from 'react-p5';
import './Sketch.css';

const Draw = () => {
    const path = [];

    //Create canvas
    function setup(p5, canvasParentRef) {
        p5.createCanvas(500, 500).parent(canvasParentRef);
    }

    function draw(p5) {

        //Disable filling geometry
        p5.noFill();

        if(p5.mouseIsPressed) {
            //Store the location of the mouse
            const point = {
                x: p5.mouseX,
                y: p5.mouseY,
            };

            path.push(point);

            console.log(point);
        }

        p5.beginShape();

        path.forEach(point => {
            // create a vertex at the specified location
            p5.vertex(point.x, point.y);
        });

        p5.endShape();
    }

    return (
        <Sketch setup={setup} draw={draw} mousePressed={mousePressed}/>
    )
}

export default Draw;
