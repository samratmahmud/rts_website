"use client";
import React, {useState} from "react";

export interface faqQuestion {
  question: string;
  answer: string;
}

function FaqProps(props: faqQuestion) {
  let {question, answer} = props;
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-emerald-600 md:py-8 pt-3.5 pb-5 md:pl-12 md:pr-10 px-5 flex md:flex-row flex-col md:items-center justify-between gap-4 rounded">
        <div className="md:text-2xl text-xl font-bold tracking-[0.3px] font-regulator-nova">
          {question}
        </div>
        <div
          onClick={toggle}
          className={`flex justify-end ${open ? "py-2 px-1" : ""}`}
        >
          <img
            src={`${open ? "/picture/+ (1).svg" : "/picture/+.svg"}`}
            alt=""
          />
        </div>
      </div>
      <div
        className={`${
          open
            ? "md:text-lg text-md text-slate-300/80 md:py-9 pt-4 pb-9 lg:pl-24 lg:pr-36 px-5 bg-slate-300/5"
            : ""
        }`}
      >
        {`${open ? `${answer}` : ""}`}
      </div>
    </div>
  );
}

export default FaqProps;
