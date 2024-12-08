import React from "react";

const HeroFeatureText = (props: { text: string; number: string }) => {
  return (
    <div>
      <div className="number font-extrabold text-[18px]  md:text-[24px]">
        {props.number}
      </div>
      <div className="quality text-[#000000]/60 text-[12px] font-light">
        {props.text}
      </div>
    </div>
  );
};

export default HeroFeatureText;
