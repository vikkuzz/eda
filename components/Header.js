import Image from "next/image";
import React from "react";
import Burger from "./Burger";

const Header = () => {
  return (
    <header className="fixed top-0 self-center w-full z-50">
      <div className="z-5 flex justify-between m-auto w-full max-w-4xl items-center h-[75px] bg-[#FFD700] md:bg-white px-4 md:px-8 rounded-br-3xl rounded-bl-3xl shadow-xl">
        <div className="md:hidden relative w-[150px] h-[26px]">
          <Image alt="logo" fill objectFit="contain" src="/images/logo.svg" />
        </div>
        <Burger />
        <div className="hidden md:flex gap-5">
          <a
            className="text-base font-bold hover:text-[#FFD700]"
            href="#advantages">
            преимущества
          </a>
          <a
            className="text-base font-bold hover:text-[#FFD700]"
            href="#questions">
            вопросы
          </a>
          <a
            className="text-base font-bold hover:text-[#FFD700]"
            href="#contactus">
            свяжитесь с нами
          </a>
        </div>
        <a
          href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=82e4265f7af24e23b0762d7bbbf184cb&utm_content=blank"
          target="blank"
          className="hidden md:flex h-[46px] px-10 items-center rounded-2xl bg-[#FFD700] text-xl font-extrabold hover:bg-black hover:text-[#FFD700]">
          стать курьером
        </a>
      </div>
    </header>
  );
};

export default Header;
