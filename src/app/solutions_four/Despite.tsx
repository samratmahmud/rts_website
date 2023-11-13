import React from "react";

function Recovary() {
  return (
    <section className="relativ mt-[53%] md:mt-[25%]">
      <div className="">
        <img className="w-full" src="/picture/Vector (6).svg" alt="" />
        <div className="container">
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-12 items-center md:-mt-[45%] -mt-[75%]">
            <div>
              <img
                className="w-full"
                src="/picture/AdobeStock_312925667_Preview 1.png"
                alt=""
              />
            </div>
            <div>
              <div className="text-12xl font-bold text-slate-900 md:mb-6 mb-3 hidden md:block">
                Our goals
              </div>
              <div className="text-7xl font-bold text-slate-900 md:mb-6 mb-3 md:hidden max-w-[250px] text-center m-auto">
                Our efforts and goals
              </div>
              <div className="md:text-lg text-md text-slate-900 max-w-[604px]">
                Recovery and elasticity of elastic monofilaments trail those
                commonly used elastic fibers in the industry, such as Spandex.
                To address these deficiencies, RTS is developing elastic
                monofilaments that will be more elastic with higher recovery
                than existing products, while maintaining strength,
                processability, dyeability, and recyclability.{" "}
                <p className="pt-4">
                  From a design perspective, opting for a mono-material
                  increases textile recyclability—making this material an ideal
                  choice for multiple applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recovary;
