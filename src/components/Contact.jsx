import styles from "../style";
import { layout } from "../style";
import { email, github } from "../assets";

const Contact = () => (
  <section id="contact" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center md:mb-0 mb-3 z-[5]`}>Contact Me</h2>
    </div>

    <div className="flex ss:flex-row flex-col mx-auto md:mb-0 mb-4">
      <div className={`${styles.flexCenter} ss:mb-0 mb-2 mr-2`}>
        <img src={email} alt="email" className="mr-2" />
        <a href="mailto:wilsonnn948@gmail.com" className="font-poppins text-[18px] font-semibold text-white hover:text-secondary mr-[20px] z-[5]">
          Wilsonnn948@gmail.com
        </a>
      </div>

      <div className={styles.flexCenter}>
        <img src={github} alt="github" className="mr-2" />
        <a href="https://github.com/codewilson64/" className="font-poppins text-[18px] font-semibold text-white hover:text-secondary  mr-[20px] z-[5]">
          Github.com/codewilson64/
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
