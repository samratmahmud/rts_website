import React from "react";
//

function SolutionHeader() {
  return (
    <div className="relative z-0">
      <span
        className="w-full h-[160px] block absolute left-0 right-0 max-w-[1440px] mx-auto"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(11, 11, 43, 0) 0%, rgba(11, 11, 43, 0.06) 27%, rgba(11, 11, 43, 0.52) 100%)`,
        }}
      />
      <img
        className="w-full absolute -z-20"
        src="/picture/stock-photo-happy-woman-zip-up-blue-sportive-jacket-before-rain-relaxing-and-smiling-in-cliff-during-trip-1152904802 1.jpg"
        alt=""
      />
      <img
        src="/picture/Mask group.svg"
        className="absolute -z-10 w-full bottom-0 translate-y-[calc(100%-205px)]"
        alt=""
      />
      <div className="container">
        <div className="pt-[270px] pb-[285px]">
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            RTS
          </div>
          <br />
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 mb-6">
            Solutions
          </div>
          <div className="text-5xl font-medium text-white shadow-lg">
            Leading the textile industry towards a sustainable future.
          </div>
        </div>
        <div className="text-11xl max-w-[906px] mx-auto text-center text-slate-900 absolute bottom-12 translate-y-full pt-24 z-20 left-4 right-4">
          Solving significant problems in the textile industry begins with
          thoughtful choices.
          <div className="font-bold">
            RTS proposes four major solutions.
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default SolutionHeader;
