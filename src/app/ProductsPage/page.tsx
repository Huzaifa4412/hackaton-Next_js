"use client";
import React, {
  // useCallback,
  useContext,
  // useEffect,
  // useRef,
  useState,
} from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import RangeSlider from "@/components/RangeSlider/RangeSelector";
import Button from "@/components/Button/Button";
import ProductCard from "@/components/productCard/ProductCard";
import { Product } from "../../../Typing";
import Link from "next/link";
import { ContextType, DataContext } from "../context/ProductContext";
// import { getProducts } from "@/sanity/lib/data";

const Page = () => {
  const { data } = useContext(DataContext) as ContextType;
  const [products, setProducts] = useState<Product[]>(data);
  const [filterConfig, setFilterConfig] = useState({
    category: "",
    lowPrice: 200,
    highPrice: 400,
    color: "",
    size: "",
  });

  // ! Filter Products
  // Filter by Category
  const filterByCategory = (category: string) => {
    setProducts(data.filter((item) => item.category === category));
  };
  // Filter by Price
  const filterByPrice = (lowPrice: number, highPrice: number) => {
    // setProducts(
    //   data.filter(
    //     (item) =>
    //       Number(item.price) >= lowPrice && Number(item.price) <= highPrice
    //   )
    // );
    setFilterConfig({
      ...filterConfig,
      lowPrice,
      highPrice,
    });
  };
  // Filter by Colors
  const filterByColors = (color: string) => {
    setProducts(
      data.filter((item) =>
        item.colors.some((c) => c.toLowerCase() === color.toLowerCase())
      )
    );
  };
  // Filter by Sizes
  const filterBySizes = (size: string) => {
    setProducts(
      data.filter((item) =>
        item.sizes.some(
          (c) => c.toLocaleLowerCase() === size.toLocaleLowerCase()
        )
      )
    );
  };

  // ! Applying more the one filter
  function ApplyFilters() {
    const filteredData = data.filter(
      (item) =>
        item.category == filterConfig.category &&
        Number(item.price) >= filterConfig.lowPrice &&
        Number(item.price) <= filterConfig.highPrice &&
        item.colors.some((c) => c.toLowerCase() === filterConfig.color) &&
        item.sizes.some((c) => c.toLocaleLowerCase() === filterConfig.size)
    );
    console.log("Filters has been Applied", filteredData);
    setProducts(filteredData);
  }
  // State for filtering products based on price range
  const fetchCategories = Array.from(
    new Set(data.map((item) => item.category))
  );
  // ? Fetching Unique Colors
  const [categories] = useState(fetchCategories);
  const uniqueColors = Array.from(
    new Set(
      data.flatMap((item) => item.colors.map((color) => color.toLowerCase()))
    )
  );
  const [colors] = useState(uniqueColors);

  // ? Fetching Unique Sizes
  const uniqueSizes = Array.from(
    new Set(
      data.flatMap((item) => item.sizes.map((size) => size.toLowerCase()))
    )
  );
  const [sizes] = useState(uniqueSizes);
  // State for toggling visibility
  const [showPrice, setShowPrice] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showSizes, setShowSizes] = useState(false);

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="container !px-0">
      <div className="BreadCrams text-[16px] px-5 flex gap-2 items-center">
        <Link href={"/"} className="flex items-center">
          <h3>Home</h3>
          <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        </Link>
        <h3>All Outfits</h3>
      </div>
      <div className="content flex flex-col lg:flex-row gap-8 items-center lg:items-start  h-max mt-8">
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
                  {categories.map((category) => {
                    return (
                      <div
                        key={category}
                        onClick={() => {
                          filterByCategory(category);
                          setFilterConfig({
                            ...filterConfig,
                            category: category,
                          });
                        }}
                        className="t-shirt flex justify-between cursor-pointer"
                      >
                        <h3 className="capitalize">{category}</h3>
                        <Image
                          src={"/arrow.svg"}
                          alt="Arrow"
                          width={16}
                          height={16}
                          className={`transform transition-transform duration-300 hover:rotate-90
                          `}
                        />
                      </div>
                    );
                  })}
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
                  <RangeSlider filterByPrice={filterByPrice} />
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
                      className={`color w-[37px] h-[37px] rounded-full hover
                        :border-4 border-[#f2f2f2]`}
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        filterByColors(color);
                        setFilterConfig({
                          ...filterConfig,
                          color,
                        });
                      }}
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
                      onClick={() => {
                        filterBySizes(size);
                        setFilterConfig({
                          ...filterConfig,
                          size,
                        });
                      }}
                      className={`size py-[10px] uppercase px-[20px] rounded-[20px] bg-[#F0F0F0] hover:bg-black duration-150 hover:text-white`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div
                onClick={() => {
                  ApplyFilters();
                }}
              >
                <Button text="Apply Filter" dark_variant={true} />
              </div>
            </div>
          )}
        </div>
        <div className="products_container flex justify-center flex-wrap gap-5">
          {data.length > 0 &&
            products.map((item: Product) => {
              return <ProductCard key={item._id} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Page;
