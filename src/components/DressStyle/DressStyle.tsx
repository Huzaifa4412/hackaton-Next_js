import React from "react";
import Styles from "./DressStyle.module.css";
import Heading from "../Heading/Heading";
export default function DressStyle() {
  return (
    <div
      className={`${Styles.DressStyle} flex flex-col justify-evenly py-8 w-full xl:w-[1240px] pt-5 h-max lg:h-[866px] mx-auto rounded-[40px]  `}
      style={{ backgroundColor: "var(--light-gray)" }}
    >
      <Heading text="BROWSE BY dress STYLE" />

      <div
        className={`${Styles.wrapper} mt-5  w-full  lg:w-[90%] lg:h-[70%] gap-2 lg:gap-5 mx-auto md:grid h-max  md:grid-cols-3 mdLgrid-rows-2`}
      >
        <div className="div border-2 rounded-[20px] min-h-[300px] w-full"></div>
        <div className="div border-2 rounded-[20px] min-h-[300px] w-full col-span-2 "></div>
        <div className="div border-2 rounded-[20px] min-h-[300px] w-full col-span-2 "></div>
        <div className="div border-2 rounded-[20px]  min-h-[300px] w-full"></div>
      </div>
    </div>
  );
}
