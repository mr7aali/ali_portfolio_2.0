"use client";
import { MobileOutlined } from "@ant-design/icons";
import { FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

// Animation variants for section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Animation variants for title
const titleVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.3,
      ease: "easeOut",
      type: "spring",
      stiffness: 80,
    },
  }),
  hover: {
    scale: 1.03,
    rotateX: 5,
    rotateY: 5,
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Animation variants for icons
const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.3,
    rotate: 10,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Animation variants for background shapes
const shapeVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 0.2,
    scale: 1,
    transition: {
      duration: 1,
      delay: i * 0.5,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  }),
};

const Expertise2 = () => {
  const Items = [
    {
      title: "Frontend Dev React, NextJS",
      description:
        "Experienced Frontend Developer proficient in React and Next.js. Skilled in creating high-performance web applications with modern UI/UX design.",
      Icon: FaReact,
    },
    {
      title: "Full-Stack Web Developer",
      description:
        "I'm skilled in Next.js and React for front-end, and PostgreSQL, MongoDB, for back-end development. Adept at building robust web applications and ensuring seamless user experiences.",
      Icon: SiPostman,
    },
    {
      title: "Problem Solving",
      description:
        "Experienced in both functional and OOP: C, C++, Python, Java, JavaScript, TypeScript.",
      Icon: MobileOutlined,
    },
  ];

  return (
    <motion.section
      className="relative px-4 py-16 mx-auto mt-16 overflow-hidden max-w-7xl sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      {/* Background Decorative Shapes */}
      <motion.div
        className="absolute w-40 h-40 rounded-full top-10 left-10 bg-indigo-500/20 blur-3xl"
        variants={shapeVariants}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute rounded-full bottom-10 right-20 w-60 h-60 bg-purple-500/20 blur-3xl"
        variants={shapeVariants}
        custom={1}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-80 h-80 bg-teal-500/20 blur-3xl"
        variants={shapeVariants}
        custom={2}
        initial="hidden"
        animate="visible"
      />

      <motion.h1
        className="mb-12 font-sans text-4xl font-extrabold text-center text-transparent sm:text-5xl bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        variants={titleVariants}
      >
        My Expertise
      </motion.h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {Items.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col p-6 border shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl backdrop-blur-sm bg-opacity-80 border-gray-700/30"
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            style={{ perspective: 1000 }}
          >
            {/* Icon and Title */}
            <div className="flex items-center mb-6">
              <motion.div
                className="mr-4 text-5xl text-transparent bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text"
                variants={iconVariants}
                whileHover="hover"
              >
                <item.Icon />
              </motion.div>
              <h2 className="font-sans text-xl font-semibold text-white sm:text-2xl">
                {item.title}
              </h2>
            </div>

            {/* Description with Code Style */}
            <div className="relative flex flex-col justify-center flex-grow min-h-[120px]">
              <motion.span
                className="absolute left-0 font-mono text-xs text-indigo-400 -top-2 opacity-60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {"<h3>"}
              </motion.span>
              <motion.p
                className="pl-4 my-4 font-mono text-sm leading-relaxed text-gray-200 border-l-4 border-indigo-400 sm:text-base"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {item.description}
              </motion.p>
              <motion.span
                className="absolute left-0 font-mono text-xs text-indigo-400 -bottom-2 opacity-60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {"</h3>"}
              </motion.span>
            </div>

            {/* Glowing Border Effect */}
            <motion.div
              className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-teal-500/20 group-hover:opacity-100"
              style={{ pointerEvents: "none" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative Divider */}
      <motion.div
        className="h-1 mt-12 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
};

export default Expertise2;
