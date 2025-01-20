import React from "react";
import Image from "next/image";
import { Product } from "../../../Typing";
// import { Rating } from "../../app/ProductsPage/[slug]/page";
import Rating from "../Rating/Rating";
import Link from "next/link";

function ProductCard({ item }: { item: Product }) {
  const { image, name, rating, _id, price, discountPercent, discountedPrice } =
    item;
  // const id = `${title.replace(/-/g, "_")}${new Date().getMilliseconds()}`;
  return (
    <Link href={`/ProductsPage/${_id}`}>
      <div
        id={_id}
        className={`hover:shadow-xl p-3 grid w-[290px] justify-between  overflow-hidden] `}
      >
        <Image
          src={image}
          alt="Product 1"
          width={290}
          height={298}
          className="mb-[5px] w-[290px] h-[298px] object-cover rounded-[20px] object-center"
        />
        <h3 className="font-bold text-[20px] capitalize">{name}</h3>
        <div className="rating flex gap-[8px]">
          {<Rating rating={rating} />}
        </div>
        <div className="price flex gap-[10px]">
          <h3 className="text-[24px] font-bold">${price}</h3>
          {discountPercent > 0 && (
            <div className="discount">
              <div className="DiscountPrice flex gap-[10px]">
                <h3 className="text-[24px] font-bold text-[#000000]/40">
                  ${discountedPrice}
                </h3>
                <div className="discountTag bg-[#FF3333]/10 py-[6px] px-[14px] text-[#FF3333] rounded-[62px]">
                  {discountPercent}%
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
