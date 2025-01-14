import React from "react";
import Styles from "./NewArrivals.module.css";
import ProductCard from "../productCard/ProductCard";
import data from "@/Data.json";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Link from "next/link";

export default function NewArrivals() {
  return (
    <div
      className={`${Styles.NewArrivals} container flex flex-col items-center justify-center gap-10`}
    >
      <Heading text="New Arrivals" />
      <div className="productsContainer flex flex-wrap justify-center  flex-shrink-0  gap-[8px]">
        {data.map((item, ind) => {
          return (
            <Link
              key={ind}
              href={`/ProductsPage/${item.title.replace(/ /g, "_")}`}
            >
              <ProductCard item={item} key={ind} />
            </Link>
          );
        })}
      </div>

      <div className="w-max">
        <Link href={"/ProductsPage"}>
          <Button text="View All" dark_variant={false} />
        </Link>
      </div>
    </div>
  );
}
