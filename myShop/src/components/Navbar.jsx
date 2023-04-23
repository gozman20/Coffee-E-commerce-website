import React, { useState, useEffect } from "react";
import styles from "./styles";
import logo from "@/assets/images/shop_logo.avif";
import { navLinks } from "@/data";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { setCartIcon, setMenuIcon, setSearch } from "../features/CartSlice";

export default function Navbar() {
  const { cartIcon, menuIcon } = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(menuIcon);

  return (
    <div className={`${styles.boxWidth}   `}>
      <nav
        className={`${styles.paddingX} flex flex-row justify-between items-center mt-5 pb-5 border-b border-secondary `}
      >
        <div className="w-[50px] h-[50px] ">
          <img src={logo} className="rounded-full" />
        </div>
        {/* ---navlinks */}
        <ul className="lg:flex flex-row gap-x-5 items-center hidden ">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className=" hover:border-b hover:border-b-main hover:text-main"
            >
              {link.title}
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center gap-x-3">
          <AiOutlineSearch
            className="hover:text-main text-[25px]"
            onClick={() => dispatch(setSearch())}
          />
          <BsCart3
            className="hover:text-main text-[25px]"
            onClick={() => dispatch(setCartIcon())}
          />
          <GiHamburgerMenu
            className="hover:text-main text-[25px] lg:hidden"
            onClick={() => dispatch(setMenuIcon())}
          />
        </div>
      </nav>
      <div>
        {" "}
        {menuIcon && (
          <ul className="flex flex-col gap-y-5 font-bold p-5 items-start absolute w-[200px] top-32 right-0 z-20 bg-white text-black ">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className=" hover:border-b hover:border-b-main hover:text-main "
              >
                {link.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
