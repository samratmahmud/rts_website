import React from "react";

const cards4 = [
  {
    pic: "/picture/Group 254 (1).png",
    num: "#1",
    name: "The cost and expense of chemical recycling can be risky.",
    title:
      "Textile recycling with different materials is a challenging task—especially when it comes to mechanical recycling processes. However, chemical recycling can also be costly and cause environmental pollution.",
  },
];

function CardsFour() {
  return (
    <div>
      <div className="bg-[rgba(11,_11,_43,_0.05)]">
        <div className="-mt-40">
          <img src="/picture/Vector (4).svg" alt="" />
        </div>
        <div className="container">
          <div className="flex gap-7 items-center pb-20 -mt-14">
            <div>
              <img src="/picture/Group 73.png" alt="" />
            </div>
            <div className="text-5xl font-medium text-slate-900 max-w-[540px]">
              When products with different materials are thrown away, they can
              lead to a series of interconnected environmental issues.
            </div>
          </div>
          <div>{}</div>
        </div>
      </div>
    </div>
  );
}

export default CardsFour;
