import React from "react";

function HeaderFour() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/picture/Mask group (7).png')`,
      }}
    >
      <div className="container">
        <div className="pt-[225px]">
          <div className="mb-11">
            <p className=" text-lg font-medium text-white">RTS Solutions to</p>
            <p className=" text-lg font-medium text-white">
              # Embracing a mono-material approach
            </p>
          </div>
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            Monofilament
          </div>
          <br />
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            For Improved
          </div>
          <br />
          <div className="text-17xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 mb-6">
            Recyclability
          </div>
          <div className="text-5xl font-medium text-white pb-[279px] shadow-lg max-w-[472px]">
            Mono-material design allows products to be recycled more
            efficiently.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderFour;
