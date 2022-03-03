import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

import React, { useState, useRef, useEffect } from "react";

const Button = ({ text }) => {
  return (
    <button className="flex bg-white-30 hover:bg-slate-200 py-2 px-2 rounded">
      <div className="text-white font-medium px-2">{text}</div>
      <div className="p-1 pl-3 pr-1">
        <FaChevronDown />
      </div>
    </button>
  );
};

export default Button;
