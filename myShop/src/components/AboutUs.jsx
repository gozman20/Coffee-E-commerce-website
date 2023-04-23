import React from "react";
import styles from "./styles";
import coffee from "@/assets/images/img17.jpg";
export default function AboutUs() {
  return (
    <section id="About">
      <div className={`${styles.paddingY} ${styles.paddingX} `}>
        <h3 className="uppercase font-bold text-[30px] md:text-[40px] text-center mb-6">
          <span className="text-main ">About</span> us
        </h3>
        <div className="flex flex-wrap  gap-x-10 gap-y-6  bg-[rgb(32,32,32)]">
          {" "}
          <div className="md:w-1/2 ">
            <img src={coffee} alt="" className="h-full obj w-full" />
          </div>
          <div className="md:w-1/2  flex-1 ">
            <h3 className="text-white font-bold font text-[22px] md:text-[40px] mb-4">
              What makes our coffee unique?
            </h3>{" "}
            <p className={`${styles.paragraph} mb-6 text-gray-400`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              iusto qui voluptatum ipsa suscipit autem eius placeat non
              explicabo nisi, ea sapiente distinctio quas deleniti.
            </p>
            <p className={`${styles.paragraph} mb-6 text-gray-400`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ut
              inventore. Beatae fugit omnis cum assumenda illo voluptates? Iure
              sint adipisci cupiditate vel repellat accusantium autem laborum
              eos inventore dignissimos.
            </p>
            <button className="px-3 py-2 bg-main font-bold text-[20px] hover:bg-bghover">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
