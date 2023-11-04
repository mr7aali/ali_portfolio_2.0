"use client";

import { BiSolidCommentError } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <div className="flex h-[60vh] justify-center items-center">
      <span className="text-[180px] sm:text-[200px] md:text-[250px] lg:text-[350px] xl:text-[400px] text-red-400 h-full block mt-36 xl:mt-56">
        <BiSolidCommentError />
      </span>
    </div>
  );
};

export default ErrorPage;
