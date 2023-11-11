import React from "react";
//

function SolutionHeader() {
  return (
    <section className="relative z-0 lg:bg-solutions1 bg-solutions1M w-full bg-no-repeat bg-cover">
      <span
        className="w-full lg:h-[160px] h-20 block absolute left-0 right-0 max-w-[1478px] mx-auto -z-10"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(11, 11, 43, 0) 0%, rgba(11, 11, 43, 0.06) 27%, rgba(11, 11, 43, 0.52) 100%)`,
        }}
      />
      <div className="container">
        <div className="md:pt-[270px] pt-[155px] md:pb-[381px] pb-[282px]">
          <div className="md:text-17xl text-9xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            RTS
          </div>
          <br />
          <div className="md:text-17xl text-9xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4 mb-6">
            Solutions
          </div>
          <div className="text-5xl font-medium text-white drop-shadow-lg font-regulator-nova">
            Leading the textile industry towards a sustainable future.
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionHeader;
