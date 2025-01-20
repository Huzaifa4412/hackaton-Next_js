import React, { useContext } from "react";
import Heading from "@/components/Heading/Heading";
import ProductCard from "../productCard/ProductCard";
import { Product } from "../../../Typing";
import { ContextType, DataContext } from "@/app/context/ProductContext";

const MightLike = () => {
  const { data } = useContext(DataContext) as ContextType;
  data.splice(3);

  return (
    <div>
      <div className="text-center my-8">
        <Heading text="You Might Also Like" />
      </div>
      <div className="productContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-items-center justify-center">
        {data.map((item: Product) => {
          return <ProductCard item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default MightLike;
