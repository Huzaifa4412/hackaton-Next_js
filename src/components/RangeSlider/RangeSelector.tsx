import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import styles from "./MultiRangeSlider.module.css";
const RangeSlider = () => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(80);

  const handleInput = (e: { minValue: number; maxValue: number }) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-lg font-semibold text-gray-700">Select a Range</h1>
      <div className="relative w-full max-w-md">
        {/* Wrap slider with a styled div */}
        <MultiRangeSlider
          min={0}
          max={500}
          minValue={minValue}
          maxValue={maxValue}
          onInput={handleInput}
          label={false}
          ruler={false}
          style={{
            border: "none",
            boxShadow: "none",
            backgroundColor: "white",
            backdropFilter: "none",
            padding: "15px 10px",
            width: "100%",
          }}
          barInnerColor="black"
          thumbLeftColor="black"
          thumbRightColor="black"
          barLeftColor="white"
          className={`${styles.thumb}`}
        />
      </div>
      <p className="text-gray-500">
        Selected range: <span className="font-bold">${minValue}</span> -{" "}
        <span className="font-bold">${maxValue}</span>
      </p>
    </div>
  );
};

export default RangeSlider;
