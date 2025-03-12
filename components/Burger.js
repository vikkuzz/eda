"use client";
import Image from "next/image";
import React, { useState } from "react";

const Burger = () => {
  const [isShow, setIsShhow] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsShhow(!isShow)}
        className="md:hidden p-1 cursor-pointer border border-[#FFD700] hover:border-black rounded-xs ">
        <div className="relative w-4 h-4">
          <Image alt="menu" src="/images/burger.svg" fill />
        </div>
      </button>
      {isShow && (
        <div
          onClick={() => setIsShhow(!isShow)}
          className="fixed md:hidden top-0 left-0 flex w-full h-screen z-[-1] bg-[rgba(0,0,0,0.6)] "></div>
      )}

      <div
        className={`fixed md:hidden flex flex-col gap-[2vw] top-[25vw] w-[60vw] p-[2vw] rounded-[5vw] pt-[3vw] bg-[#FFD700] translate-x-full ${
          isShow && "!-translate-x-[50%]"
        }`}>
        <a
          href="#advantages"
          className="p-[4vw] bg-white rounded-[3vw] text-[3.5vw]">
          преимущества
        </a>
        <a
          href="#questions"
          className="p-[4vw] bg-white rounded-[3vw] text-[3.5vw]">
          вопросы
        </a>
        <a
          href="#contactus"
          className="p-[4vw] bg-white rounded-[3vw] text-[3.5vw]">
          свяжитесь с нами
        </a>
      </div>
    </div>
  );
};

export default Burger;
