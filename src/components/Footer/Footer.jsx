import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">

      <div className="flex flex-wrap justify-between gap-12 max-w-7xl mx-auto px-10 py-10">

        <div className="flex-1 basis-72 ">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500">O</span>cify
          </a>

          <p className="text-zinc-600 mt-4 max-w-sm leading-7">
            Fresh groceries delivered to your doorstep with quality,
            care, and fast service every day.
          </p>

          <p className="text-zinc-800 mt-6">
            © 2026 Grocify. All Rights Reserved.
          </p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
          </li>

          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              About
            </a>
          </li>

          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              FAQ'S
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
          </li>

          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              Support Center
            </a>
          </li>

          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              Feedback
            </a>
          </li>

          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">
            Stay Connected
          </h5>

          <p className="mt-6 text-zinc-600 leading-7">
            Questions or Feedback? <br />
            We'd love to hear from you
          </p>

          <div className="flex items-center bg-white p-1 rounded-lg mt-6 max-w-sm">

            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email Address..."
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
            />

            <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg text-white text-2xl transition-all duration-600 cursor-pointer">
              <IoIosArrowForward />
            </button>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
