import React, { useState, useRef } from "react";
import hubImage from "../assets/wsi.png";

const HubView = ({ onMove }) => {
  const [boxPosition, setBoxPosition] = useState({ top: "25%", left: "25%" });
  const hubRef = useRef(null);

  const handleMouseDown = (e) => {
    const hubElement = hubRef.current;
    const hubRect = hubElement.getBoundingClientRect();

    const startX = e.clientX;
    const startY = e.clientY;

    const offsetX =
      startX -
      hubRect.left -
      hubRect.width * (parseFloat(boxPosition.left) / 100);
    const offsetY =
      startY -
      hubRect.top -
      hubRect.height * (parseFloat(boxPosition.top) / 100);

    const handleMouseMove = (moveEvent) => {
      const newLeft =
        ((moveEvent.clientX - hubRect.left - offsetX) / hubRect.width) * 100;
      const newTop =
        ((moveEvent.clientY - hubRect.top - offsetY) / hubRect.height) * 100;

      setBoxPosition({
        left: `${Math.max(0, Math.min(newLeft, 75))}%`,
        top: `${Math.max(0, Math.min(newTop, 75))}%`,
      });

      if (onMove) {
        onMove({ left: newLeft, top: newTop });
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="relative border border-gray-300 rounded cursor-pointer"
      ref={hubRef}
      style={{ width: "100%", height: "100%" }}
    >
      <img
        src={hubImage}
        alt="Hub View"
        className="w-full h-full object-cover"
      />

      <div
        className="absolute border border-red-500 w-1/4 h-1/4"
        style={{ top: boxPosition.top, left: boxPosition.left }}
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};

export default HubView;
