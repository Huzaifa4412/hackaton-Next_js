import React from "react";
import Styles from "./NewsLetter.module.css";
import Button from "../Button/Button";
export default function NewsLetter() {
  return (
    <div
      className={`${Styles.NewsLetter} px-3 gap-4 lg:w-[1020px] h-[180px] mx-auto rounded-[20px] flex flex-col sm:flex-row justify-between py-3  items-center text-white`}
      style={{ backgroundColor: "var(--foreground)" }}
    >
      <div className={`${Styles.heading} w-[70%] `}>
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </div>
      <div className="buttons flex flex-col items-center justify-center gap-2 lg:gap-5">
        <div className="btn  w-[200px] lg:w-[350px] lg:h-[46px]">
          <Button text="Enter Email Address" dark_variant={false} />
        </div>
        <div className="btn  w-[200px]  lg:w-[350px] lg:h-[46px]">
          <Button text="Subscribe to NewLetter" dark_variant={false} />
        </div>
      </div>
    </div>
  );
}
