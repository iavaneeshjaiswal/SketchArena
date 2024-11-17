// import React from "react";
// import { ReactSketchCanvas } from "react-sketch-canvas";

// const SketchApp = () => {
//   return (
//     <div>
//       <ReactSketchCanvas
//         style={{ border: "1px solid #000", width: "700px", height: "500px" }}
//         strokeColor="yellow"
//         strokeWidth={4}
//       />
//     </div>
//   );
// };

// export default SketchApp;

import React, { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const SketchApp = () => {
  const [strokeColor, setStrokeColor] = useState("black"); // Default color
  const [isEraser, setIsEraser] = useState(false); // Eraser mode toggle

  const canvasRef = React.createRef();

  // Eraser mode toggles stroke color to match background
  const toggleEraser = () => {
    setIsEraser(!isEraser);
    setStrokeColor(isEraser ? "black" : "white"); // Replace "white" with your canvas background color
  };

  return (
    <div className="h-full w-6/12">
      <ReactSketchCanvas
        ref={canvasRef}
        style={{
          margin: "auto",
        }}
        className="border-black border"
        strokeColor={strokeColor}
        strokeWidth={5}
      />
      <div style={{ marginTop: "10px" }} className="flex gap-3 justify-center">
        <button
          onClick={() => setStrokeColor("red")}
          style={{ backgroundColor: "red" }}
          className="px-2 py-1 text-white font-bold text-sm"
        >
          RED
        </button>
        <button
          onClick={() => setStrokeColor("black")}
          style={{ backgroundColor: "black" }}
          className="px-2 py-1 text-white font-bold text-sm"
        >
          BLACK
        </button>
        <button
          onClick={() => setStrokeColor("blue")}
          style={{ backgroundColor: "BLUE" }}
          className="px-2 py-1 text-white font-bold text-sm"
        >
          BLUE
        </button>
        <button
          onClick={() => setStrokeColor("green")}
          style={{ backgroundColor: "GREEN" }}
          className="px-2 py-1 text-white font-bold text-sm"
        >
          GREEN
        </button>
        <button onClick={() => canvasRef.current.clearCanvas()}>Clear</button>
        <button onClick={() => canvasRef.current.undo()}>Undo</button>
        <button onClick={() => canvasRef.current.redo()}>redo</button>
      </div>
    </div>
  );
};

export default SketchApp;
