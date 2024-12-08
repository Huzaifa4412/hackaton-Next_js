import React from "react";
import Styles from "./TopSelling.module.css";
import ProductCard from "../productCard/ProductCard";
import data from "@/Data.json";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

export default function TopSelling() {
  return (
    <div
      className={`${Styles.TopSelling} border-t container flex flex-col  items-center gap-10`}
    >
      <Heading text="Top Selling" />
      <div className="productsContainer flex flex-wrap flex-shrink-0 justify-center  gap-[8px]">
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
