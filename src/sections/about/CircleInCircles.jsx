import "../../style/MiniAbout.css";
import { useEffect, useState } from "react";

const CircleInCircles = () => {

  //weighted front or weighted back if you want larger changes at the beginning or end of the circle spre
  //change these seven? variables to change circle sizes and # of circles around icon image



  const numOfCircles = 7;
  const startingDiameter = 2; //<-- in pixels
  const endingDiamater = 23; //<-- in pixels
  const parentCircleRadius = 80 //<--in pixels
  const circleRange = 120; // <-- number of degrees that the circles should appear within. between 0 - 360
  const bigToSmall = true; // < -- true/false - reverse the direction of circles
  const offset = 0; // <-- offset starting rotation
  const weightedAvg = true; // <-- true/false - create weighted average
  const placeEdge = true; // <-- true/false to determine if circle are placed based on center or edge

  //STARTMATH
  const circleDif = (endingDiamater - startingDiameter) / numOfCircles;
  const circleArr = [];
  const degreesOfSeparation = circleRange / (numOfCircles - 1);
  for (let i = 0; i < numOfCircles; ++i) {
    let circleMultiplier = (i + 1) * circleDif;
    let circleSize = startingDiameter + circleMultiplier;
    let circleDefaultRotation = bigToSmall
      ? degreesOfSeparation * (numOfCircles - 1 - i)
      : degreesOfSeparation * i;
    let circleRotation = circleDefaultRotation - offset;
    let circleRadius = circleSize / 2;
    let distanceToTravel = placeEdge
      ? parentCircleRadius + circleRadius
      : parentCircleRadius;
    const newCircle = {
      size: circleSize,
      rotation: circleRotation,
      radius: circleRadius,
      translateVal: distanceToTravel,
    };
    circleArr.push(newCircle);
  }
  // const circleArr = bigToSmall ? rawCircleArr.reverse() : rawCircleArr;

  return (
    <>
      {circleArr.map((circ, i) => (
        <div
          style={{
            height: `${circ.size}px`,
            width: `${circ.size}px`,
            transform: `rotate(${circ.rotation}deg) translateX(${circ.translateVal}px)`,
            top: `calc(50% - ${circ.radius})`,
            left: `calc(50% - ${circ.radius})`,
          }}
          className="surround-circle"
          id={`surround-circ-id-${i}`}
        ></div>
      ))}
    </>
  );
};

export default CircleInCircles;
