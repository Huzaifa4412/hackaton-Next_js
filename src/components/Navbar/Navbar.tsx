import React from "react";
import Styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={` ${Styles.Navbar} container`}>
      <div
        className={`${Styles.updatePart} w-full  relative h-[38px] flex items-center justify-center`}
        style={{
          backgroundColor: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        <p className="font-light">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline">Sign Up Now</span>
        </p>
        <Image
          src={"cross.svg"}
          className="absolute right-10"
          alt="Cross Icon"
          width={20}
          height={20}
        />
      </div>
      <nav className="lg:w-[1024px] xl:w-[1240px] h-[41px] md:px-3 lg:gap-[40px] mx-auto my-5 flex items-center justify-evenly md:justify-center  gap-[20px]">
        <div className={`${Styles.logo} text-[32px] font-bold`}>SHOP.CO</div>
        <div className={`${Styles.nav_items}`}>
          <ul className=" hidden md:flex gap-[24px] items-center">
            <li>
              <Link href={"/"} className="flex items-center gap-1">
                Shop{" "}
                <Image
                  src={"dropDown.svg"}
                  alt="Drop Down Icon"
                  width={15}
                  height={15}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"} className="font-medium">
                On Sale
              </Link>
            </li>
            <li>
              <Link href={"/"} className="font-medium">
                New Arrival
              </Link>
            </li>
            <li>
              <Link href={"/"} className="font-medium">
                Brands
              </Link>
            </li>
          </ul>
          <Image
            src={"Menu.svg"}
            alt="Menu Icon"
            width={28}
            height={28}
            className={"block relative md:hidden"}
          />
        </div>
        <div
          className={`${Styles.searchBar} px-[16px] py-[12px] rounded-[62px] xl:w-[577px] h-[full] flex items-center gap-[6px]`}
          style={{ backgroundColor: "var(--light-gray)" }}
        >
          <Image
            src={"searchIcon.svg"}
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
        <div className="icons flex gap-2">
          <Image src={"card.svg"} alt="Card" width={25} height={25} />
          <Image src={"account.svg"} alt="Account" width={25} height={25} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
