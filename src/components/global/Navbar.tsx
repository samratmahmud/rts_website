"use client";
import Link from "next/link";
import {features} from "process";
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
    url: "/",
  },
  {
    name: "RTS Solutions",
    url: [
      {
        names: "Solutions One",
        urls: "/rts_solutions",
      },
      {
        names: "Solutions Two",
        urls: "/solutions_two",
      },
      {
        names: "Solutions Three",
        urls: "/solutions_three",
      },
      {
        names: "Solutions Four",
        urls: "/solutions_four",
      },
      {
        names: "Solutions Five",
        urls: "/solutions_five",
      },
    ],
  },
  {
    name: "FAQ",
    url: "/",
  },
  {
    name: "Contact",
    url: "/",
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
            <img
              className="h-[26px] md:h-full"
              src="/picture/Group.svg"
              alt=""
            />
          </Link>
          <div className="hidden lg:block">
            <div className="flex gap-11">
              {navLink.map((item, index) => (
                <div key={index} className="relative group">
                  <Link href={Array.isArray(item.url) ? "" : item.url}>
                    <div className="text-lg font-medium text-white hover:text-emerald-600 duration-300">
                      {item.name}
                    </div>
                  </Link>
                  <div className="absolute hidden group-hover:block pt-2 right-[50%] translate-x-1/2">
                    {Array.isArray(item.url) &&
                      item.url.map((feature, index) => (
                        <div
                          key={index}
                          className="py-2.5 px-5 hover:bg-slate-800 first:rounded-t-lg last:rounded-b-lg bg-slate-900"
                        >
                          <Link href={feature.urls}>
                            <div className="text-xl font-medium text-white hover:text-emerald-600 duration-300 whitespace-nowrap">
                              {feature.names}
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
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
                    className="bg-emerald-600 hover:bg-green-600 rounded-lg w-5/6 m-auto relative group z-[1280]"
                  >
                    <Link href={Array.isArray(item.url) ? "" : item.url}>
                      <div className="text-lg font-semibold text-white duration-300 py-3">
                        {item.name}
                      </div>
                    </Link>
                    <div className="absolute hidden group-hover:block pt-2 right-[50%] translate-x-1/2 z-[1120]">
                      {Array.isArray(item.url) &&
                        item.url.map((feature, index) => (
                          <div
                            key={index}
                            className="py-2.5 px-5 hover:bg-slate-800 first:rounded-t-lg last:rounded-b-lg bg-slate-900"
                          >
                            <Link href={feature.urls}>
                              <div className="text-xl font-medium text-white hover:text-emerald-600 duration-300 whitespace-nowrap">
                                {feature.names}
                              </div>
                            </Link>
                          </div>
                        ))}
                    </div>
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
