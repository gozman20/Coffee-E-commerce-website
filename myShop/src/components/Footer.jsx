import React from "react";
import { BsPinterest } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import styles from "./styles";

export default function Footer() {
  return (
    <section className={`${styles.paddingX} ${styles.padding}  `}>
      <div className="flex flex-row justify-center items-center gap-x-3">
        <div className="p-2 border border-main rounded-full">
          <BsPinterest className="text-[25px] text-white" />
        </div>
        <div className="p-2 border border-main rounded-full">
          <CiTwitter className="text-[25px] text-white" />
        </div>
        <div className="p-2 border border-main rounded-full">
          <AiOutlineInstagram className="text-[25px] text-white" />
        </div>
        <div className="p-2 border border-main rounded-full">
          <AiFillLinkedin className="text-[25px] text-white" />
        </div>
        <div className="p-2 border border-main rounded-full">
          <GrFacebook className="text-[25px] text-white" />
        </div>
      </div>
      <p className="flex flex-col gap-y-3 justify-center items-center mt-3">
        Copyright &copy; 2022. All right reserved
      </p>
    </section>
  );
}
