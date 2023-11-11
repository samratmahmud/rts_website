import React from "react";

function RtsTeam() {
  return (
    <section>
      <div className="lg:hidden">
        <img
          className="w-full"
          src="/picture/istockphoto-1277859289-2048x2048 1.png"
          alt=""
        />
      </div>
      <div className="bg-slate-900">
        <div className="container">
          <div className="flex gap-10 justify-between items-center md:py-28 pt-20 pb-[76px]">
            <div className="lg:max-w-[575px]">
              <div className="md:flex">
                <div className="text-21xl font-medium text-emerald-600 md:-mt-5">
                  “
                </div>
                <div className="md:text-8xl text-5xl font-medium text-white md:mb-7 mb-9 font-regulator-nova">
                  At Ri-Thai, we strive to foster and share with our customers
                  the sustainable value of our products. In 2012 we launched the
                  MonoGreenⓇ line of eco-friendly monofilament yarns. We are now
                  proud to introduce RTSTM, an innovative solution that
                  exemplifies our dedication to circularity and sustainability
                  in the textile industry.
                </div>
              </div>
              <div className="text-4xl font-bold text-white text-right">
                - RTS Team
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/picture/image 4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RtsTeam;
