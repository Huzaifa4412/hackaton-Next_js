"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import RangeSlider from "@/components/RangeSlider/RangeSelector";
import Button from "@/components/Button/Button";
import ProductCard from "@/components/productCard/ProductCard";
import { client } from "@/sanity/lib/client";
import { ProductCard_type } from "../../../Typing";
import Link from "next/link";

const Page = () => {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      const quary = `*[_type == "product"]{name,"image":image.asset -> url,rating, price, discountPercent,_id, discountedPrice }`;
      const product = await client.fetch(quary);
      setProducts(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  const colors = ["red", "yellow", "green", "pink", "blue", "purple", "black"];
  const sizes = [
    "smaller",
    "medium",
    "large",
    "X-large",
    "XX-large",
    "3X-large",
  ];

  // State for toggling visibility
  const [showTShirts, setShowTShirts] = useState(false);
  const [showShorts, setShowShorts] = useState(false);
  const [showShirts, setShowShirts] = useState(false);
  const [showHoodies, setShowHoodies] = useState(false);
  const [showJeans, setShowJeans] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showSizes, setShowSizes] = useState(false);

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="container">
      <div className="BreadCrams text-[16px] px-5 flex gap-2 items-center">
        <Link href={"/"} className="flex items-center">
          <h3>Home</h3>
          <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        </Link>
        <h3>All Outfits</h3>
      </div>
      <div className="content flex flex-col lg:flex-row gap-6 items-center lg:items-start justify-between h-max mt-8">
        <div className="sideBar w-[295px] h-max px-[24px] py-[20px] flex flex-col gap-[24px] border rounded-[20px]">
          <header className="flex w-max items-center gap-6 relative">
            <Heading text="Filter" size={20} />
            <div className="preferenceImage">
              <Image
                src={"/preference.svg"}
                alt="Preference"
                width={24}
                height={24}
                className="relative left-0 lg:w-[24px] lg:h-[24px] w-[30px] h-[30px]"
                onClick={() => setShowSideBar(!showSideBar)}
              />
            </div>
          </header>
          {showSideBar && (
            <div className="flex flex-col transition-all duration-500 ease-in-out delay-1 gap-[16px]">
              <hr />
              <div className="f_category">
                <div className="categories flex flex-col gap-5">
                  <div className="t-shirt flex justify-between cursor-pointer">
                    <h3>T-Shirts</h3>
                    <Image
                      src={"/arrow.svg"}
                      alt="Arrow"
                      width={16}
                      height={16}
                      onClick={() => setShowTShirts(!showTShirts)}
                      className={`transform transition-transform duration-300 ${
                        showTShirts ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`t-shirt-content transition-all duration-300 ${
                      showTShirts ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    T-Shirt content here
                  </div>

                  <div className="shorts flex justify-between cursor-pointer">
                    <h3>Shorts</h3>
                    <Image
                      src={"/arrow.svg"}
                      alt="Arrow"
                      width={16}
                      height={16}
                      onClick={() => setShowShorts(!showShorts)}
                      className={`transform transition-transform duration-300 ${
                        showShorts ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`shorts-content transition-all duration-300 ${
                      showShorts ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    Shorts content here
                  </div>

                  <div className="shirt flex justify-between cursor-pointer">
                    <h3>Shirts</h3>
                    <Image
                      src={"/arrow.svg"}
                      alt="Arrow"
                      width={16}
                      height={16}
                      onClick={() => setShowShirts(!showShirts)}
                      className={`transform transition-transform duration-300 ${
                        showShirts ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`shirt-content transition-all duration-300 ${
                      showShirts ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    Shirt content here
                  </div>

                  <div className="hoodies flex justify-between cursor-pointer">
                    <h3>Hoodie</h3>
                    <Image
                      src={"/arrow.svg"}
                      alt="Arrow"
                      width={16}
                      height={16}
                      onClick={() => setShowHoodies(!showHoodies)}
                      className={`transform transition-transform duration-300 ${
                        showHoodies ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`hoodies-content transition-all duration-300 ${
                      showHoodies ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    Hoodies content here
                  </div>

                  <div className="jeans flex justify-between cursor-pointer">
                    <h3>Jeans</h3>
                    <Image
                      src={"/arrow.svg"}
                      alt="Arrow"
                      width={16}
                      height={16}
                      onClick={() => setShowJeans(!showJeans)}
                      className={`transform transition-transform duration-300 ${
                        showJeans ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`jeans-content transition-all duration-300 ${
                      showJeans ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    Jeans content here
                  </div>
                </div>
              </div>
              <hr />
              <div className="f_price">
                <header
                  className="flex justify-between cursor-pointer"
                  onClick={() => setShowPrice(!showPrice)}
                >
                  <h2 className="font-bold text-xl">Price</h2>
                  <Image
                    src={"/arrow.svg"}
                    alt="Arrow"
                    width={16}
                    height={16}
                    className={`transform transition-transform duration-300 ${
                      showPrice ? "rotate-180" : ""
                    }`}
                  />
                </header>
                <div
                  className={`transition-all duration-300 ${
                    showPrice ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <RangeSlider />
                </div>
              </div>
              <hr />
              <div className="colors flex flex-col gap-3">
                <header
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowColors(!showColors)}
                >
                  <h2 className="font-bold text-xl">Colors</h2>
                  <Image
                    src={"/arrow.svg"}
                    alt="Arrow"
                    width={16}
                    height={16}
                    className={`transform transition-transform duration-300 ${
                      showColors ? "rotate-180" : ""
                    }`}
                  />
                </header>
                <div
                  className={`colorsContainer flex gap-3 flex-wrap transition-all duration-300 ${
                    showColors ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`color w-[37px] h-[37px] rounded-full`}
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="size flex flex-col gap-3">
                <header
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowSizes(!showSizes)}
                >
                  <h2 className="font-bold text-xl">Sizes</h2>
                  <Image
                    src={"/arrow.svg"}
                    alt="Arrow"
                    width={16}
                    height={16}
                    className={`transform transition-transform duration-300 ${
                      showSizes ? "rotate-180" : ""
                    }`}
                  />
                </header>
                <div
                  className={`colorsContainer flex gap-3 flex-wrap transition-all duration-300 ${
                    showSizes ? "max-h-screen" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {sizes.map((size) => (
                    <div
                      key={size}
                      style={{ fontSize: 16 }}
                      className={`size py-[10px] px-[20px] rounded-[20px] bg-[#F0F0F0] hover:bg-black duration-150 hover:text-white`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <Button text="Apply Filter" dark_variant={true} />
            </div>
          )}
        </div>
        <div className="products_container flex justify-center flex-wrap gap-5">
          {products.map((item: ProductCard_type) => {
            return <ProductCard key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
