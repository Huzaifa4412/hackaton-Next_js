"use client";
import { ContextType, DataContext } from "@/app/context/ProductContext";
import React, { useContext } from "react";
import { Product } from "../../../../Typing";

const Page = ({ params }: { params: { slug: string } }) => {
  const { data } = useContext(DataContext) as ContextType;
  const product = data.find((p: Product) => p.category === params.slug);
  return (
    <div className="container">
      <h1>{product?.category}</h1>
    </div>
  );
};

export default Page;
