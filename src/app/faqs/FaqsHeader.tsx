import React from "react";

function FaqsHeader() {
  return (
    <section
      className="relative z-0 bg-no-repeat bg-cover"
      style={{backgroundImage: `url('/picture/Group 147.png')`}}
    >
      <span
        className="w-full lg:h-[160px] h-20 block absolute left-0 right-0 max-w-[1478px] mx-auto -z-10"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(11, 11, 43, 0) 0%, rgba(11, 11, 43, 0.06) 27%, rgba(11, 11, 43, 0.52) 100%)`,
        }}
      />

      <div className="container">
        <div className="md:pt-72 pt-36 md:pb-64 pb-32">
          <div className="md:text-17xl text-9xl font-medium text-slate-900 bg-emerald-600 inline-block py-2 px-4">
            FAQ
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqsHeader;
