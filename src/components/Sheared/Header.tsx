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

// Animation variants for header
const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animation variants for nav items
const navItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.1, ease: "easeOut" },
  }),
};

// Animation variants for mobile menu
const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// Animation variants for social icons in mobile menu
const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.15, ease: "easeOut" },
  }),
};

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
    <motion.header
      className="fixed top-0 z-50 w-full shadow-lg bg-gradient-to-r from-gray-900 to-gray-800"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="flex items-center px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex-1 text-2xl font-extrabold tracking-tight text-white no-underline sm:text-3xl"
        >
          <motion.span
            whileHover={{ scale: 1.05, color: "#60A5FA" }}
            transition={{ duration: 0.2 }}
          >
            Aali
          </motion.span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl text-white cursor-pointer md:hidden"
        >
          <motion.div whileTap={{ scale: 0.9 }}>
            <MenuOutlined className="transition-colors duration-200 hover:text-blue-400" />
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden space-x-6 md:flex">
          <ul className="flex space-x-4 list-none">
            {NavItem.map((item, index) => (
              <motion.li
                key={item.text}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                className="relative"
              >
                <Link
                  href={item.path}
                  className="relative px-3 py-2 text-sm font-medium text-white no-underline uppercase lg:text-base group"
                >
                  {item.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
            <motion.li
              custom={NavItem.length}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="relative"
            >
              <Link
                href="/dashboard"
                className="relative px-3 py-2 text-sm font-medium text-white no-underline uppercase lg:text-base group"
              >
                dashboard
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          </ul>

          {/* Social Icons */}
          <div className="flex ml-6 space-x-2">
            {SocialIcon.map((item, index) => (
              <motion.a
                key={index}
                href={item.path}
                target="_blank"
                className="p-2 text-xl text-white lg:text-2xl"
                whileHover={{ scale: 1.2, color: "#60A5FA" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <item.Icon />
              </motion.a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full bg-gray-800 md:hidden"
          >
            <div className="flex flex-col items-center pt-3">
              {NavItem.map((item, index) => (
                <motion.div
                  key={item.text}
                  custom={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  // style={{ borderBottom: "1px solid #fff" }}
                  className="w-full text-center"
                >
                  <Link
                    style={{ borderBottom: "1px solid #fff" }}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="block w-full py-3 text-lg font-medium text-center text-white no-underline uppercase transition-colors duration-200 border-b border-gray-600 hover:bg-gray-700"
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={NavItem.length}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: NavItem.length * 0.1 }}
                className="w-full text-center"
              >
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  style={{ borderBottom: "1px solid #fff" }}
                  className="block w-full py-3 text-lg font-medium text-center text-white no-underline uppercase transition-colors duration-200 border-b border-gray-600 hover:bg-gray-700"
                >
                  dashboard
                </Link>
              </motion.div>
              <div className="flex justify-center py-4 space-x-4">
                {SocialIcon.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.path}
                    target="_blank"
                    className="p-2 text-2xl text-white"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={socialIconVariants}
                    whileHover={{ scale: 1.2, color: "#60A5FA" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
