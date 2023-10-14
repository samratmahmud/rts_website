import React from "react";

interface flexProps {
  pic: string;
  name?: string;
  title: string;
  p1?: string;
}

function FlexComponents(props: flexProps) {
  const {pic, name, title, p1} = props;
  return (
    <div className="flex flex-row gap-10 items-center">
      <div>
        <img src={pic} alt="" />
      </div>
      <div>
        <div className="text-12xl font-bold text-slate-900 mb-6">{name}</div>
        <div className="text-lg text-slate-900 max-w-[604px]">
          {title} <p className="pt-4">{p1}</p>
        </div>
      </div>
    </div>
  );
}

export default FlexComponents;
