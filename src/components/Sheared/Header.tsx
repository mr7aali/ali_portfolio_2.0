"use client";
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";


const Header = () => {
  const NavItem = ["about", "book", "portfolio", "blog", "contact"];
  const SocialIcon = [
    { Icon: LinkedinOutlined },
    { Icon: FacebookOutlined },
    { Icon: InstagramOutlined },
    { Icon: GithubOutlined },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#111]">
        <div className="max-w-[1040px] mx-auto flex py-6 items-center">
          <Link
            href={"/"}
            className="text-[#fff] text-[25px] flex-1 mx-5 md:text-[40px] font-bold no-underline"
          >
            Aali
          </Link>

          <div onClick={() => setOpen(!open)} className="md:hidden mr-3">
            <span className="text-[#fff]  text-[25px] md:text-[30px]  cursor-pointer hover:opacity-50 delay-150 transition-all">
              <MenuOutlined />
            </span>
          </div>

          <div className="hidden md:flex items-center">
            <ul className="list-none flex">
              {NavItem.map((Item) => (
                <motion.li key={Item} className=" cursor-pointer ">
                  <span className="py-4 px-2 xl:p-4 hover:opacity-50 text-[#fff] text-[18px] transition ease-linear delay-150 font-thin">
                    {Item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="ml-10">
              {SocialIcon.map((Item, i) => (
                <span
                  key={i}
                  className="text-[#fff] text-[30px] p-2 xl:p-3 cursor-pointer hover:opacity-50 delay-150 transition-all"
                >
                  <Item.Icon />
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* drop down menu */}
        {open && (
          <motion.div

            initial={{ height: 0, overflow: "visible" }}
            animate={{ height: "auto", overflow: "hidden" }}
            exit={{ height: 0, overflow: "visible" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >


            
            <div
              className={`flex flex-col items-center md:hidden  w-full top-0`}
            >
              <ul className="w-full list-none flex flex-col items-center">
                {NavItem.map((Item) => (
                  <li
                    key={Item}
                    className="text-center  cursor-pointer w-full py-3 bg-[#222222] border-solid border border-b-[#363636]"
                  >
                    <span className="py-4 px-2 xl:p-4 hover:opacity-50 text-[#fff] text-[25px] transition ease-linear delay-150 font-thin">
                      {Item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#222222] w-full justify-center flex py-3">
                {SocialIcon.map((Item, i) => (
                  <span
                    key={i}
                    className="text-[#fff] text-[30px] p-2 xl:p-3 cursor-pointer hover:opacity-50 delay-150 transition-all"
                  >
                    <Item.Icon />
                  </span>
                ))}
              </div>
            </div>




          </motion.div>
          // <DropDownMenu/>
        )}
      </div>
    </>
  );
};

export default Header;
