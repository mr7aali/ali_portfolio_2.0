import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="mb-5">
      <small className="bg-[#222222] text-[#fff]  px-4 py-3 rounded-3xl ">
        {title}
      </small>
    </div>
  );
};

export default SectionTitle;
