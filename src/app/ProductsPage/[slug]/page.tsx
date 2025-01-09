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
    <div className="container pt-5">
      <div className="breadCrams flex items-center">
        <h3>Home</h3>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3>Shop</h3>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3>Men</h3>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3>{params.slug}</h3>
      </div>
    </div>
  );
};

export default page;
