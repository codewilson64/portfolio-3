import styles from "../style";
import { wilson } from "../assets";
import Button from "./Button";
import { experiences } from "../constants";

const TechStack = ({ icon, index }) => (
  <div>
    <div>
      <img src={icon} alt="icon" className={`w-[35px] h-[35px] object-contain ${index === experiences.length - 1 ? "mr-0" : "mr-8"}`} />
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className={`flex sm:flex-row flex-col ${styles.paddingY}`}>
    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 sm:pl-8 pl-0 relative`}>
      <img src={wilson} alt="wilson" className="sm:w-[70%] w-[50%] relative rounded-full " />
    </div>

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-18 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold md:text-[72px] text-[52px] text-white text-center md:leading-[60px] leading-[50px] z-[5]">
          WILSON <br className="xxs:block hidden" />
          <span className="text-gradient md:text-[42px] text-[32px]">Frontend Developer</span>
        </h1>
        <div className="absolute z-[0] w-[50%] h-[60%] right-40 sm:right-10 bottom-30 blue__gradient"></div>
      </div>
      <Button />

      <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mx-auto mt-16">
        <p className="font-poppins font-semibold text-[14px] text-white mr-8 border-r-2 border-cyan-500 pr-6">Tech Stack</p>
        {experiences.map((experience, index) => (
          <TechStack key={experience.id} {...experience} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
