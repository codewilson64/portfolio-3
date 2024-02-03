import { useState } from "react";
import { navLinks } from "../constants";
import { close, menu, github } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="#" className="text-white text-3xl font-bold italic">
        Wilson
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`text-white font-poppins font-normal text-[16px] hover:text-secondary cursor-pointer ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle((prev) => !prev)} />
      </div>

      <a href="https://github.com/codewilson64/">
        <img src={github} alt="github" className="ml-6 w-[20px]" />
      </a>

      <div className={`${toggle ? "flex" : "hidden"} absolute top-20 right-0 p-6 bg-black-gradient mx-4 my-2 min-w-[140px] z-[5] sidebar`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal text-white text-[16px] hover:text-sky-400 cursor-pointer ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
