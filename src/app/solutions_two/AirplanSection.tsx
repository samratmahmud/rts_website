import React from "react";

const planeCards = [
  {
    pic: "/picture/AdobeStock_589111468_Preview.png",
    number: "# 1",
    title:
      "Any industry that needs to reduce carbon emissions during product transportation and lightweighting transportation vehicles.",
  },
  {
    pic: "/picture/AdobeStock_343329880_Preview 2.png",
    number: "# 2",
    title:
      "Any industry that needs to reduce the use of petrochemical materials, lower product carbon footprint, and decrease carbon taxes.",
  },
];

function AirplanSection() {
  return (
    <div className="relative lg:mb-44 mb-16">
      <div className="absolute lg:top-1/4 top-[45%] -z-10">
        <img
          className="w-screen hidden lg:block"
          src="/picture/Vector (4).svg"
          alt=""
        />
        <img
          className="w-screen lg:hidden"
          src="/picture/Vector (6).png"
          alt=""
        />
      </div>

      <div className="container">
        <div className="">
          <div className="flex justify-center md:mb-14 mb-7 mx-20 md:mx-0">
            <img src="/picture/Group (2).svg" alt="" />
          </div>
          <div className="md:text-11xl text-4xl text-slate-900 max-w-[900px] m-auto text-center">
            Please join us in the RTS energy-saving and carbon reduction
            initiative:
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 justify-between md:mt-32 mt-[60px]">
            {planeCards.map((item, index) => (
              <div key={index} className="lg:max-w-[563px]">
                <div className="bg-emerald-600 pb-2.5">
                  <img
                    className="lg:max-h-[320px] w-full"
                    src={item.pic}
                    alt=""
                  />
                </div>
                <div className="bg-slate-900 md:py-12 py-7 md:px-14 px-5">
                  <div className="md:text-4xl text-md font-bold text-emerald-600 md:mb-6 mb-4">
                    {item.number}
                  </div>
                  <div className="md:text-4xl text-md text-white">
                    {item.title}
                  </div>
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
