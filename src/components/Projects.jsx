import styles, { layout } from "../style";
import { github, external_link, hilink, techhaven, youtube_clone, ecommerce, react, redux, typescript, tailwind, nextjs } from "../assets";

const Projects = () => (
  <section id="projects">
    <div>
      <h2 className={`${styles.heading2} text-center`}>My Projects</h2>
    </div>
    {/* Project 1 */}
    <div className={`${layout.sectionReverse} mb-8`}>
      <div className={layout.sectionImgReverse}>
        <img src={hilink} alt="hilink" className="rounded-lg object-contain z-[5]" />
      </div>

      <div className={`${layout.sectionInfo} text-center`}>
        <h2 className="font-poppins text-[25px] mx-auto font-semibold text-white z-[5]">Travel Website</h2>
        <p className={`${styles.paragraph} max-w-[400px] mx-auto mt-5 mb-5 z-[5]`}>A modern travel app landing page that has an appealing user interface from the hero section down to the footer section.</p>
        <div className={`${styles.flexCenter} mx-auto mb-8 gap-6 z-10`}>
          <img src={nextjs} alt="nextjs" className={`w-[35px] h-[35px] object-contain`} />
          <img src={tailwind} alt="tailwind" className={`w-[35px] h-[35px] object-contain`} />
          <img src={typescript} alt="typescript" className={`w-[35px] h-[35px] object-contain`} />
        </div>

        <div className={`${styles.flexCenter} mx-auto`}>
          <a
            href="https://github.com/codewilson64/hilink"
            target="_blank"
            className="flex font-poppins text-[16px] font-semibold text-white mr-[40px] py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]"
          >
            Code
            <img src={github} alt="github" className="ml-1" />
          </a>
          <a
            href="https://hilink-wine-five.vercel.app/"
            target="_blank"
            className="flex font-poppins text-[16px] font-semibold text-white py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]"
          >
            Live Demo
            <img src={external_link} alt="external_link" className="ml-1" />
          </a>
        </div>

        <div className="absolute z-[0] w-[60%] h-[60%] md:right-10 right-40 bottom-30 blue__gradient"></div>
      </div>
    </div>
    {/* Project 2 */}
    <div className={`${layout.section} mb-8`}>
      <div className={`${layout.sectionInfo} text-center`}>
        <h2 className="font-poppins text-[25px] mx-auto font-semibold text-white z-[5]">Ecommerce Website</h2>
        <p className={`${styles.paragraph} max-w-[450px] mx-auto mt-5 mb-5 z-[5]`}>An ecommerce website with full functionality from authentication to payment. Build with React, Tailwind and also Redux Toolkit for managing state easily.</p>
        <div className={`${styles.flexCenter} mx-auto mb-8 gap-6 z-10`}>
          <img src={react} alt="react" className={`w-[35px] h-[35px] object-contain`} />
          <img src={redux} alt="redux" className={`w-[35px] h-[35px] object-contain`} />
          <img src={tailwind} alt="tailwind" className={`w-[35px] h-[35px] object-contain`} />
        </div>

        <div className={`${styles.flexCenter} mx-auto`}>
          <a
            href="https://github.com/codewilson64/techhaven/tree/master"
            target="_blank"
            className="flex font-poppins text-[16px] font-semibold text-white mr-[40px] py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]"
          >
            Code
            <img src={github} alt="github" className="ml-1" />
          </a>
          <a
            href="https://codewilson64.github.io/techhaven/"
            target="_blank"
            className="flex font-poppins text-[16px] font-semibold text-white py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]"
          >
            Live Demo
            <img src={external_link} alt="external_link" className="ml-1" />
          </a>
        </div>

        <div className="absolute z-[0] w-[60%] h-[60%] md:left-10 left-40 bottom-30 blue__gradient"></div>
      </div>
      <div className={layout.sectionImg}>
        <img src={techhaven} alt="ecommerce" className="rounded-lg object-contain z-[5]" />
      </div>
    </div>
    {/* Project 3 */}
    <div className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={youtube_clone} alt="youtube clone" className="rounded-lg object-contain z-[5]" />
      </div>

      <div className={`${layout.sectionInfo} text-center`}>
        <h2 className="font-poppins text-[25px] mx-auto font-semibold text-white z-[5]">Youtube Clone</h2>
        <p className={`${styles.paragraph} max-w-[400px] mx-auto mt-5 mb-5 z-[5]`}>
          A Youtube clone website build with React, Tailwind and by the help of Youtube API to provide all the necessary data like videos, comments and the number of views and likes.
        </p>
        <div className={`${styles.flexCenter} mx-auto mb-8 gap-6 z-10`}>
          <img src={react} alt="react" className={`w-[35px] h-[35px] object-contain`} />
          <img src={tailwind} alt="tailwind" className={`w-[35px] h-[35px] object-contain`} />
        </div>

        <div className={`${styles.flexCenter} mx-auto`}>
          <a
            href="https://github.com/codewilson64/youtube-clone/tree/main"
            target="_blank"
            className="flex font-poppins text-[16px] font-semibold text-white mr-[40px] py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]"
          >
            Code
            <img src={github} alt="github" className="ml-1" />
          </a>
          <a
            href="https://codewilson64.github.io/youtube-clone/"
            target="_blank"
            className="flex font-poppins text-[16px] font-semibold text-white py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]"
          >
            Live Demo
            <img src={external_link} alt="external_link" className="ml-1" />
          </a>
        </div>

        <div className="absolute z-[0] w-[60%] h-[60%] md:right-10 right-40 bottom-30 blue__gradient"></div>
      </div>
    </div>
  </section>
);

export default Projects;
