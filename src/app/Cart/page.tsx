"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Data from "@/Data.json";
import { Product } from "../../../Typing";
import Heading from "@/components/Heading/Heading";

const item = Data[0];
const Page = () => {
  return (
    <div className="cart max-w-[1440px] mx-auto my-4 sm:my-8 px-4">
      <div className="navigation flex items-center justify-center w-max gap-2 mb-4 sm:mb-6">
        <Link href={"/"}>
          <h3 className="text-base sm:text-lg text-slate-300">Home</h3>
        </Link>
        <Image
          src="/arrow.svg"
          alt="Cart"
          width={16}
          height={16}
          className=" w-4 h-4"
        />
        <h3 className="text-base sm:text-lg">Cart</h3>
      </div>
      <Heading text="Your cart" />
      <div className="content flex flex-col lg:flex-row w-full gap-5 my-4 sm:my-8">
        <div className="cart_item_container w-full lg:max-w-[715px] border rounded-[20px] px-4 sm:px-[24px] py-[20px] h-max">
          <CartItems item={item} />
        </div>
        <div className="order_summary px-4 sm:px-6 py-5 border rounded-[20px] w-full lg:w-[505px] flex flex-col gap-4 sm:gap-6 h-max">
          <div className="subtotal font-bold text-xl sm:text-[24px]">
            Order Summary
          </div>
          <div className="sub_total w-full flex items-center justify-between">
            <div className="text-[#000000]/60 text-lg sm:text-2xl">
              Sub Total
            </div>
            <div className="font-bold text-lg sm:text-2xl">${1500}</div>
          </div>
          <div className="discount w-full flex items-center justify-between">
            <div className="text-[#000000]/60 text-lg sm:text-2xl">
              Discount (-20%)
            </div>

            <div className="font-bold text-base sm:text-lg text-red-500">
              -${15}
            </div>
          </div>
          <div className="Delivery_Fee w-full flex items-center justify-between">
            <div className="text-[#000000]/60 text-lg sm:text-2xl">
              Delivery Fee
            </div>

            <div className="font-medium text-slate-300 text-base sm:text-lg">
              ${15}
            </div>
          </div>
          <hr className="text-[#000000/60]" />
          <div className="total w-full flex items-center justify-between">
            <div className="text-[#000000]/60 text-lg sm:text-2xl">Total</div>
            <div className="font-bold text-lg sm:text-2xl">${1500}</div>
          </div>
          <div className="checkout_btn">
            <Link href={"/CheckOut"}>
              <button className="button flex items-center justify-center gap-3 w-full px-4 sm:px-[24px] py-2 sm:py-[12px] text-lg sm:text-xl rounded-[62px] text-white  bg-[#000000]">
                Go to Checkout
                <Image
                  src="/Cart/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItems = ({ item }: { item: Product }) => {
  return (
    <>
      <div className="w-full my-4 sm:my-8">
        <div className="wrapper w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          <div className="image w-full sm:w-[124px] h-[124px]">
            <Image
              src={item.image}
              className="w-full h-full object-cover object-center"
              width={124}
              height={124}
              alt="cartImage"
            />
          </div>
          <div className="content flex flex-col sm:flex-row items-center justify-between w-full">
            <div className="detailSed mb-2 sm:mb-0">
              <div className="p_name font-bold text-lg sm:text-[20px]">
                {item.title}
              </div>
              <div className="p_price font-bold text-xl sm:text-[24px]">
                Rs : 1200
              </div>
            </div>
            <div className="actionSec w-full sm:w-max flex flex-row sm:flex-col justify-between items-center sm:items-end mt-2 sm:mt-0">
              <div className="image mb-2 sm:mb-4">
                <Image
                  src="/Cart/bin.svg"
                  alt=""
                  className="hover:cursor-pointer w-6 h-6"
                  width={24}
                  height={24}
                />
              </div>
              <div className="q_btns h-[44px] w-[126px] bg-[#F0F0F0] hover:bg-slate-400 rounded-[62px] py-[12px] px-[20px] flex items-center justify-between">
                <Image
                  src="/desc.svg"
                  alt="decrement"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                />
                <span className="text-black text-2xl font-bold">{1}</span>
                <Image
                  src="/incr.svg"
                  alt="increment"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-slate-300" />
    </>
  );
};

export default Page;
