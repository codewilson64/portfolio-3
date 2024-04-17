import styles from "../style";
import { layout } from "../style";
import { contacts } from "../constants";

const SocialMedia = ({ icon, link, index }) => (
  <div className={styles.flexCenter}>
    <a href={link} className={`${index === contacts.length - 1 ? "mr-0" : "mr-[30px]"} z-10`}>
      <img src={icon} alt="whatsapp" className="sm:w-[35px] w-[25px]" />
    </a>
  </div>
);

const Contact = () => (
  <section id="contact" className={`flex flex-col ${styles.paddingY}`}>
    <div className={layout.sectionInfo}>
      <h2 className={`w-full font-poppins font-semibold sm:text-[48px] text-[25px] text-white text-center mb-5 z-[5]`}>Contact Me</h2>
    </div>
    <div className="flex-1 flex justify-center md:mb-0 mb-4">
      {contacts.map((contact, index) => (
        <SocialMedia key={contact.id} {...contact} index={index} />
      ))}
    </div>

    {/* <div className="flex ss:flex-row flex-col mx-auto md:mb-0 mb-4">
      <div className={`${styles.flexCenter} ss:mb-0 mb-2 mr-2`}>
        <img src={icon.email} alt="email" className="mr-2 sm:w-[25px] w-[20px]" />
        <a href="mailto:wilsonnn948@gmail.com" className="font-poppins sm:text-[18px] text-[12px] font-semibold text-white hover:text-secondary mr-[20px] z-[5]">
          wilsonnn948@gmail.com
        </a>
      </div>

      <div className={styles.flexCenter}>
        <img src={icon.whatsapp} alt="whatsapp" className="mr-2 sm:w-[25px] w-[20px]" />
        <a href="https://github.com/codewilson64/" className="font-poppins sm:text-[18px] text-[12px] font-semibold text-white hover:text-secondary mr-[20px] z-[5]">
          github.com/codewilson64/
        </a>
      </div>
    </div> */}
  </section>
);

export default Contact;
