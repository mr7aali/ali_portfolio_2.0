import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const Footer = () => {
  const NavItem = [
    { text: "about", path: "#ABOUT" },
    { text: "book", path: "#" },
    { text: "portfolio", path: "#" },
    { text: "blog", path: "#" },
    { text: "contact", path: "#CONTACT" },
  ];
  const SocialIcon = [
    { Icon: LinkedinOutlined ,path:"https://www.linkedin.com/in/mr7aali/"},
    { Icon: FacebookOutlined ,path:"https://www.facebook.com/mr07aali/"},
    { Icon: InstagramOutlined ,path:"https://www.instagram.com/mr7aali/"},
    { Icon: GithubOutlined ,path:"https://github.com/mr7aali"},
  ];
  return (
   <div className="bg-[#111] mt-16">
     <div  className="max-w-[1280px]  mx-auto flex flex-col justify-center items-center pt-5 pb-16">
      <div className="my-5">
        <Image
          height={120}
          width={120}
          src="https://www.lokkeestudios.com/_astro/lokkeestudios.e8a720c3.svg"
          alt="Fox image in footer"
          
        />
      </div>
      {/* <div>
            <ul className="list-none flex">
              {NavItem.map((Item) => (
                <li key={Item.text} className=" cursor-pointer ">
                  <a href={Item.path}  className="py-4 no-underline px-2 xl:p-4 hover:opacity-50 text-[#000] text-[18px] transition ease-linear delay-150 font-thin">
                    {Item.text}
                  </a>
                </li>
              ))}
            </ul>
            </div> */}
      <div  className="grid  grid-cols-3 items-center w-full  ">
        <span className="text-[#fff]">© 2023 LOKKEE STUDIOS</span>
        <div className="mx-auto">
          {SocialIcon.map((Item, i) => (
            <a
              key={i}
              href={Item.path}
              target="_blank"
              className="text-[#fff] no-underline text-[30px] p-2 xl:p-3 cursor-pointer hover:opacity-50 delay-150 transition-all"
            >
              <Item.Icon />
            </a>
          ))}
        </div>
        <a  href="#ABOUT" className="text-right text-[#fff] no-underline uppercase">About</a>
      </div>
    </div>
   </div>
  );
};

export default Footer;
