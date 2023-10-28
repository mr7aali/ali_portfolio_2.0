/* eslint-disable react/no-unescaped-entities */
import {GrResume} from "react-icons/gr";
const HeroSection = () => {
  return (
    <div className="max-w-[1040px] mx-auto sm:mt-10 ">
      <div
        //   style={{ border: "1px solid red" }}
        className="flex flex-col-reverse sm:flex-row"
      >





        <div
        //   style={{ border: "1px solid black" }}
          className="px-5"
        >
          <h1 className="text-[30px] lg:text-[50px] font-extrabold font-sans">
            Discover my Amazing Art Space!...
          </h1>
          <p className="pt-5 text-[16px] lg:text-xl font-serif text-justify sm:text-left">
            Hi, I'm Sheikh Aali. A passionate full-stack Developer based in
            Dhaka, Bangladesh.📍 I specialize in creating user-friendly and
            dynamic web applications.
            <span className="inline sm:hidden">On this website, you'll find a collection of my web development projects, from e-commerce solutions to interactive web applications.</span>
            I'm excited to share my work with you, so feel free to explore my
            portfolio, and don't hesitate to reach out for potential
            collaborations or projects. Let's create something amazing together!
          </p>

          <div className="grid grid-cols-2 gap-2 mt-10">
            <a
            href="#CONTACT"
            
              style={{ border: "3px solid #111" }}
              className="no-underline p-2 w-full block hover:bg-slate-400 transition-all  delay-100  bg-slate-300  font-semibold rounded-md cursor-pointer uppercase text-center"
            >
              {/* hover:bg-stone-400 */}
              CONTACT
            </a>
            <a
            target="_blank"
            href="https://drive.google.com/file/d/1WBsVIWXOKahIR3xDql8yvpgeKAsdATeN/view?usp=drive_link"
              style={{ border: "3px solid #111" }}
              className="no-underline p-2 w-full text-[#000] block hover:bg-slate-400 rounded-md cursor-pointer font-semibold bg-slate-300 uppercase text-center"
            >
              See CV 
            </a>
          </div>
        </div>
        <div
        //   style={{ border: "1px solid red" }}
          className="p-3 lg:p-10 flex justify-center items-center"
        >
          <div className="hero-img h-[260px] w-[260px]  sm:w-[285px] sm:h-[285px] lg:w-[350px] lg:h-[350px]"></div>
        </div>




      </div>
    </div>
  );
};

export default HeroSection;
