import {title} from "process";
import React from "react";

interface headerProps {
  p1: string;
  p2: string;
  div1: string;
  div2: string;
  div3?: string;
  title: string;
}

function HeaderSection(props: headerProps) {
  const {p1, p2, div1, div2, div3, title} = props;
  return (
    <div className="container">
      <div className="pt-[225px] pb-[279px]">
        <div className="drop-shadow-[0px_2px_4px_rgba(0,_0,_0,_0.50)] mb-11">
          <p className=" text-lg font-medium text-white">{p1}</p>
          <p className=" text-lg font-medium text-white">{p2}</p>
        </div>
        <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
          {div1}
        </div>
        <br />
        <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 mb-6">
          {div2}
        </div>
        <div className="text-5xl font-medium text-white drop-shadow-lg max-w-[739px]">
          {title}
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
