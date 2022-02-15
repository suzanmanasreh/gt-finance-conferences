import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/gt_logo_transparent.png";

const Navbar = () => {
  return (
    <div className="bg-yellow-20 flex justify-between">
      <div className="pl-8">
        <Link href="https://www.scheller.gatech.edu/index.html" passHref>
          <a>
            <Image src={logo} alt="georgia tech" width={80} height={80}></Image>
          </a>
        </Link>
      </div>
      <div className="p-7 flex">
        <Link href="/" passHref>
          <a className="text-black-950 font-semibold text-xl sm:text-xl">
            Financial Conferences
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="text-black-950 font-semibold text-xl sm:text-xl pl-6">
            Add Conference
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
