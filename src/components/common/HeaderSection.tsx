import {title} from "process";
import React from "react";

interface headerProps {
  p1: string;
  p2: string;
  title: string;
  contain: string;
  width?: "true" | "false";
  titleWidth?: "true" | "false";
}

function HeaderSection(props: headerProps) {
  const {p1, p2, contain, title, width = "false", titleWidth = "false"} = props;

  return (
    <div className="relative">
      <span
        className="w-full lg:h-[160px] h-20 block absolute left-0 right-0 max-w-[1478px] mx-auto"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(11, 11, 43, 0) 0%, rgba(11, 11, 43, 0.06) 27%, rgba(11, 11, 43, 0.52) 100%)`,
        }}
      />
      <div className="container">
        <div className="md:pt-56 pt-[90px] md:pb-[200px] pb-52">
          <div className="drop-shadow-[0px_2px_4px_rgba(0,_0,_0,_0.50)] mb-11">
            <p className="md:text-lg text-md font-medium text-white">{p1}</p>
            <p className="md:text-lg text-md font-medium text-white">{p2}</p>
          </div>
          <div
            className={`max-w-[280px] ${
              titleWidth === "false" ? "md:max-w-3xl" : "max-w-lg"
            }`}
          >
            <div className="md:text-64px text-34px font-medium text-slate-900 bg-emerald-600 -tracking-[0.96px] inline py-1 px-2.5">
              {title}
            </div>
          </div>
          <div
            className={`md:text-5xl text-2xl font-medium text-white drop-shadow-lg mt-10 font-regulator-nova ${
              width === "false" ? "max-w-[720px]" : "max-w-[452px]"
            }`}
          >
            {contain}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
