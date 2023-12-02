/* eslint-disable react/no-unescaped-entities */
"use client";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { inflate } from "zlib";
const HeroSection = () => {
  return (
    <div className="max-w-[1040px] mx-auto sm:mt-10 ">
      <div className="flex flex-col-reverse sm:flex-row">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className="pl-5"
        >
          <h1 className="text-[30px] lg:text-[50px] font-extrabold font-sans">
            {/* Discover my Amazing Art Space!... */}
            Hello, I am
            <p style={{ fontWeight: "bold" }} className="text-[40px] lg:text-[57px] font-thin">
             
              <Typewriter
                words={[
                  "Web Developer",
                  "Student..!",
                  "Full-Stack Developer",
                  "Front-end Developer",
                  "Backend Developer",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />

            </p>
          </h1>
          <p className="pt-5 text-[16px] lg:text-xl font-serif text-justify sm:text-left">
            Hi, I'm Sheikh Aali. A passionate full-stack Developer based in
            Dhaka, Bangladesh.📍 I specialize in creating user-friendly and
            dynamic web applications.
            <span className="inline sm:hidden">
              On this website, you'll find a collection of my web development
              projects, from e-commerce solutions to interactive web
              applications.
            </span>
            I'm excited to share my work with you, so feel free to explore my
            portfolio, and don't hesitate to reach out for potential
            collaborations or projects. Let's create something amazing together!
          </p>

          <div className="grid grid-cols-2 gap-2 mt-10">
            <ScrollLink
              to="CONTACT"
              smooth={true}
              duration={500}
              offset={-100}
              href="#CONTACT"
              style={{ border: "3px solid #111" }}
              className="no-underline p-2 w-full text-[#000] block hover:bg-slate-400 transition-all  delay-100  bg-slate-300  font-semibold rounded-md cursor-pointer uppercase text-center"
            >
              CONTACT
            </ScrollLink>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1WBsVIWXOKahIR3xDql8yvpgeKAsdATeN/view?usp=drive_link"
              style={{ border: "3px solid #111" }}
              className="no-underline p-2 w-full text-[#000] block hover:bg-slate-400 rounded-md cursor-pointer font-semibold bg-slate-300 uppercase text-center"
            >
              See CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className="p-3 lg:p-10 flex justify-center items-center"
        >
          <div className="hero-img h-[260px] w-[260px]  sm:w-[285px] sm:h-[285px] lg:w-[350px] lg:h-[350px]"></div>
        </motion.div>
      </div>
    </div>
  );
};
export default HeroSection;
