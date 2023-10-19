"use client";
import Link from "next/link";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const navLink = [
  {
    name: "About Retain to Sustain",
    url: "/about",
  },
  {
    name: "Issues",
    url: "/solutions_two",
  },
  {
    name: "RTS Solutions",
    url: "/rts_solutions",
  },
  {
    name: "FAQ",
    url: "/solutions_three",
  },
  {
    name: "Contact",
    url: "/solutions_four",
  },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="container ">
      <div className="relative z-[1020]">
        <div className="flex justify-between absolute lg:z-[1020] top-0 items-center gap-5 left-0 right-0 lg:px-6">
          <Link href={"/"} className="lg:mt-11 mt-6 lg:mb-16 mb-8">
            <img className="h-[26px]" src="/picture/Group.svg" alt="" />
          </Link>
          <div className="hidden lg:block">
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
          <div onClick={toggle} className="lg:hidden w-8 h-4 cursor-pointer">
            <img className="w-full" src="/picture/Group 254 (1).svg" alt="" />
          </div>
        </div>
      </div>
      <div className="lg:hidden relative z-[1080]">
        <Drawer
          style={{width: "290px"}}
          open={open}
          onClose={toggle}
          direction="left"
        >
          <div className="p-5 flex flex-col justify-between h-full bg-slate-200">
            <div className="flex flex-col justify-between gap-10">
              <Link href={"/"} className="w-3/4 m-auto">
                <img src="/picture/Group.svg" alt="" />
              </Link>
              <div className="flex flex-col gap-3 text-center">
                {navLink.map((item, index) => (
                  <div
                    key={index}
                    className="bg-emerald-600 hover:bg-green-600 rounded-2xl w-5/6 m-auto"
                  >
                    <Link href={item.url}>
                      <div className="text-lg font-semibold text-white duration-300 py-3">
                        {item.name}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Link href={"/"} className="text-xs font-medium text-slate-900">
              Copyright © 2023 RTS. All Rights Reserved.
            </Link>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
