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
    <div className="">
      <div className="mb-9 -mt-[190px]">
        <img className="w-full" src="/picture/Vector (4).svg" alt="" />
      </div>
      <div className="container px-10">
        <div className="text-8xl font-bold text-slate-900 mb-32">
          Ri-Thai has been a leader in synthetic fibers for over 45 years. The
          company's commitment to sustainability is evidenced by its new RTS
          (Retain to Sustain) textiles initiative.
        </div>
        <div className="flex gap-5 justify-between">
          {cards.map((item, index) => (
            <div key={index}>
              <div className="text-12xl font-bold text-slate-900 mb-2">
                {item.name}
              </div>
              <div className="text-lg max-w-[462px] text-[rgba(11,_11,_43,_0.80)]">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover mb-14 -mt-16"
        style={{backgroundImage: `url('/picture/Vector.png')`}}
      >
        <div className="text-18xl font-bold text-center pt-[313px] pb-[199px]">
          Vision & Mission
        </div>
      </div>
      <div className="container">
        <div className="max-w-[899px] m-auto mb-[160px]">
          <div className="text-8xl font-bold text-slate-900 mb-14">
            “Sustainable development is development that meets the needs of the
            present without compromising the ability of future generations to
            meet their own needs.” - Our Common Future 1987 WCED
          </div>
          <div className="text-lg text-slate-900">
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
      <div className="bg-slate-900">
        <div className="container">
          <div className="flex gap-10 justify-between items-center py-28">
            <div className="max-w-[575px]">
              <div className="flex">
                <div className="text-21xl font-medium text-emerald-600 -mt-5">
                  “
                </div>
                <div className="text-8xl font-medium text-white mb-7">
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
            <div>
              <img src="/picture/image 4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
