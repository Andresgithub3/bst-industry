import React from "react";

const Tag = ({ text }) => {
  return (
    <span className="inline-block bg-red-600 text-sm font-semibold text-white mr-2 mb-2 px-6 py-0.5 ">
      {text}
    </span>
  );
};

export default Tag;
