import React from "react";
import styles from "./styles";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsHouseDoor } from "react-icons/bs";

export default function ContactUs() {
  return (
    <section id="Contacts" className={`${styles.paddingX} ${styles.paddingY}`}>
      <h3 className="uppercase text-[22px] md:text-[30px]  text-center mb-6">
        <span className="text-main">Contact</span> us
      </h3>

      <div className="flex flex-col md:flex-row gap-x-6 justify-between">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127223.13155861599!2d6.922393766179316!3d4.817576557151205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f2c48e3%3A0x53562bdd7d8832db!2sPort%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1682208687993!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="hidden lg:block"
        ></iframe>
        {/* ----form starts*/}
        <div className=" lg:w-1/2 w-full">
          <form className="flex flex-col gap-y-5">
            <div className=" h-[30px] relative w-full ">
              <input
                type="text "
                className="w-full h-full outline-none p-3 text-black"
                placeholder="Name"
              />
              <div className="absolute right-2 top-0">
                {" "}
                <BsPerson className="text-main text-[25px]" />
              </div>
            </div>
            <div className="w-full h-[35px] relative">
              <input
                type="text lg:w-full"
                className="w-full h-full outline-none p-3 text-black "
                placeholder="email"
              />
              <div className="absolute right-2 top-0">
                {" "}
                <AiOutlineMail className="text-main text-[25px]" />
              </div>
            </div>
            <div className="w-full h-[35px] relative">
              <input
                type="number"
                className="w-full h-full outline-none p-3 text-black"
                placeholder="phone"
              />
              <div className="absolute right-2 top-0">
                {" "}
                <AiFillPhone className="text-main text-[25px]" />
              </div>
            </div>
            <div className="w-full h-[35px] border border-main relative">
              <input
                type="text w-full"
                className="w-full h-full outline-none p-3 text-black"
                placeholder="Address"
              />
              <div className="absolute right-2 top-0">
                {" "}
                <BsHouseDoor className="text-main text-[25px]" />
              </div>
            </div>
            <textarea
              className="resize-none outline-none text-black p-3 h-[100px]"
              placeholder="Message"
            ></textarea>
            <button className="bg-main h-[35px]">Send</button>
          </form>
        </div>
        {/* -----form ends here */}
      </div>
    </section>
  );
}
