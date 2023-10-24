import {title} from "process";
import React from "react";

interface headerProps {
  p1: string;
  p2: string;
  div1: string;
  title: string;
  width?: "true" | "false";
}

function HeaderSection(props: headerProps) {
  const {p1, p2, div1, title, width = "false"} = props;

  return (
    <div className="relative">
      <span
        className="w-full lg:h-[160px] h-20 block absolute left-0 right-0 max-w-[1478px] mx-auto"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(11, 11, 43, 0) 0%, rgba(11, 11, 43, 0.06) 27%, rgba(11, 11, 43, 0.52) 100%)`,
        }}
      />
      <div className="container">
        <div className="md:pt-56 pt-[90px] md:pb-[279px] pb-52">
          <div className="drop-shadow-[0px_2px_4px_rgba(0,_0,_0,_0.50)] mb-11">
            <p className="md:text-lg text-md font-medium text-white">{p1}</p>
            <p className="md:text-lg text-md font-medium text-white">{p2}</p>
          </div>
          <div className="md:max-w-[758px] max-w-[280px]">
            <div className="md:text-64px text-34px font-medium text-slate-900 bg-emerald-600 inline py-1 px-2.5">
              {div1}
            </div>
          </div>
          <div
            className={`md:text-5xl text-2xl font-medium text-white drop-shadow-lg mt-10 ${
              width === "false" ? "max-w-[720px]" : "max-w-[452px]"
            }`}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
