import React from "react";

function HeaderSection() {
  return (
    //akono use hoynai
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/picture/AdobeStock_74657163_Preview 1.png')`,
      }}
    >
      <div className="container">
        <div className="pt-[225px]">
          <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.50)] mb-11">
            <p className=" text-lg font-medium text-white">RTS Solutions to</p>
            <p className=" text-lg font-medium text-white"> # Lightweighting</p>
          </div>
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            Monofilament with a
          </div>
          <br />
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 mb-6">
            smaller carbon footprint
          </div>
          <div className="text-5xl font-medium text-white pb-[279px] shadow-lg max-w-[739px]">
            Hollow monofilament's lightweight nature reduces energy consumption,
            leading to a decrease in carbon emissions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
