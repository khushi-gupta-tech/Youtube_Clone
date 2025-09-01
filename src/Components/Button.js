import React from "react";
import { useSelector } from "react-redux";

const Button = ({name}) => {
 
    const dark = useSelector((store) => store.dark.dark);
  return (
    <div className={dark?'dark':''}>
    <div>
      <button className="px-3 py-1 m-2 bg-gray-100 rounded-lg text-black dark:bg-gray-800 dark:text-white">{name}</button>
    </div>
    </div>
  );
};

export default Button;
