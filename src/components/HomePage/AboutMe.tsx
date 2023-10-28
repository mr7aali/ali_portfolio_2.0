/* eslint-disable react/no-unescaped-entities */
const AboutMe = () => {
    const skills =["Html5","Css","Sass","Responsive Design","Tailwind CSS","Bootstrap","Material-UI","Ant Design","JavaScript","TypeScript","Python","C++","C","React","NextJs","GitHub",,"NodeJs","Express","Prisma","SQL","PostgreSQL","Firebase","MongoDB",]
  return (
    <div className="max-w-[1220px] mx-auto">
      <div>
        {" "}
        {/* Header */}
        <h1 className="text-center text-[50px] font-bold font-serif mt-10">
          About Me
        </h1>
        <p className="pt-5 text-[12px] lg:text-xl font-serif text-center opacity-70">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms <br /> of programming and technology
        </p>
      </div>

      <div  className="grid grid-cols-2 mt-24">{/* hero  */}

        
        <div  className="px-5">

          <h3 className="mb-10 text-[40px] font-serif">Get to know me!</h3>
          <p className="text-[18px] font-serif text-[#666] mb-6 leading-relaxed">
          I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
          </p>
          <p className="text-[18px] font-serif text-[#666] mb-6 leading-relaxed">
          I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/mr7aali/" target="_blank" className="font-bold text-[#7843e9]">Linkedin</a> where I post useful content related to Web Development and Programming
          </p>
          <p className="text-[18px] font-serif text-[#666] mb-6 leading-relaxed">
          I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
          </p>
        </div>
        <div  className="px-5">
        <h3 className="mb-10 text-[40px] font-serif">My Skills!</h3>
        
            <div className="flex flex-wrap">{/* skills */}
                {
                    skills.map((item,i)=>(
                        <span key={i} className="bg-[rgba(153,153,153,.2)] px-5 py-3 m-1 rounded-lg font-bold opacity-50 cursor-pointer">{item}</span>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
