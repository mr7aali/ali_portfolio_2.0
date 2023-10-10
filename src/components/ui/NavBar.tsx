// const NavBar = () => {
//   return (
//     <header  className="max-w-[1280px] py-2 mx-auto flex justify-between bg-[red]" style={{border:"1px solid red"}}>
//       <div className="text-2xl">
//         <span className="text-2xl">About</span>
//         <span>work</span>
//       </div>
//       <div>
//         <p>
//           Lokkee <span>Studios</span>
//         </p>
//       </div>
//       <div>
//         <button>Hit me up</button>
//       </div>
//     </header>
//   );
// };

// export default NavBar;

import React from "react";

const NavBar = () => {
  return (
    <header aria-label="Primary" className="w-full fixed top-0 z-40">
      <div className="border-b-0.5 py-2 transition-colors duration-500 border-transparent bg-transparent">
        <div className="2xl:w-4/5 max-w-7xl mx-auto w-11/12">
          <div className="grid grid-cols-3">
            <div className="flex items-center md:hidden">
              <button
                type="button"
                aria-expanded="false"
                aria-haspopup="menu"
                id="mobile-navigation-toggle"
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Menu</span>
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    data-toggle-bar-top="true"
                    transform-origin="0px 0px"
                  //  style={{transform: "translateY(0rem)", transform-origin: "0px 0px"}}
                  ></path>
                  <path
                    d="M3,12C3,11.589 3.339,11.25 3.75,11.25L20.25,11.25C20.661,11.25 21,11.589 21,12C21,12.411 20.661,12.75 20.25,12.75L3.75,12.75C3.339,12.75 3,12.411 3,12Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    data-toggle-bar-middle="true"
                    opacity="1"
                  ></path>
                  <path
                    d="M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    data-toggle-bar-bottom="true"
                    transform-origin="0px 0px"
                  //  style="transform: translateY(0rem); transform-origin: 0px 0px;"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              aria-label="Primary"
              className="gap-x-6 hidden items-center md:flex"
            >
              <a
                href="/#about"
                className="uppercase text-sm after:absolute after:bg-gradient-to-r after:bottom-0 after:from-transparent after:h-px after:inset-x-0 after:scale-x-0 after:to-transparent after:transition-transform after:via-neutrals-200 focus-visible:after:-scale-x-100 hover:after:-scale-x-100 p-1 relative text-neutrals-50"
              >
                About
              </a>
              <a
                href="/#work"
                className="uppercase text-sm after:absolute after:bg-gradient-to-r after:bottom-0 after:from-transparent after:h-px after:inset-x-0 after:scale-x-0 after:to-transparent after:transition-transform after:via-neutrals-200 focus-visible:after:-scale-x-100 hover:after:-scale-x-100 p-1 relative text-neutrals-50"
              >
                Work
              </a>
            </nav>
            <div className="flex items-center justify-center bg-red-400">
              <a href="/" title="Navigate home">
                <img
                  alt="LOKKEE STUDIOS"
                  className="h-3 md:h-4"
                  decoding="async"
                  height="52"
                  loading="lazy"
                  src="https://www.lokkeestudios.com/_astro/lokkeestudios-type.7b3aaa01.svg"
                  width="483"
                />
              </a>
            </div>
            <div className="flex items-center justify-end">
              <a
                href="/#contact"
                className="overflow-hidden relative active:[&amp;:not(:disabled)]:scale-[1.01] align-middle before:-left-3 before:-skew-x-[16deg] before:-z-10 before:absolute before:duration-500 before:h-full before:origin-left before:scale-x-0 before:top-0 before:transition-transform before:w-[calc(100%+1.5rem)] border disabled:opacity-70 duration-500 flex focus-visible:[&amp;:not(:disabled)]:before:scale-x-100 hover:[&amp;:not(:disabled)]:before:scale-x-100 isolate items-center justify-center rounded-sm select-none transition-all border-neutrals-50 before:bg-neutrals-50 focus-visible:text-neutrals-900 hover:[&amp;:not(:disabled)]:text-neutrals-900 md:px-4 md:py-2 md:text-base px-3 py-1.5 text-neutrals-50 text-sm"
              >
                Hit me up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
