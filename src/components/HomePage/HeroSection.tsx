"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

// Animation variants for smooth transitions
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 sm:py-20">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="w-full text-center lg:w-1/2 lg:text-left"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-blue-600">Sheikh Aali</span>
              <div className="mt-2 text-3xl font-light text-gray-700 sm:text-4xl lg:text-5xl">
                <Typewriter
                  words={[
                    "Web Developer",
                    "Full-Stack Developer",
                    "Front-end Developer",
                    "Backend Developer",
                    "Tech Enthusiast",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl lg:mx-0">
              A passionate Full-Stack Developer based in Dhaka, Bangladesh 📍. I
              craft user-friendly, dynamic web applications and love turning
              ideas into reality. Explore my portfolio to see my projects, from
              e-commerce platforms to interactive web apps, and let’s build
              something extraordinary together!
            </p>
            <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row lg:justify-start">
              <Link
                href="#CONTACT"
                className="inline-block px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:-translate-y-1"
              >
                Get in Touch
              </Link>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1WBsVIWXOKahIR3xDql8yvpgeKAsdATeN/view?usp=drive_link"
                className="inline-block px-6 py-3 font-semibold text-gray-900 transition-all duration-300 transform bg-gray-100 border border-gray-300 rounded-lg shadow-md hover:bg-gray-200 hover:-translate-y-1"
              >
                View CV
              </a>
            </div>
          </motion.div>

          {/* Image/Avatar */}
          <motion.div
            className="flex justify-center w-full lg:w-1/2 lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div
              className="w-64 h-64 bg-center bg-cover rounded-full shadow-xl hero-img sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co/j3fDZYd/IMG-20231018-160911.jpg')", // Replace with actual image path
              }}
            ></div>
          </motion.div>
        </div>
      </div>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 rounded-full h-1/2 bg-blue-300/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
