import React from "react";

const airplanCard = [
  {
    pic: "/picture/AdobeStock_589111468_Preview.png",
    num: "# 1",
    title:
      "Any industry that needs to reduce carbon emissions during product transportation and lightweighting transportation vehicles.",
  },
  {
    pic: "/picture/AdobeStock_343329880_Preview 2.png",
    num: "# 2",
    title:
      "Any industry that needs to reduce the use of petrochemical materials, lower product carbon footprint, and decrease carbon taxes.",
  },
];

function AirplanSection() {
  return (
    <div>
      <div className="relative mb-16">
        <div>
          <img src="/picture/Vector (1).svg" alt="" />
        </div>
        <div className="container">
          <div className="flex flex-row gap-10 items-center absolute -top-8">
            <div>
              <img src="/picture/AdobeStock_91101792_Preview 1.png" alt="" />
            </div>
            <div>
              <div className="text-12xl font-bold text-slate-900 mb-6">
                Our goals
              </div>
              <div className="text-lg text-slate-900 max-w-[664px]">
                We aim to reduce the diameter and increase the hollow rate of
                hollow monofilament by 50%, while maintaining the desired
                performance targets.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mb-14 flex justify-center">
          <img src="/picture/Group (2).svg" alt="" />
        </div>
        <div className="text-11xl text-slate-900 max-w-[900px] m-auto text-center">
          Please join us in the RTS energy-saving and carbon reduction
          initiative:
        </div>
        <div className="relative">
          <div>
            <img src="/picture/Vector (4).svg" alt="" />
          </div>
          <div className="flex flex-row gap-10 justify-between -mt-[220px] mb-44">
            {airplanCard.map((item, index) => (
              <div key={index} className="max-w-[563px]">
                <div className="bg-emerald-600 pb-2.5">
                  <img src={item.pic} alt="" />
                </div>
                <div className="bg-slate-900 py-12 px-14">
                  <div className="text-4xl font-bold text-emerald-600 mb-6">
                    {item.num}
                  </div>
                  <div className="text-4xl text-white">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirplanSection;
