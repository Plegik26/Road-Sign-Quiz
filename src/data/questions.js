// Import all the road sign images
import leftCurve from "../RoadSigns/dangerousCurveToLeft.png";
import leftTurn from "../RoadSigns/leftTurn.png";
import lvlCrossing from "../RoadSigns/levelCrossing.png";
import motorway from "../RoadSigns/motorway.png";
import oneWay from "../RoadSigns/oneWay.png";
import roadNarrow from "../RoadSigns/roadNarrowsOnRight.png";
import slipperyRoad from "../RoadSigns/slipperyRoad.png";
import StopSign from "../RoadSigns/StopSign.png";
import unevenRoad from "../RoadSigns/unevenRoad.png";
import widthLimit from "../RoadSigns/widthLimit.png";

// export quiz array questions
export const questions = [
  {
    question: "What roadsign is this?",
    image: StopSign,
    options: ["Yield Sign", "Parking Sign", "Stop Sign", "No Entry Sign"],
    correct: "Stop Sign",
  },
  {
    question: "What should you do when you see this road sign?",
    image: leftTurn,
    options: [
      "Stop immedietly",
      "Turn Right ahead",
      "Go Straight",
      "Turn Left Ahead",
    ],
    correct: "Turn Left Ahead",
  },
  {
    question: "What roadsign is this?",
    image: leftCurve,
    options: ["Sharp Left Turn", "Sharp Right Turn", "U-turn", "No Overtaking"],
    correct: "Sharp Left Turn",
  },
  {
    question: "What roadsign is this?",
    image: lvlCrossing,
    options: [
      "Level Crossing ahead, unguarded by gates or lifting barriers",
      "Level Crossing ahead, guarded by gates or lifting barriers",
      "Train Station Ahead",
      "Railway Bridge",
    ],
    correct: "Level Crossing ahead, guarded by gates or lifting barriers",
  },
  {
    question: "What should you be aware of when you see this roadsign?",
    image: motorway,
    options: [
      "Motorway Ends",
      "One Way road",
      "Dual Carriageway",
      "Motorway Begins",
    ],
    correct: "Motorway Begins",
  },
  {
    question: "What roadsign is this?",
    image: oneWay,
    options: ["One Way", "No Entry", "Detour", "Keep Left"],
    correct: "One Way Road",
  },
  {
    question: "What does this roadsign mean?",
    image: roadNarrow,
    options: [
      "Road Narrows on Right",
      "Road Narrows on Left",
      "Bridge Ahead",
      "Slippery Road",
    ],
    correct: "Road Narrows on Right",
  },
  {
    question: "What should you do when you see this roadsign?",
    image: slipperyRoad,
    options: [
      "Stop and wait for assistance",
      "Speed Up to leave the area as soon as possible",
      "Change Lanes",
      "Reduce Speed and drive with caution",
    ],
    correct: "Reduce Speed and drive with caution",
  },
  {
    question: "What does this roadsign mean?",
    image: unevenRoad,
    options: [
      "Hill ahead",
      "Gravel on road",
      "Uneven Road ahead",
      "Speed Bumps on road",
    ],
    correct: "Uneven Road ahead",
  },
  {
    question: "What does this roadsign mean?",
    image: widthLimit,
    options: [
      "No Overtaking",
      "Width Limit of 2.5m ahead",
      "Height Limit of 2.5m ahead",
      "Weight Limit in 2.5m",
    ],
    correct: "Width Limit of 2.5m ahead",
  },
];
