import React from "react";

function Header_three() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/picture/Mask group (4).png')`,
      }}
    >
      <div className="container">
        <div className="pt-[225px]">
          <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.50)] mb-11">
            <p className=" text-lg font-medium text-white">RTS Solutions to</p>
            <p className=" text-lg font-medium text-white">
              # Addressing the current challenges in textile recycling
            </p>
          </div>
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            Monofilament
          </div>
          <br />
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            With Greater
          </div>
          <br />
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 mb-6">
            Inclusivity
          </div>
          <div className="text-5xl font-medium text-white pb-[279px] shadow-lg max-w-[472px]">
            Overcoming the challenges of synthetic textiles closed-loop
            recycling by using innovative, low environmental impact methods.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_three;
