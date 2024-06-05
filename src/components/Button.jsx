import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Get Started"}) => {
  return (
   
      <div className=" max-w-36 px-3 py-2 bg-white text-black rounded-full gap-3 flex justify-between items-center">
        <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
      </div>
    
  );
};

export default Button;
