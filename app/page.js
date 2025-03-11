import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 mt-12 px-8 md:px-0 w-full max-w-[900px]">
      <div className="flex flex-col self-center gap-3 w-[320px]">
        <h1 className="md:hidden text-3xl font-bold">Работай курьером</h1>
        <span className="md:hidden text-base font-bold">
          и получай оплату каждый день!
        </span>
        <p className="md:hidden text-base font-bold">
          А в конце месяца выплатим вам премию за работу!
        </p>
        <a
          className="md:hidden absolute flex top-[663px] self-center text-white text-[24px] font-extrabold "
          href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=82e4265f7af24e23b0762d7bbbf184cb&utm_content=blank"
          target="blank">
          Заполнить анкету
        </a>
      </div>

      <div className="back_block_desk relative p-4 flex flex-col gap-3">
        <h1 className="hidden md:flex text-3xl font-bold">Работай курьером</h1>
        <span className="hidden md:flex text-base font-bold">
          и получай оплату каждый день!
        </span>
        <p className="hidden md:flex max-w-96 text-[55px] text-[#200300] leading-14 font-extrabold">
          до 230 000 ₽<br></br>в месяц
        </p>
        <p className="hidden md:flex max-w-60 text-base font-bold">
          А в конце месяца выплатим вам премию за работу!
        </p>
        <a
          className="absolute hidden md:flex bottom-16 bg-[#230F0A] w-[370px] h-[70px] rounded-3xl justify-center items-center text-white text-2xl font-extrabold "
          href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=82e4265f7af24e23b0762d7bbbf184cb&utm_content=blank"
          target="blank">
          Заполнить анкету
        </a>
      </div>
    </div>
  );
}
