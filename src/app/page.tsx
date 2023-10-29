import AboutMe from "@/components/HomePage/AboutMe";
import ContactWithMe from "@/components/HomePage/Contact";
import Expertise from "@/components/HomePage/Expertise";
import HeroSection from "@/components/HomePage/HeroSection";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Sheared/Footer";
import Header from "@/components/Sheared/Header";

// import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      
      <Header />
      <HeroSection/>
      <Expertise/>
      <AboutMe/>
      <ContactWithMe/>
      <Footer/>

      {/* <div className="mb-[100px]"></div> */}

    </div>
  );
};

export default HomePage;
