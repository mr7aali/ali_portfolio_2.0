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

const Header = () => {
  const NavItem = [
    { text: "about", path: "#ABOUT" },
    { text: "portfolio", path: "#PORTFOLIO" },
    { text: "contact", path: "#CONTACT" },
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
      <motion.div className="bg-[#111]">
        <div className="max-w-[1040px] mx-auto flex py-6 items-center">
          <Link
            href={"/"}
            className="text-[#fff] text-[25px] flex-1 mx-5 md:text-[40px] font-bold no-underline"
          >
            Aali
          </Link>

          <div onClick={() => setOpen(!open)} className="mr-3 md:hidden">
            <MenuOutlined className="text-[#fff] text-[25px] md:text-[30px] cursor-pointer hover:opacity-50 delay-150 transition-all" />
          </div>

          <div className="items-center hidden md:flex">
            <ul className="flex list-none">
              {NavItem.map((Item) => (
                <li key={Item.text} className="cursor-pointer">
                  <Link
                    href={Item.path}
                    className="py-4 no-underline uppercase px-2 xl:p-4 hover:opacity-50 text-[#fff] text-[15px] lg:text-[18px] transition ease-linear font-medium delay-150"
                  >
                    {Item.text}
                  </Link>
                </li>
              ))}

              <li className="cursor-pointer">
                <Link
                  href={"/dashboard"}
                  className="py-4 no-underline uppercase px-2 xl:p-4 hover:opacity-50 text-[#fff] text-[15px] lg:text-[18px] transition ease-linear font-medium delay-150"
                >
                  dashboard
                </Link>
              </li>
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
              <div className="top-0 flex flex-col items-center w-full md:hidden">
                <div className="flex flex-col items-center w-full list-none">
                  {NavItem.map((Item) => (
                    <Link
                      onClick={() => setOpen(!open)}
                      href={Item.path}
                      key={Item.text}
                      style={{ border: "1px solid #363636" }}
                      className="text-center uppercase cursor-pointer w-full bg-[#222222] border-solid border py-4 no-underline px-2 xl:p-4 hover:opacity-50 text-[#fff] text-[18px] transition ease-linear delay-75 font-thin"
                    >
                      {Item.text}
                    </Link>
                  ))}
                  <Link
                    onClick={() => setOpen(!open)}
                    href={"/dashboard"}
                    style={{ border: "1px solid #363636" }}
                    className="text-center uppercase cursor-pointer w-full bg-[#222222] border-solid border py-4 no-underline px-2 xl:p-4 hover:opacity-50 text-[#fff] text-[18px] transition ease-linear delay-75 font-thin"
                  >
                    dashboard
                  </Link>
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
