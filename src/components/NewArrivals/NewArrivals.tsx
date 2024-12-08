import React from "react";
import Styles from "./NewArrivals.module.css";
import ProductCard from "../productCard/ProductCard";
import data from "@/Data.json";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

export default function NewArrivals() {
  return (
    <div
      className={`${Styles.NewArrivals} container flex flex-col items-center justify-center gap-10`}
    >
      <Heading text="New Arrivals" />
      <div className="productsContainer flex flex-wrap justify-center  flex-shrink-0  gap-[8px]">
        {data.map((item, ind) => {
          return <ProductCard item={item} key={ind} />;
        })}
      </div>
      <div className="button border-2  w-max h-[max] px-[54px]   rounded-full">
        <Button text="View All" dark_variant={false} />
      </div>
    </div>
  );
}
