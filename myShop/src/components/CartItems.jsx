import React from "react";
import { data } from "@/data";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

// console.log(data);
export default function CartItems() {
  const { cartIcon } = useSelector((store) => store);
  return (
    <div>
      {cartIcon && (
        <div className="">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-center items-center px-5 gap-x-4 mb-[15px] relative"
            >
              <div className="h-[150px] w-[180px]">
                {" "}
                <img
                  src={item.image}
                  alt={item.type}
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-black font-bold text-[20px]">
                  {item.type}
                </h1>
                <h2 className="font-bold text-[25px] text-main">
                  {item.price}
                </h2>
              </div>

              <div className="absolute top-0 right-3 cursor-pointer">
                <IoMdClose className="text-main text-[20px]" />
              </div>
            </div>
          ))}

          <button className="bg-main text-white text-[24px] w-full hover:tracking-[4px] py-[5px]">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
