import React from "react";

const cards = [
  {
    name: "Retain",
    title:
      "“Reduce, reuse, and recycle” are all strategies for lessening the consumption of resources and the environmental impact of textile products.",
  },
  {
    name: "Sustain",
    title:
      "The value of products renewed by the RTS approach is retained, making this a sustainable solution.",
  },
];

function Vision() {
  return (
    <section>
      <div className="md:mb-9 mb-6 -translate-y-[65%]">
        <img className="w-full" src="/picture/Vector (4).svg" alt="" />
      </div>
      <div className="container md:px-10">
        <div className="md:text-8xl text-5xl font-bold text-slate-900 -mt-[23%] md:mb-32 mb-8">
          Ri-Thai has been a leader in synthetic fibers for over 45 years. The
          company's commitment to sustainability is evidenced by its new RTS
          (Retain to Sustain) textiles initiative.
        </div>
        <div className="-mx-4 md:hidden">
          <img className="w-full" src="/picture/Vector (5).png" alt="" />
        </div>
        <div className="flex md:flex-row flex-col md:gap-5 gap-10 justify-between -mt-2 md:-mt-0">
          {cards.map(({name, title}, index) => (
            <div key={index}>
              <div className="md:text-12xl text-7xl font-bold text-slate-900 md:mb-2 mb-5">
                {name}
              </div>
              <div className="md:text-lg text-md md:max-w-[462px] text-[rgba(11,_11,_43,_0.80)]">
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-full h-[1px] bg-slate-200 md:hidden mt-11" />
      <div
        className="bg-no-repeat bg-cover md:mb-14 md:-translate-y-[10%] -translate-y-[25%]"
        style={{backgroundImage: `url('/picture/Vector.png')`}}
      >
        <div className="md:text-18xl text-13xl font-bold text-center pt-[313px] md:pb-[199px] pb-24">
          Vision & <br className="md:hidden" /> Mission
        </div>
      </div>
      <div className="container">
        <div className="max-w-[899px] m-auto md:mb-[160px] mb-[100px] -mt-14 md:-mt-0">
          <div className="md:text-8xl text-5xl font-bold text-slate-900 mb-14">
            “Sustainable development is development that meets the needs of the
            present without compromising the ability of future generations to
            meet their own needs.” - Our Common Future 1987 WCED
          </div>
          <div className="md:text-lg text-md text-slate-900">
            RTS’s vision is to promote the use of sustainable-minded
            monofilament yarn, ultimately enabling consumers to make informed
            choices about their purchases. <br />
            <br /> Our goal is to be a part of sustainable industries, reducing
            the carbon footprint and resource consumption of textile through
            monofilaments. We want to ensure that all products follow the
            principles of environmental friendliness and social responsibility
            throughout their entire lifecycle—from manufacturing to use and
            recycling. Ultimately, this is to preserve environmental and energy
            resources for the next generation. <br />
            <br /> Our mission is to raise awareness and support for sustainable
            textiles, and dedicating ourselves to innovative research and
            development. At the same time, we also call upon like-minded
            partners across the value chain to jointly develop new possibilities
            for monofilaments, providing the market with sustainable textile
            materials. To achieve this, we are committed to breaking existing
            specifications of monofilaments, reducing their diameters, and
            applying them to a wider range of textiles. RTS can offer technical
            support and encourage brands to adopt mono-material designs to
            promote textile recycling. <br />
            <br /> We invite you to join us in creating a sustainable future for
            all.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
