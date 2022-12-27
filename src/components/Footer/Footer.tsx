import React from "react";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center p-10">
      <h1 className="text-dark_gray_cyan">
        Challenge by{" "}
        <span className="text-primary_dark_cyan underline">
          Frontend Mentor
        </span>
      </h1>
      <h2 className="text-dark_gray_cyan">
        Coded by{" "}
        <span className="text-primary_dark_cyan underline">
          Murad Rahmanzada
        </span>
      </h2>
    </div>
  );
};

export default Footer;
