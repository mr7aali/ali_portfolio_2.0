/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  return (
    <div className="max-w-[1040px] mx-auto mt-10">
      <div 
    //   style={{ border: "1px solid red" }}
       className="flex ">
        <div 
        // style={{ border: "1px solid black" }}
         className="px-5">
          <h1 className="text-[50px] font-extrabold font-sans">
            Discover my Amazing Art Space!...
          </h1>
          <p className="pt-5 text-xl font-serif">
            Hi, I'm Sheikh Aali. A passionate full-stack Developer based in
            Dhaka, Bangladesh.📍 I specialize in creating user-friendly and
            dynamic web applications.
            {/* On this website, you'll find a collection of my web development projects, from e-commerce solutions to interactive web applications. */}
            I'm excited to share my work with you, so feel free to explore my
            portfolio, and don't hesitate to reach out for potential
            collaborations or projects. Let's create something amazing together!
          </p>

          <div  className="grid grid-cols-2 gap-2 mt-10">
            <span
              style={{ border: "3px solid #111" }}
              className="no-underline p-2 w-full block  rounded-md cursor-pointer uppercase text-center"
            >
              See Service
            </span>
            <span
              style={{ border: "3px solid #111" }}
              className="no-underline p-2 w-full block  rounded-md cursor-pointer uppercase text-center"
            >
              See Service
            </span>
          </div>

        </div>
        <div className="p-10">
          <div className="hero-img"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
