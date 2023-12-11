import Project from "@/components/HomePage/Project";
import dynamic from "next/dynamic";
const AboutMe = dynamic(() => import("@/components/HomePage/AboutMe"));
const ContactWithMe = dynamic(() => import("@/components/HomePage/Contact"));
const Expertise = dynamic(() => import("@/components/HomePage/Expertise"));
const HeroSection = dynamic(() => import("@/components/HomePage/HeroSection"));
const Footer = dynamic(() => import("@/components/Sheared/Footer"));
const Header = dynamic(() => import("@/components/Sheared/Header"));

const HomePage = ({ isMobile }: { isMobile: any }) => {
  console.log(!!isMobile);

  return (
    <div>
      {/* <HeroSection />
      <Expertise />
      <AboutMe />
      <Project />
      <ContactWithMe /> */}
      {/* <Footer /> */}

      {/* <div className="mb-[100px]"></div> */}

      {!!isMobile ? (
        <h1 className="text-[200px]">Mobile</h1>
      ) : (
        <h1 className="text-[500px]">Desktop</h1>
      )}
    </div>
  );
};

export default HomePage;

export async function getInitialProps({ req }: { req: any }) {
  const userAgent = req.headers["user-agent"];
  const isMobile = userAgent.includes("Mobi");

  return {
    isMobile,
  };
}
