import React from "react";
import styles from "./styles";
import feedback1 from "@/assets/images/feedback.jpg";
import feedback2 from "@/assets/images/feedback2.jpg";

export default function Review() {
  return (
    <section id="Review" className={` ${styles.paddingY} ${styles.paddingX}  `}>
      <h3 className="text-[22px] md:text-[30px] font-normal mb-6 text-center uppercase">
        What <span className="text-main">people</span> say about our{" "}
        <span className="text-main"> product</span>
      </h3>
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-4">
        <div className="flex flex-col flex-1 p-3 gap-y-3 justify-center items-center shadow-lg bg-gray-700">
          <div className="w-[150px] h-[150px] ">
            <img
              src={feedback1}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="font-bold">Regina Anderson</h3>

          <p className=" text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laudantium magni consectetur obcaecati quia itaque!
          </p>
        </div>
        <div className="flex flex-col flex-1 p-3 gap-y-3 justify-center items-center bg-gray-700">
          <div className="w-[150px] h-[150px] ">
            <img
              src={feedback1}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="font-bold">Regina Anderson</h3>

          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laudantium magni consectetur obcaecati quia itaque!
          </p>
        </div>
        <div className="hidden lg:flex flex-col flex-1 p-3 gap-y-3 justify-center items-center bg-gray-700">
          <div className="w-[150px] h-[150px] ">
            <img
              src={feedback1}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="font-bold">Regina Anderson</h3>

          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laudantium magni consectetur obcaecati quia itaque!
          </p>
        </div>
      </div>
    </section>
  );
}
