import styles, { layout } from "../style";
import { hoobank } from "../assets";
import { github, external_link, mycoffee, youtube_clone } from "../assets";

const Projects = () => (
  <section id="projects">
    <div>
      <h2 className={`${styles.heading2} text-center`}>Projects</h2>
    </div>
    {/* Project 1 */}
    <div className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={hoobank} alt="hoobank" className="rounded-lg object-contain z-[5]" />
      </div>

      <div className={`${layout.sectionInfo} text-center`}>
        <h2 className="font-poppins text-[25px] mx-auto font-semibold text-white z-[5]">Hoobank</h2>
        <p className={`${styles.paragraph} max-w-[400px] mx-auto mt-5 mb-5 z-[5]`}>Hoobank is a bank website that allows users to make transactions easy, reliable and secure.</p>
        <div className={`${styles.flexCenter} mx-auto mb-8`}>
          <h2 className="font-poppins text-[18px] font-semibold text-white mr-[20px] z-[5]">React</h2>
          <h2 className="font-poppins text-[18px] font-semibold text-white z-[5]">TailwindCSS</h2>
        </div>

        <div className={`${styles.flexCenter} mx-auto`}>
          <a href="https://github.com/codewilson64/hoobank" className="flex font-poppins text-[16px] font-semibold text-white mr-[40px] py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]">
            Code
            <img src={github} alt="github" className="ml-1" />
          </a>
          <a href="https://codewilson64.github.io/hoobank/" className="flex font-poppins text-[16px] font-semibold text-white py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]">
            Live Demo
            <img src={external_link} alt="external_link" className="ml-1" />
          </a>
        </div>

        <div className="absolute z-[0] w-[60%] h-[60%] md:right-10 right-40 bottom-30 blue__gradient"></div>
      </div>
    </div>
    {/* Project 2 */}
    <div className={layout.section}>
      <div className={`${layout.sectionInfo} text-center`}>
        <h2 className="font-poppins text-[25px] mx-auto font-semibold text-white z-[5]">Coffee Shop</h2>
        <p className={`${styles.paragraph} max-w-[400px] mx-auto mt-5 mb-5 z-[5]`}>A coffee shop website is an online platform that allows users to choose and buy their favourite coffee beans for personal or business use.</p>
        <div className={`${styles.flexCenter} mx-auto mb-8`}>
          <h2 className="font-poppins text-[18px] font-semibold text-white mr-[20px] z-[5]">HTML</h2>
          <h2 className="font-poppins text-[18px] font-semibold text-white mr-[20px] z-[5]">CSS</h2>
          <h2 className="font-poppins text-[18px] font-semibold text-white z-[5]">Javascript</h2>
        </div>

        <div className={`${styles.flexCenter} mx-auto`}>
          <a href="https://github.com/codewilson64/my-coffee" className="flex font-poppins text-[16px] font-semibold text-white mr-[40px] py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]">
            Code
            <img src={github} alt="github" className="ml-1" />
          </a>
          <a href="https://codewilson64.github.io/my-coffee/" className="flex font-poppins text-[16px] font-semibold text-white py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]">
            Live Demo
            <img src={external_link} alt="external_link" className="ml-1" />
          </a>
        </div>

        <div className="absolute z-[0] w-[60%] h-[60%] md:left-10 left-40 bottom-30 blue__gradient"></div>
      </div>
      <div className={layout.sectionImg}>
        <img src={mycoffee} alt="mycoffee" className="rounded-lg object-contain z-[5]" />
      </div>
    </div>
    {/* Project 3 */}
    <div className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={youtube_clone} alt="youtube clone" className="rounded-lg object-contain z-[5]" />
      </div>

      <div className={`${layout.sectionInfo} text-center`}>
        <h2 className="font-poppins text-[25px] mx-auto font-semibold text-white z-[5]">Youtube Clone</h2>
        <p className={`${styles.paragraph} max-w-[400px] mx-auto mt-5 mb-5 z-[5]`}>A Youtube clone website where user can search for any kind of videos they want to watch. </p>
        <div className={`${styles.flexCenter} mx-auto mb-8`}>
          <h2 className="font-poppins text-[18px] font-semibold text-white mr-[20px] z-[5]">React</h2>
          <h2 className="font-poppins text-[18px] font-semibold text-white z-[5]">Material UI</h2>
        </div>

        <div className={`${styles.flexCenter} mx-auto`}>
          <a
            href="https://github.com/codewilson64/youtube-clone/tree/main"
            className="flex font-poppins text-[16px] font-semibold text-white mr-[40px] py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]"
          >
            Code
            <img src={github} alt="github" className="ml-1" />
          </a>
          <a href="https://codewilson64.github.io/youtube-clone/" className="flex font-poppins text-[16px] font-semibold text-white py-3 px-5 bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 outline-none rounded-full z-[5]">
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
