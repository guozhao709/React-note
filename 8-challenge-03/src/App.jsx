/*
  1. Migrate all the project to vite scaffold
  2. Abstract CircleProperty component from circle size and circle rotate
  
  More: Create TogglePurple and TextColor components

  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

import { useState } from "react";
import TogglePurple from "./components/TogglePurple";
import TextColor from "./components/TextColor";
import MyInput from "./components/MyInput";

function App() {
  const [isPurple, setIsPurple] =useState(false);
  const [textColor, setTextColor] = useState("");

  const circleClasses = `${isPurple ? "purple" : ""} ${textColor}`;

  const [size, setSize] = useState(150);
  const [rotate, setRotate] = useState(0);

  const circleStyles = {
    height: `${size}px`,
    width: `${size}px`,
    lineHeight: `${size}px`,
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <main>
      <TogglePurple isPurple={isPurple} setIsPurple={setIsPurple} />

      <TextColor textColor={textColor} setTextColor={setTextColor} />

      <MyInput type="number" value={size} setValue={setSize} >
        Circle Size
      </MyInput>
      <MyInput type="number" value={rotate} setValue={setRotate} >
        Circle Rotate
      </MyInput>
      
      <div className={`circle ${circleClasses}`} style={circleStyles}>
        Hi!
      </div>
    </main>
  );
}

export default App;