import React from "react";
import Heading from "@/components/Heading/Heading";
import Data from "@/Data.json";
import ProductCard from "../productCard/ProductCard";
import Link from "next/link";

const MightLike = () => {
  return (
    <div>
      <div className="text-center my-8">
        <Heading text="You Might Also Like" />
      </div>
      <div className="productContainer grid grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-items-center justify-center">
        {Data.map((item, ind) => {
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
    </div>
  );
};

export default MightLike;
