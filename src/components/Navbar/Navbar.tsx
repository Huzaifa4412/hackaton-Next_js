"use client";
import React, { useEffect } from "react";
import Styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className={` ${Styles.Navbar} `}>
      <div
        className={`${Styles.updatePart}  w-full h-[38px] `}
        style={{
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        <div className="flex items-center relative justify-center h-full max-w-[1440px] mx-auto">
          <p className="font-medium">
            Sign up and get 20% off to your first order.{" "}
            <span className="underline">Sign Up Now</span>
          </p>
          <Image
            src={"/cross.svg"}
            className="absolute right-3"
            alt="Cross Icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <nav className="lg:w-[1024px]  xl:w-[1240px] h-[48px] xl:gap-[40px] mx-auto my-5 flex items-center justify-evenly md:justify-center  gap-[20px]">
        <Link href={"/"} className="order-1 sm:order-2">
          <div className={`${Styles.logo} text-[32px] font-ld `}>SHOP.CO</div>
        </Link>
        <Image
          src={"/Menu.svg"}
          alt="Menu Icon"
          width={28}
          height={28}
          className={`${Styles.menu} block relative  md:hidden order-1 sm:order-2`}
          onClick={() => {
            setMenuOpen(!isMenuOpen);
          }}
        />
        <div className={`${Styles.nav_items} order-1 sm:order-2`}>
          <ul
            className={`hidden ${Styles.nav_list} duration-500 relative ${
              isMenuOpen ? `${Styles.active}` : ""
            } md:flex text-[16px]  gap-[22px] items-center font-medium`}
          >
            <li>
              <Link href={"/"} className="flex items-center gap-1">
                Shop{" "}
                <Image
                  src={"/dropDown.svg"}
                  alt="Drop Down Icon"
                  width={15}
                  height={15}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>On Sale</Link>
            </li>
            <li>
              <Link href={"/"}>New Arrival</Link>
            </li>
            <li>
              <Link href={"/"}>Brands</Link>
            </li>
            <Image
              src={"/cross.svg"}
              alt="Cross Icon"
              width={30}
              height={30}
              className="invert block md:hidden absolute top-8 right-8"
              onClick={() => {
                setMenuOpen(false);
              }}
            />
          </ul>
        </div>
        <div
          className={`${Styles.searchBar} order-3 px-[16px] py-[12px] rounded-[62px] xl:w-[577px] h-[full] flex items-center gap-[6px]`}
          style={{ backgroundColor: "var(--light-gray)" }}
        >
          <Image
            src={"/searchIcon.svg"}
            alt="Search Icon"
            width={20}
            height={20}
          />
          <input
            type="text"
            className="bg-transparent W-full h-full outline-none ml-1"
            placeholder={` Search For Products...`}
          />
        </div>
        <div className="icons flex gap-4 order-4">
          <Link href={"/Cart"} className="flex relative">
            <Image src={"/card.svg"} alt="Card" width={25} height={25} />
            <div className="w-5 absolute -bottom-2 -right-2 text-[10px] h-5 rounded-full bg-black text-white flex items-center justify-center">
              {0}
            </div>
          </Link>
          <Image src={"/account.svg"} alt="Account" width={25} height={25} />
        </div>
      </nav>
      <hr className=" h-[1px] mx-auto max-w-[1440px]" />
    </div>
  );
};

export default Navbar;
