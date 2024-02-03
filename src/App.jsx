import styles from "./style";
import { Navbar, Hero, About, Projects, Contact } from "./components";

const App = () => (
  <div className="w-full bg-primary overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  </div>
);

export default App;
