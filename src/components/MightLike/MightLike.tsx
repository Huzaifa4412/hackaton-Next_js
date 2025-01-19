import React from "react";
import Heading from "@/components/Heading/Heading";
import ProductCard from "../productCard/ProductCard";
import { ProductCard_type } from "../../../Typing";
import { client } from "@/sanity/lib/client";

const getProduct = async () => {
  try {
    const quary = `*[_type == "product"]{name,"image":image.asset -> url,rating, price, discountPercent,_id, discountedPrice }[0..3]`;

    const product = await client.fetch(quary);
    return product;
  } catch (error) {
    console.log(error);
  }
};

const MightLike = async () => {
  const Data = await getProduct();

  return (
    <div>
      <div className="text-center my-8">
        <Heading text="You Might Also Like" />
      </div>
      <div className="productContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-items-center justify-center">
        {Data.map((item: ProductCard_type) => {
          return <ProductCard item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default MightLike;
