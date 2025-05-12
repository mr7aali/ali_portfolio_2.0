"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

// Animation variants for smooth transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 3,
    boxShadow:
      "0 8px 32px rgba(79, 70, 229, 0.3), 0 0 20px rgba(79, 70, 229, 0.2)",
    transition: { duration: 0.3 },
  },
};

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 sm:py-20">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Profile Picture */}
          <motion.div
            className="flex justify-center mb-8"
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.div
              className="w-64 h-64 bg-center bg-cover border-4 border-white rounded-lg"
              variants={imageVariants}
              style={{
                backgroundImage:
                  "url('https://i.ibb.co/j3fDZYd/IMG-20231018-160911.jpg')",
                boxShadow:
                  "0 4px 16px rgba(0, 0, 0, 0.2), 0 0 20px rgba(79, 70, 229, 0.2)",
                border: "1px solid red",
              }}
            ></motion.div>
          </motion.div>

          {/* Greeting and Name */}
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            variants={textVariants}
          >
            Hey, I'm <span className="text-indigo-600">Sheikh Aali</span>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            className="mt-4 text-2xl font-light text-gray-700 sm:text-3xl lg:text-4xl"
            variants={textVariants}
          >
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Web Artisan",
                "Code Enthusiast",
                "Problem Solver",
                "Tech Innovator",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              cursorColor="#4F46E5"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl"
            variants={textVariants}
          >
            Based in Dhaka, Bangladesh 📍, I'm a passionate developer crafting
            seamless, dynamic web experiences. From sleek e-commerce platforms
            to interactive applications, I turn ideas into reality. Dive into my
            portfolio and let’s create something extraordinary together!
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col justify-center gap-4 mt-10 sm:flex-row"
            variants={textVariants}
          >
            <Link
              href="#CONTACT"
              className="inline-block px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg"
            >
              Connect with Me
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1WBsVIWXOKahIR3xDql8yvpgeKAsdATeN/view?usp=drive_link"
              className="inline-block px-6 py-3 font-semibold text-indigo-600 transition-all duration-300 transform bg-white border border-indigo-200 rounded-lg shadow-md hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg"
            >
              Explore My CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-40 h-40 rounded-full top-10 left-10 bg-indigo-200/30 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-20 right-20 w-60 h-60 bg-purple-200/30 blur-3xl animate-pulse"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-80 h-80 bg-blue-100/20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
