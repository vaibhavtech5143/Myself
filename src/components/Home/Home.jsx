import { motion, animate } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import { useRef } from "react";
import profile from "../../assets/profile.png";

const Home = () => {
  const clientCount = useRef(null);
  const animationClientsCount = () => {
    animate(0, 6, {
      duration: 1,
      onUpdate: (v) => {
        clientCount.current.innerText = v.toFixed();
      },
    });
  };

  const projectCount = useRef(null);
  const animationProjectsCount = () => {
    animate(0, 24, {
      duration: 1,
      onUpdate: (v) => {
        projectCount.current.innerText = v.toFixed();
      },
    });
  };

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I'm
            <br /> Vaibhav Singh
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "Web-Developer",
                "Penetration-Tester",
                "CyberSecurity Enthusiast",
                "An Active-Learner",
                "Freelancer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: -100,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:vaibhavsingh2633@gmail.com">HireMe </a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <section>
        <img src={profile} alt="Vaibhav" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
