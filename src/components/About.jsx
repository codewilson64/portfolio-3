import styles, { layout } from "../style";
import { frontend } from "../assets";

const About = () => (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} z-[5]`}>About Me</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 z-[5]`}>
        As a Front-End Developer, I possess an impressive arsenal of skills in <span className="font-semibold text-secondary">HTML, CSS, Javascript, Git, React, and Tailwind.</span> I am able to code and maintain responsive websites that
        offer a smooth user experience.
      </p>
      <div className="absolute z-[0] w-[50%] h-[60%] left-4 bottom-30 blue__gradient"></div>
    </div>

    <div className={layout.sectionImg}>
      <img src={frontend} alt="frontend" />
    </div>
  </section>
);

export default About;
