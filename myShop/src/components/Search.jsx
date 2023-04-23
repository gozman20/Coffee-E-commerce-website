import React from "react";
import { useSelector } from "react-redux";

export default function Search() {
  return (
    <div className="w-[300px]">
      <input
        type="search"
        placeholder="Search here "
        className="outline-none text-black w-full  p-2 "
      />
    </div>
  );
}
