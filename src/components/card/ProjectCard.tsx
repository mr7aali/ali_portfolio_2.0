"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const ProjectCard = ({
  title,
  subtitle,
  imageLink,
}: {
  title: string;
  subtitle: string;
  imageLink: string;
}) => {
  return (
    <a  href="https://star-tech.vercel.app/" target="_blank" className="no-underline text-black">
      <motion.div
        whileHover={{
          boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
        }}
        style={{ boxShadow: "0 1px 4px 0px rgba(0, 0, 0, 0.2)" }}
        className="max-w-[314px] bg-white cursor-pointer rounded-sm p-2"
      >
        <div className="">
          <Image
            width={314}
            height={184}
            className="w-full"
            src={imageLink}
            alt=""
            // srcset=""
          />
        </div>
        <div className="my-2 px-2">
          <h2 className="font-thin text-black">{title}</h2>
          <small className="font-thin text-sm text-black">{subtitle}</small>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
