import React from "react";
import { data } from "@/data";
import styles from "./styles";
import Product from "./Product";

export default function Menu() {
  return (
    <section id="Menu" className={` ${styles.paddingY} ${styles.paddingX}  `}>
      <div>
        <h3 className="text-center font-normal text-[20px] uppercase md:text-[40px] mb-6 ">
          Our <span className="text-main">menu</span>
        </h3>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.slice(0, 6).map((item, index) => (
            <div key={index} className="">
              <Product item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
