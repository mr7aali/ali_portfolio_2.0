import { MobileOutlined } from "@ant-design/icons";
import {FaReact} from "react-icons/fa"
import {SiPostman} from "react-icons/si"
const Expertise = () => {
  const Items = [
    {
      title: "Software Development",
      description:
        "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
      Icon: MobileOutlined,
    },
    {
      title: "Frontend Dev React, NextJS",
      description:
        "Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
      Icon: FaReact,
    },
    {
      title: "Full-Stack Developer",
      description:
        "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
      Icon: SiPostman,
    },
  ];
  return (
    <div className="mt-14 max-w-[1220px] mx-auto">
      <h1 className="text-center text-[50px] font-bold font-serif">
        My Expertise
      </h1>
      <div
        style={{
          borderTop: "5px solid #111",
          borderBottom: "5px solid #111",
          borderLeft: "5px solid #111",
        //   border:'1px solid red'
        }}
        className=" grid grid-cols-3 my-5"
      >
        {Items.map((item, index) => (
          <div
            key={item.title}
            style={{
              borderRight: "5px solid #111",
            }}
            className="py-12 px-2"
          >
            <div  className="flex items-center">
              <span className="text-[50px] px-5 text">{<item.Icon className="" />}</span>
              <h3 className="text-[30px]">{item.title}</h3>
            </div>



            <div className="ml-2">
              <p className="font-bold opacity-50 py-2">{"<h3>"}</p>
              <div style={{borderLeft:'3px solid #111'}} className="ml-4">
              <span className="text-[20px] block p-4">{item.description}</span>
              </div>
              <p className="font-bold opacity-50 py-2">{"</h3>"}</p>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
