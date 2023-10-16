import React from "react";

function HeaderFive() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/picture/Mask group (18).png')`,
      }}
    >
      <div className="container">
        <div className="pt-[225px]">
          <div className="drop-shadow-[0px_2px_4px_rgba(0,_0,_0,_0.50)] mb-11">
            <p className=" text-lg font-medium text-white">RTS Solutions to</p>
            <p className=" text-lg font-medium text-white">
              # Microfiber shedding
            </p>
          </div>
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            Monofilament With
          </div>
          <br />
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            Higher Durability
          </div>
          <br />
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 mb-6">
            and Low Shedding
          </div>
          <div className="text-5xl font-medium text-white pb-[279px] shadow-lg max-w-[739px]">
            Introducing a fine, resilient monofilament with less shedding.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderFive;
