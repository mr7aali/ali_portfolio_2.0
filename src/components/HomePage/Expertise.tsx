"use client";
import { MobileOutlined } from "@ant-design/icons";
import { FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const Expertise = () => {
  const Items = [
    {
      title: "Frontend Dev React, NextJS",
      description:
        // "Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
        "Experienced Frontend Developer proficient in React and Next.js. Skilled in creating high-performance web applications with modern UI/UX design.",
      Icon: FaReact,
    },
    {
      title: "Full-Stack Web Developer",
      description:
        "I'm skilled in Next.js and React for front-end, and PostgreSQL, MongoDB, for back-end development. Adept at building robust web applications and ensuring seamless user experiences.",
      // "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
      Icon: SiPostman,
    },
    {
      title: "Problem Solving.",
      description:
        "Experienced in both functional and OOP: C,C++, Python, Java, JavaScript, TypeScript.",
      Icon: MobileOutlined,
    },
  ];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "-100%", opacity: 1 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="mt-14 max-w-[1220px] mx-auto"
      >
        <h1 className="text-center text-[50px] font-bold font-serif mb-16">
          My Expertise
        </h1>
        <div
          style={{
            borderTop: "5px solid #111",
            borderBottom: "5px solid #111",
            borderLeft: "5px solid #111",
            //   border:'1px solid red'
          }}
          className=" grid grid-cols-1 md:grid-cols-3 my-5 mx-2"
        >
          {Items.map((item, index) => (
            <div
              key={index}
              style={{
                borderRight: "5px solid #111",
                // border:'1px solid red'
              }}
              className="py-3 lg:py-8 px-2"
            >
              <div className="flex items-center">
                <span className="text-[50px] px-2 lg:px-5 text">
                  {<item.Icon className="" />}
                </span>
                <h3 className="text-[25px] lg:text-[30px]">{item.title}</h3>
              </div>

              <div className="ml-2">
                <p className="font-bold opacity-50 py-2 font-serif">{"<h3>"}</p>
                <div style={{ borderLeft: "3px solid #111" }} className="ml-4">
                  <span className=" lg:text-[17px] block p-4 font-mono font-extrabold">
                    {item.description}
                  </span>
                </div>
                <p className="font-bold opacity-50 py-2 font-serif">
                  {"</h3>"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Expertise;
