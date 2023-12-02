"use client";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import ProjectCard from "../card/ProjectCard";
const Project = () => {
  return (
    <section id="PORTFOLIO" className="bg-[#fafafa]">
      <div className="max-w-[1040px] mx-auto px-5 py-5 ">
        {/* <SectionTitle title="My Work " /> */}

        <div style={{ borderTop: "2px solid #dddddd" }} className="mt-5 ">
          <div className=" flex justify-center">
            <p className="  bg-[#fafafa] text-black  px-5  mt-[-9px] ">
              SOME OF MY LATEST WORK
            </p>
          </div>

          <div className="flex flex-wrap gap-5 my-11 justify-center">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
