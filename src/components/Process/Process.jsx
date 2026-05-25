import React from "react";
import Heading from "../Heading/Heading";

import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";

import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "We carefully select fresh and organic products from trusted local farms.",
    icons: <PiPlant />,
  },

  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "All products are processed and packed with high safety and hygiene standards.",
    icons: <PiFactory />,
  },

  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "Every item goes through strict quality checks before reaching customers.",
    icons: <SlBadge />,
  },

  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "Fast and reliable delivery ensures your groceries arrive fresh and on time.",
    icons: <BsTruck />,
  },
];

const Process = () => {

  const renderSteps = steps.map((item) => {
    return (

      <div
        key={item.id}
        className={`
          w-full 
          md:flex-1
          ${item.id % 2 === 0 ? "md:-mt-40" : ""}
        `}
      >

        {/* Number Circle */}
        <span className="flex justify-center items-center w-16 h-16 md:w-18 md:h-18 mx-auto rounded-full text-white text-7xl md:text-8xl outline-[3px] bg-zinc-800 outline-offset-7 outline-zinc-800 outline-dotted">
          {item.number}
        </span>

        {/* Icon + Content */}
        <div className="flex items-start gap-x-4 mt-10">

          {/* Icon */}
          <span className="flex justify-center items-center text-2xl md:text-3xl bg-orange-500 text-white w-13 h-13 md:w-15 md:h-15 rounded-full shrink-0">
            {item.icons}
          </span>

          {/* Text */}
          <div>
            <h4 className="text-zinc-800 text-xl md:text-2xl font-bold">
              {item.title}
            </h4>

            <p className="text-zinc-600 mt-2 text-sm md:text-base leading-relaxed">
              {item.para}
            </p>
          </div>

        </div>

      </div>
    );
  });

  return (
    <section>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20">

        <div className="w-fit mr-auto">
          <Heading highlight="Our " heading="Process" />
        </div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-14 md:gap-10 mt-20 md:pt-50">

          {renderSteps}

        </div>

      </div>

    </section>
  );
};

export default Process;