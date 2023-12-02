"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const ProjectCard = () => {
  return (
    <div>
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
            src="https://www.adhamdannaway.com/wp-content/uploads/2022/12/feature-ui-design-book.jpg"
            alt=""
            // srcset=""
          />
        </div>
        <div className="my-2 px-2">
          <h3 className="font-thin">My UI Design book</h3>
          <small className="font-thin text-sm">Book</small>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
