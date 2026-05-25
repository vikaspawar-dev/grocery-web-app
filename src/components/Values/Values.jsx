import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
        <div>
          <span className="flex justify-center items-center w-15 h-15 rounded-full bg-linear-to-b from-orange-400 to-orange-500 text-white text-2xl shadow-lg">{item.icon}</span>
        </div>
        {/* Content  */}
        <div className="md:text-right">
          <h3 className="text-3xl font-bold text-zinc-800 mb-2">{item.title}</h3>
          <p className="text-zinc-600 leading-7 text-lg mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = value.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7 ">
        <div>
          <span className="flex justify-center items-center w-15 h-15 rounded-full bg-linear-to-b from-orange-400 to-orange-500 text-white text-2xl shadow-lg">{item.icon}</span>
        </div>
        {/* Content  */}
        <div>
          <h3 className=" font-bold text-zinc-800 mb-2 text-3xl ">{item.title}</h3>
          <p className="text-zinc-600 leading-7 text-lg mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-7xl mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Value" />

        <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
          {/* Left Values  */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">{leftValues}</div>

          {/* <div  className=" ">
            <img src={Basket} />
          </div> */}

          <div className="relative flex justify-center items-center">
            {/* Soft Tote Green Glow */}
            <div className="absolute  w-80 h-80 bg-fuchsia-300 rounded-full blur-[120px]"></div>

            {/* Basket Image */}
            <img src={Basket} alt="Basket Image" className="relative z-10 w-96 md:w-full max-w-lg drop-shadow-2xl hover:scale-105 transition-all duration-500" />
          </div>

          {/* Right Values  */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">{rightValues}</div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "We build customer trust by delivering high-quality products with honesty and care.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "Fresh fruits and vegetables are delivered daily to keep your meals healthy and tasty.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "We maintain top food safety standards to ensure clean, healthy, and safe products.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Our products are naturally grown without harmful chemicals for a pure organic lifestyle.",
    icon: <FaSeedling />,
  },
];
