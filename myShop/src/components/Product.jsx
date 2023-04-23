import React from "react";

export default function Product({ item }) {
  return (
    <div className="">
      <div className="border border-main p-3 gap-y-2 flex flex-col items-center">
        <div className="w-[120px] h-[120px]">
          {" "}
          <img
            src={item.image}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="text-[22px]">{item.type}</div>
        <div className="flex flex-row gap-x-2  items-center">
          <div className="text-[22px]">{item.price}</div>
          <div className="text-sm text-gray-300 line-through tracking-[2px]">
            {item.oldPrice}
          </div>
        </div>
        <button className="bg-main px-2 py-1 text-[25px] hover:bg-bghover">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
