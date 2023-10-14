import React from "react";

interface cardProps {
  pic: string;
  number: string;
  title: string;
}

function Cards(props: cardProps) {
  const {pic, number, title} = props;
  return (
    <div>
      <div className="max-w-[563px]">
        <div className="bg-emerald-600 pb-2.5">
          <img className="max-h-[320px] w-full" src={pic} alt="" />
        </div>
        <div className="bg-slate-900 py-12 px-14">
          <div className="text-4xl font-bold text-emerald-600 mb-6">
            {number}
          </div>
          <div className="text-4xl text-white">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
