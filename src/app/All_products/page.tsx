import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading/Heading";

const page = () => {
  return (
    <div className="container">
      <div className="breadCrams flex items-center gap-1 font-medium text-[14px]">
        <Link href={"/"}>
          <h3 className="text-slate-400 ">Home</h3>
        </Link>
        <Image src={"/arrow.svg"} alt="Arrow" width={14} height={14} />
        <Link href={"/All_products"}>
          <h3>Causals</h3>
        </Link>
      </div>
      <div>
        <Heading text="Causal" />
        <p className="text-[16px] text-slate-400">
          Showing 1-10 of 100 Products
        </p>
      </div>
    </div>
  );
};

export default page;
