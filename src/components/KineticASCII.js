import React, { useState, useEffect, useRef } from "react";

const KineticASCII = () => {
  const [rotation, setRotation] = useState(0);
  const sphereRef = useRef("");

  const generateSphere = () => {
    const width = 40;
    const height = 20;
    const radius = Math.min(width, height) / 2;
    const chars = "01@#*KkDd";
    const newSphere = [];

    for (let y = 0; y < height; y++) {
      let row = "";
      for (let x = 0; x < width; x++) {
        const nx = (x - width / 2) / radius;
        const ny = (y - height / 2) / radius;
        const distance = Math.sqrt(nx * nx + ny * ny);

        if (distance <= 1) {
          const angle = Math.atan2(ny, nx) + rotation;
          const brightness = Math.cos(angle) * 0.5 + 0.5;
          const grayValue = Math.floor(255 * brightness);
          const color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
          const char = chars[Math.floor(Math.random() * chars.length)];

          row += `<span style="color:${color}">${char}</span>`;
        } else {
          row += " ";
        }
      }
      newSphere.push(row);
    }
    sphereRef.current = newSphere.join("<br/>");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    generateSphere();
  }, [rotation]);

  return (
    <div
      style={{
        fontSize: "clamp(1rem, 1vw)",
        whiteSpace: "pre",
        textAlign: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5,
      }}
      dangerouslySetInnerHTML={{ __html: sphereRef.current }}
    />
  );
};

export default KineticASCII;
