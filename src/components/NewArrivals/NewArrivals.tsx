import React from "react";
import Styles from "./NewArrivals.module.css";
import ProductCard from "../productCard/ProductCard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ProductCard_type } from "../../../Typing";

const getProduct = async () => {
  try {
    const quary = `*[_type == "product" && isNew == true]{name,"image":image.asset -> url,rating, price, discountPercent,_id, discountedPrice }[0..3]`;

    const product = client.fetch(quary);
    return product;
  } catch (error) {
    console.log(error);
  }
};
export default async function NewArrivals() {
  const data = await getProduct();
  return (
    <div
      className={`${Styles.NewArrivals} container flex flex-col items-center justify-center gap-10`}
    >
      <Heading text="New Arrivals" />
      <div className="productsContainer flex flex-wrap justify-center  flex-shrink-0  gap-[8px]">
        {data.map((product: ProductCard_type) => (
          <ProductCard key={product._id} item={product} />
        ))}
      </div>

      <div className="w-max">
        <Link href={"/ProductsPage"}>
          <Button text="View All" dark_variant={false} />
        </Link>
      </div>
    </div>
  );
}
