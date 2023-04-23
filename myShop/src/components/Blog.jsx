import React from "react";
import blogImage from "@/assets/images/img18.jpg";
import styles from "./styles";

export default function Blog() {
  return (
    <section
      id="Blogs"
      className={`${styles.paddingY} ${styles.paddingX} bg-bgdark`}
    >
      <h3 className="text-[30px] font-bold text-center md:text-[40px] mb-4">
        Our <span className="text-main">blog</span>
      </h3>
      <div className="gridcontainer">
        {/* ----blog1 */}
        <div className="flex  flex-col border border-gray-400 text-center ">
          <div className="h-2/3 hover:scale-[110%] duration-300">
            <img src={blogImage} alt="" className="h-full w-full" />
          </div>

          <div className="h-1/3 p-3">
            <h3 className="text-[22px] font-bold mt-3">Tasty and sweet</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="flex  flex-col border border-gray-400 text-center ">
          <div className="h-2/3 hover:scale-[110%] duration-300">
            <img src={blogImage} alt="" className="h-full w-full" />
          </div>

          <div className="h-1/3 p-3">
            <h3 className="text-[22px] font-bold mt-3">Tasty and sweet</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="flex  flex-col border border-gray-400 text-center ">
          <div className="h-2/3 hover:scale-[110%] duration-300">
            <img src={blogImage} alt="" className="h-full w-full" />
          </div>

          <div className="h-1/3 p-3">
            <h3 className="text-[22px] font-bold mt-3">Tasty and sweet</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
