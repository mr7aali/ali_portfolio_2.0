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
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const NavItem = [
    { text: "about", path: "ABOUT" },
    // { text: "book", path: "#" },
    { text: "portfolio", path: "PORTFOLIO" },
    { text: "dashboard", path: "#" },
    { text: "contact", path: "CONTACT" },
  ];
  const SocialIcon = [
    { Icon: LinkedinOutlined, path: "https://www.linkedin.com/in/mr7aali/" },
    { Icon: FacebookOutlined, path: "https://www.facebook.com/mr07aali/" },
    { Icon: InstagramOutlined, path: "https://www.instagram.com/mr7aali/" },
    { Icon: GithubOutlined, path: "https://github.com/mr7aali" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div

        initial={{ y: "-100%", opacity:.4 }}
        animate={{ y: "0",opacity:1 }}
        transition={{
          duration: 0.5,
        }}

        className="bg-[#111]"
      >
        <div className="max-w-[1040px] mx-auto flex py-6 items-center">
          <Link
            href={"/"}
            className="text-[#fff] text-[25px] flex-1 mx-5 md:text-[40px] font-bold no-underline"
          >
            Aali
          </Link>

          <div onClick={() => setOpen(!open)} className="md:hidden mr-3">
            <MenuOutlined className="text-[#fff]  text-[25px] md:text-[30px]  cursor-pointer hover:opacity-50 delay-150 transition-all" />
          </div>

          <div className="hidden md:flex items-center">
            <ul className="list-none flex">
              {NavItem.map((Item) => (
                <li key={Item.text} className=" cursor-pointer ">
                  <ScrollLink
                    to={Item.path}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    href={Item.path}
                    className="py-4 no-underline uppercase px-2 xl:p-4 hover:opacity-50 text-[#fff] text-[15px] lg:text-[18px] transition ease-linear font-medium delay-150 "
                  >
                    {Item.text}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            <div className="lg:ml-10">
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
          </div>
        </div>
        {/* drop down menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, overflow: "visible" }}
              animate={{ height: "auto", overflow: "hidden" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`flex flex-col items-center md:hidden  w-full top-0`}
              >
                <div className="w-full list-none flex flex-col items-center">
                  {NavItem.map((Item) => (
                    <ScrollLink
                      onClick={() => setOpen(!open)}
                      to={Item.path}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      key={Item.text}
                      style={{ border: "1px solid #363636" }}
                      className="text-center uppercase cursor-pointer w-full  bg-[#222222] bord er-solid bo rder  py-4 no-underline px-2 xl:p-4 hover:opacity-50 text-[#fff] text-[18px] transition ease-linear delay-75 font-thin"
                    >
                      {Item.text}
                    </ScrollLink>
                  ))}
                </div>
                <div className="bg-[#222222] w-full justify-center flex py-3">
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Header;
