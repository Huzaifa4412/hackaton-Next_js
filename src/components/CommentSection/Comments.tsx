"use client";
import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { formData } from "../../../Typing";
// import Button from "../Button/Button";
import { getComments } from "@/actions/Comments";
import { client } from "@/sanity/lib/client";

const CommentList = ({ postID }: { postID: string }) => {
  const [testimonials, setTestimonials] = useState<formData[]>([]);
  const [loading, startTransition] = useTransition();

  useEffect(() => {
    const fetchComments = async () => {
      startTransition(() => {
        getComments(postID).then((fetchComment) =>
          setTestimonials(fetchComment)
        );
      });
    };

    fetchComments();

    const subscription = client
      .listen(
        `*[_type == "comment" && post._ref == $postID] | order(_createdAt desc)`,
        { postID }
      )
      .subscribe((update) => {
        if (update.result) {
          fetchComments();
        }
      });

    return () => subscription.unsubscribe(); // Cleanup on unmount
  }, [postID]);

  return (
    <div className="my-16">
      <nav className="grid grid-cols-1 my-12 justify-center h-max ">
        {/* <h2 className="text-center font-medium text-[16px] md:text-[20px] border-b-2 pb-3 hover:border-black duration-500">
          Product Details
        </h2> */}
        <h2 className="text-center font-medium text-[20px] md:text-[20px] border-b-2 pb-3 hover:border-black duration-500">
          Rating and Review
        </h2>
        {/* <h2 className="text-center font-medium text-[16px] md:text-[20px] border-b-2 pb-3 hover:border-black duration-500">
          FAQs
        </h2> */}
      </nav>
      {loading ? (
        <h2 className="text-xl text-center font-semibold">
          Loading Reviews ...
        </h2>
      ) : (
        <div className="reviews">
          <div className="flex md:flex-row flex-col gap-3 items-center justify-center py-8">
            <h2 className="text-[24px] font-bold ">
              All Reviews{" "}
              <span className="text-sm text-slate-400 font-medium">
                ({testimonials.length})
              </span>
            </h2>
            {/* <div className="flex gap-5 items-center">
            <Button text="Latest" dark_variant={false} />
            <Button text="Write a Review" dark_variant={true} />
          </div> */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-max  gap-5">
            {testimonials.map((item: formData, index) => (
              <Testimonials
                key={index}
                item={item}
                createdData={item._createdAt!}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentList;

function Testimonials({
  item,
  createdData,
}: {
  item: formData;
  createdData: string;
}) {
  return (
    <div className="testimonial cursor-grab justify-evenly min-w-[310px]  flex-shrink-0 mx-auto flex flex-col gap-2 px-[32px] py-[24px]  border-2 rounded-[20px]">
      <Image
        src={"/Testimonials/startsFrame.svg"}
        alt="Rating"
        width={139}
        height={23}
      />
      <div className="intro flex gap-2">
        <div className="name text-xl font-semibold">{item.name}</div>
        <Image
          src={"/Testimonials/verify.svg"}
          alt="Verify"
          width={24}
          height={24}
        />
      </div>
      <div className="content text-[#000000]/60 text-[16px] font-light">
        {item.message}
      </div>
      <div className="postedDate">
        <span className="text-sm text-slate-500 font-medium">
          Posted on{" "}
          {new Date(createdData).toLocaleDateString("en-US", {
            month: "short", // "Oct"
            day: "2-digit", // "15"
            year: "numeric", // "2022"
          })}
        </span>
      </div>
    </div>
  );
}
