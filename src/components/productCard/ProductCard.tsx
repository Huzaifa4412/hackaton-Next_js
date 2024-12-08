import React from "react";
import Styles from "./ProductCard.module.css";
import Image from "next/image";

function ProductCard({
  item,
}: {
  item: {
    image: string;
    title: string;
    rating: string;
    price: string;
    actualPrice: string;
    discount: boolean;
    discountTag: string;
  };
}) {
  const { image, title, rating, price, actualPrice, discount, discountTag } =
    item;
  return (
    <div className={`${Styles.card} grid justify-between `}>
      <Image
        src={image}
        alt="Product 1"
        width={290}
        height={298}
        className="mb-[5px]"
      />
      <h3 className="font-bold text-[20px] capitalize">{title}</h3>
      <div className="rating flex gap-[8px]">
        <div className="stars flex gap-[5px] items-center ">
          <Image
            src={"/products/rating.svg"}
            alt="Rating"
            width={18}
            height={18}
          />
          <Image
            src={"/products/halfRating.svg"}
            alt="Rating Half"
            width={8.79}
            height={16.72}
          />
        </div>
        <div className="rating_number ml-[5px]">{rating}</div>
      </div>
      <div className="price flex gap-[10px]">
        <h3 className="text-[24px] font-bold">{price}</h3>
        {discount && (
          <div className="discount">
            <div className="DiscountPrice flex gap-[10px]">
              <h3 className="text-[24px] font-bold text-[#000000]/40">
                {actualPrice}
              </h3>
              <div className="discountTag bg-[#FF3333]/10 py-[6px] px-[14px] text-[#FF3333] rounded-[62px]">
                {discountTag}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
