import Link from "next/link";
import React from "react";

const navLink = [
  {
    name: "About Retain to Sustain",
    url: "/about",
  },
  {
    name: "Issues",
    url: "",
  },
  {
    name: "RTS Solutions",
    url: "/rts_solutions",
  },
  {
    name: "FAQ",
    url: "",
  },
  {
    name: "Contact",
    url: "",
  },
];

function Navbar() {
  return (
    <div className="container">
      <div className="flex justify-between items-center gap-5 absolute left-0 right-0 px-6">
        <Link href={"/"} className="mt-11 mb-16">
          <img src="/picture/Group.svg" alt="" />
        </Link>
        <div className="flex gap-11">
          {navLink.map((item, index) => (
            <div key={index}>
              <Link href={item.url}>
                <div className="text-lg font-medium text-white hover:text-emerald-600 duration-300">
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
