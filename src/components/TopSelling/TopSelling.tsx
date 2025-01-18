import React from "react";
import Styles from "./TopSelling.module.css";
import ProductCard from "../productCard/ProductCard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ProductCard_type } from "../../../Typing";

const getProduct = async () => {
  try {
    const quary = `*[_type == "product"]{name,"image":image.asset -> url,rating, price, discountPercent,_id, discountedPrice }[0..3]`;

    const product = client.fetch(quary);
    return product;
  } catch (error) {
    console.log(error);
  }
};

export default async function TopSelling() {
  const data = await getProduct();

  return (
    <div
      className={`${Styles.TopSelling} border-t container flex flex-col  items-center gap-10`}
    >
      <Heading text="Top Selling" />
      <div className="productsContainer flex flex-wrap flex-shrink-0 justify-center  gap-[8px]">
        {data.map((item: ProductCard_type) => {
          return (
            <Link
              key={item._id}
              href={`/ProductsPage/${item.name.replace(/ /g, "_")}${item._id}`}
            >
              <ProductCard item={item} key={item._id} />
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
