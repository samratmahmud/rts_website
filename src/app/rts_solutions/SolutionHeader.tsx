import React from "react";

function SolutionHeader() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/picture/stock-photo-happy-woman-zip-up-blue-sportive-jacket-before-rain-relaxing-and-smiling-in-cliff-during-trip-1152904802 1.png')`,
      }}
    >
      <div className="container">
        <div className="pt-[225px]">
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            RTS
          </div>
          <br />
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 mb-6">
            Solutions
          </div>
          <div className="text-5xl font-medium text-white pb-[293px] shadow-lg">
            Leading the textile industry towards a sustainable future.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionHeader;
