import Expertise from "@/components/HomePage/Expertise";
import HeroSection from "@/components/HomePage/HeroSection";
import NavBar from "@/components/NavBar";
import Header from "@/components/Sheared/Header";

// import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <Header />
      <HeroSection/>
      <Expertise/>
    </div>
  );
};

export default HomePage;
