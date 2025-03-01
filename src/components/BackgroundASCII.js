import React, { useState, useEffect } from "react";

const AsciiBackground = ({ width = 400, height = 300 }) => {
  const chars = "0123456789";
  const frameWidth = Math.floor(width / 10);
  const frameHeight = Math.floor(height / 18);
  const [asciiArt, setAsciiArt] = useState([]);

  const generateAsciiArt = () => {
    let ascii = [];
    for (let y = 0; y < frameHeight; y++) {
      let row = [];
      for (let x = 0; x < frameWidth; x++) {
        const bgColor = Math.random() > 0.3 ? "black" : "white";
        const textColor = bgColor === "black" ? "white" : "black";
        row.push({
          char: chars[Math.floor(Math.random() * chars.length)],
          color: textColor,
          bgColor: bgColor
        });
      }
      ascii.push(row);
    }
    return ascii;
  };

  useEffect(() => {
    setAsciiArt(generateAsciiArt());
    const interval = setInterval(() => {
      setAsciiArt(prev => {
        let newAscii = [...prev.slice(1)];
        let newRow = Array.from({ length: frameWidth }, () => {
          const bgColor = Math.random() > 0.3 ? "black" : "white";
          const textColor = bgColor === "black" ? "white" : "black";
          return {
            char: chars[Math.floor(Math.random() * chars.length)],
            color: textColor,
            bgColor: bgColor
          };
        });
        newAscii.push(newRow);
        return newAscii;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [frameWidth, frameHeight]);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
        zIndex: -1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        fontFamily: "monospace"
      }}
    >
      {asciiArt.map((line, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            width: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >
          {line.map((cell, colIndex) => (
            <span
              key={`${rowIndex}-${colIndex}`}
              style={{
                color: cell.color,
                backgroundColor: cell.bgColor,
                fontSize: "18px",
                padding: "0 2px"
              }}
            >
              {cell.char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AsciiBackground;