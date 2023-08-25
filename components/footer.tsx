import React from "react";

const Footer = () => {
  return (
    <div className="h-36 lg:h-28 py-5 lg:px-16 px-4 flex flex-col-reverse items-center lg:flex-row lg:justify-between justify-between">
      <ul className="flex space-x-6 lg:justify-normal justify-center items-center">
        <li className="cursor-pointer hover:text-accent transition">
          About us
        </li>
        <li className="cursor-pointer hover:text-accent transition">Gallery</li>
        <li className="cursor-pointer hover:text-accent transition">Reviews</li>
        <li className="cursor-pointer hover:text-accent transition">Contact</li>
      </ul>

      <h1 className="flex flex-col lg:justify-normal items-center justify-center font-semibold text-xl lg:text-lg">
        <span className="text-gray-500 text-sm lg:mr-3 lg:mb-0 w mb-1 ">
          @2023 All Rights Reserved
        </span>
        <span>AaaStaircaseRailings</span>
      </h1>
    </div>
  );
};

export default Footer;
