import {title} from "process";
import React from "react";

interface headerProps {
  p1: string;
  p2: string;
  div1: string;
  title: string;
}

function HeaderSection(props: headerProps) {
  const {p1, p2, div1, title} = props;

  return (
    <div className="container">
      <div className="md:pt-56 pt-[90px] md:pb-[279px] pb-52">
        <div className="drop-shadow-[0px_2px_4px_rgba(0,_0,_0,_0.50)] mb-11">
          <p className="md:text-lg text-md font-medium text-white">{p1}</p>
          <p className="md:text-lg text-md font-medium text-white">{p2}</p>
        </div>
        <div className="md:text-17xl text-9xl font-medium text-slate-900 bg-emerald-600 inline py-2 px-4 mb-7">
          {div1}
        </div>
        <div className="md:text-5xl text-2xl font-medium text-white drop-shadow-lg max-w-[739px]">
          {title}
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
