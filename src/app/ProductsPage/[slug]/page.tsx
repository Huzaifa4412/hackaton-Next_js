import React from "react";
import Image from "next/image";

const page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  return (
    <div className="!pt-0 container ">
      <div className="breadCrams py-4 flex items-center">
        <h3>Home</h3>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3>Shop</h3>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3>Men</h3>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3 className="font-semibold">{params.slug}</h3>
      </div>
      <div className="productDetails">
        <div className="productImages">
          <div className="subImages  flex flex-col gap-2">
            <div className="subImage h-[167px] w-[152px] border-[#000000] hover:border rounded-[20px] bg-[#F0EEED]"></div>
            <div className="subImage h-[167px] w-[152px] border-[#000000] hover:border rounded-[20px] bg-[#F0EEED]"></div>
            <div className="subImage h-[167px] w-[152px] border-[#000000] hover:border rounded-[20px] bg-[#F0EEED]"></div>
          </div>
          <div className="mainImage"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
