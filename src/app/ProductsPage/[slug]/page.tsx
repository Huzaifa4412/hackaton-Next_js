"use client";
import React, { useState } from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import Button from "@/components/Button/Button";
import Data from "@/Data.json";
import { Product, Cart } from "../../../../Typing";
import Review from "@/components/Review/Review";
import Link from "next/link";
import MightLike from "@/components/MightLike/MightLike";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/features/cartSlice";
import { Flip, toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const router = useRouter();
  const { slug } = params;
  const dispatch = useDispatch();
  const [p_size, setP_Size] = useState<string>();
  const [p_color, setP_Color] = useState<string>();
  const [p_qty, setP_qty] = useState<number>(1);

  const productData: Product =
    Data.find((data) => data.title === slug.replace(/_/g, " ")) ??
    ({} as Product);
  const {
    image,
    title,
    actualPrice,
    otherImages,
    category,
    description,
    discount,
    discountTag,
    price,
    colors,
    sizes,
    rating,
    id,
  } = productData;
  const [subImage, setSubImage] = useState(otherImages?.[0]);

  // ? Functions
  function AddToCartHandler(data: Cart) {
    dispatch(addToCart(data));
  }
  // const descHandler = (id: string) => {
  //   dispatch(descQty(id));
  // };

  return (
    <div className="!pt-0 max-w-[1440px] px-4 mx-auto py-[40] ">
      <div className="breadCrams py-4 flex items-center">
        <Link href={"/"}>
          <h3>Home</h3>
        </Link>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3>Shop</h3>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3>Men</h3>
        <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
        <h3 className="font-semibold">{category}</h3>
      </div>
      <div className="productDetails flex lg:flex-row flex-col  gap-8">
        <div className="productImages flex flex-col items-center lg:flex-row gap-4">
          <div className="subImages order-2 lg:order-1 flex flex-row lg:flex-col justify-center gap-2">
            {otherImages && (
              <>
                <div className="subImage bg-cover order-2 lg:order-1 overflow-hidden h-[111px] w-[106px] md:h-[167px] md:w-[152px] border-[#000000] hover:border rounded-[20px] bg-[#F0EEED]">
                  <Image
                    className="w-full h-full object-cover"
                    src={otherImages[1]}
                    onClick={() => setSubImage(otherImages[1])}
                    alt="Product"
                    width={152}
                    height={167}
                  />
                </div>
                <div className="subImage bg-cover overflow-hidden h-[111px] w-[106px] md:h-[167px] md:w-[152px] border-[#000000] hover:border rounded-[20px] bg-[#F0EEED]">
                  <Image
                    className="w-full h-full object-cover"
                    src={otherImages[2]}
                    onClick={() => {
                      setSubImage(otherImages[2]);
                    }}
                    alt="Product"
                    width={152}
                    height={167}
                  />
                </div>
                <div className="subImage bg-cover overflow-hidden h-[111px] w-[106px] md:h-[167px] md:w-[152px] border-[#000000] hover:border rounded-[20px] bg-[#F0EEED]">
                  <Image
                    className="w-full h-full object-cover"
                    src={otherImages[3]}
                    onClick={() => {
                      setSubImage(otherImages[3]);
                    }}
                    alt="Product"
                    width={152}
                    height={167}
                  />
                </div>
              </>
            )}
          </div>
          <div className="mainImage order-1 sm:h-[530px] overflow-hidden w-[330px] h-[290px] sm:w-[444px] bg-[#F0EEED] rounded-[20px]">
            <Image
              src={subImage ?? image ?? ""}
              alt="Product"
              width={444}
              height={530}
              className="object-cover overflow-hidden w-full h-full"
            />
          </div>
        </div>
        <div className="details flex flex-col gap-4">
          <div>
            <Heading text={title} />
          </div>
          <Rating rating={parseInt(rating)} maxRating={5} />
          <div className="price text-[32px] font-bold gap-2 flex items-center">
            <h2>{price}</h2>
            <h2 className="line-through text-slate-400">{actualPrice}</h2>
            {discount && (
              <div className="tag w-[72px] h-[34px] rounded-[62px] bg-red-200 text-red-500 text-xl flex items-center justify-center font-medium">
                {discountTag}
              </div>
            )}
          </div>
          <div className="description">
            <p className="text-slate-500 text-[16px] font-medium">
              {description}
            </p>
          </div>
          <div>
            <hr />
          </div>
          <div className="selectedColors flex flex-col my-2 gap-2">
            <h3 className="font-medium text-xl">Select Colors</h3>
            <div className="colors_container flex gap-2">
              {colors?.map((color, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setP_Color(color);
                  }}
                  className={`color w-[37px] ${
                    p_color === color && "border-2 border-black p-1 scale-110"
                  } h-[37px] rounded-full border-2 hover:border-black hover:bg-black focus:border-2 focus:border-black`}
                  style={{
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="chooseSize flex flex-col gap-2">
            <h3 className="font-medium text-xl">Select Size</h3>
            <div className="sizes_container grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  w-max gap-2">
              {sizes.map((size, index) => (
                <div
                  className={`w-max flex-shrink-0 ${
                    p_size === size && "invert"
                  }`}
                  key={index}
                  onClick={() => {
                    setP_Size(size);
                  }}
                >
                  <Button dark_variant={false} text={size} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="flex gap-5">
            <div className="q_btns bg-[#F0F0F0] w-[170px] hover:bg-slate-200 rounded-[62px] py-[12px] px-[20px] flex items-center justify-between">
              <Image
                src="/incr.svg"
                onClick={() => {
                  setP_qty((prev) => prev - 1);
                }}
                alt="decrement"
                width={24}
                height={24}
              />
              <span className="text-black text-2xl font-bold">{p_qty}</span>
              <Image
                src="/desc.svg"
                alt="increment"
                onClick={() => {
                  setP_qty((prev) => prev + 1);
                }}
                width={24}
                height={24}
              />
            </div>
            <div className="lg:w-full flex items-center w-[50%]">
              <div
                onClick={() => {
                  AddToCartHandler({
                    id,
                    title,
                    image,
                    qty: p_qty || 0,
                    price,
                    p_color: p_color || "Random",
                    p_size: p_size || "Random",
                  });
                  toast("🎉 Item Add to the Cart", {
                    position: "top-center",
                    autoClose: 1200,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip,
                    onClick: () => {
                      router.push("/Cart");
                    },
                    style: {
                      cursor: "pointer",
                    },
                  });
                }}
              >
                <Button dark_variant={true} text="Add to Cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Review />
      <MightLike />
    </div>
  );
};

interface RatingProps {
  rating: number; // e.g., 4.5
  maxRating?: number; // Default to 5
}

function Rating({ rating, maxRating }: RatingProps) {
  const fullStar = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex gap-3">
      <div className="star active flex items-center gap-1">
        {Array.from({ length: fullStar }, (_, index) => (
          <div key={index} className="">
            <Image
              src={"/products/rating.svg"}
              alt="Star"
              width={25}
              height={25}
            />
          </div>
        ))}
        {halfStar && <div className="star half active" />}
        {Array.from({ length: halfStar ? 1 : 0 }, (_, index) => (
          <div key={index}>
            <Image
              src={"/products/ratingHalf.svg"}
              alt="Star"
              width={12}
              height={12}
            />
          </div>
        ))}
      </div>
      <div>
        <span className="text-black text-xl">{rating}</span>/{maxRating || 5}
      </div>
    </div>
  );
}
export default Page;
