import React from "react";
import CartItems from "./CartItems";
import Search from "./Search";
import { useSelector } from "react-redux";
import styles from "./styles";

export default function Hero() {
  const { searchIcon } = useSelector((store) => store);

  return (
    <section
      id="Home"
      className={`flex flex-col  justify-center ${styles.paddingX} relative ${styles.paddingY} h-[400px] md:min-h-[600px] bg-mainSlider bg-center bg-cover`}
    >
      {searchIcon && (
        <div
          className={`${styles.paddingX} absolute top-0 lg:right-10  right-0 transform duration-500 z-10`}
        >
          <Search />
        </div>
      )}

      <div className="absolute  text-black top-0 right-0  w-[350px] md:w-[300px]   bg-white z-10">
        <CartItems className="bg-white" />
      </div>

      <div className=" flex flex-col justify-center gap-y-4 md:items-start items-center text-center md:text-left">
        <h3 className="text-[30px] lg:text-[50px] font-bold uppercase leading-tight ">
          <span className="text-main ">Get</span> a coffee{" "}
          <br className="hidden md:block" />
          with a unique taste
        </h3>
        <p
          className={`${styles.paragraph} lg:w-[500px] w-[370px] leading-normal `}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          optio. Ad excepturi id consequuntur illum, a laudantium.
        </p>
        <button className="bg-main px-3 py-2 text-[20px] font-bold hover:bg-bghover">
          Get yours now
        </button>
      </div>
    </section>
  );
}
