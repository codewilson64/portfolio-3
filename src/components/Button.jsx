import React from "react";
import { resume } from "../assets";

const Button = () => {
  return (
    <button type="button" className={`mx-auto py-4 px-6 font-poppins font-semibold text-[18px] text-white bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none cursor-pointer rounded-full z-[10] mt-5`}>
      <a href={resume}>Download CV</a>
    </button>
  );
};

export default Button;
