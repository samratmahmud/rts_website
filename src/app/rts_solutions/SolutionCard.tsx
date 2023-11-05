import React from "react";

const cards = [
  {
    thumbneil: "/picture/AdobeStock_74657163_Preview 2.png",
    title: "Low Carbon Footprint Monofilament",
    p1: "RTS Solutions to",
    p2: "# Lightweighting",
  },
  {
    thumbneil: "/picture/Mask group (1).png",
    title: "Monofilament With Greater Inclusivity ",
    p1: "RTS Solutions to",
    p2: "# Addressing the current challenges in textile recycling",
  },
  {
    thumbneil: "/picture/Mask group (2).png",
    title: "Monofilaments For Improved Recyclability",
    p1: "RTS Solutions to",
    p2: "# Embracing a mono-material approach",
  },
  {
    thumbneil: "/picture/Mask group (1).png",
    title: "Monofilament With Higher Durability and Low Shedding",
    p1: "RTS Solutions to",
    p2: "# Microfiber shedding",
  },
];

function SolutionCard() {
  return (
    <section className="lg:bg-[rgba(11,_11,_43,_0.05)] pb-24 pt-16 relative z-0">
      <img
        className="absolute -z-20 -top-10 lg:-top-[14%] w-full"
        src="/picture/Vector (4).svg"
        alt=""
      />
      <img
        className="w-full h-1/5 lg:h-2/4 absolute -translate-y-[65%] top-1/2  -z-10"
        src="/picture/Vector (1).png"
        alt=""
      />

      <div className="container">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 -mt-10 md:-mt-0">
            {cards.map(({thumbneil, title, p1, p2}, index) => (
              <div key={index} className="bg-slate-900 w-full">
                <div className="relative">
                  <img className="w-full" src={thumbneil} alt="" />
                  <div
                    className="w-full lg:h-6 h-3 bottom-0 absolute  text-white"
                    style={{
                      backgroundImage: `linear-gradient(#5d5b5b,#151515)`,
                    }}
                  ></div>
                  <div className="md:text-8xl text-4xl font-bold text-emerald-600 max-w-[457px] text-center m-auto absolute top-1/2 -translate-y-1/3 left-5 right-5 bottom-0 justify-center">
                    {title}
                  </div>
                </div>
                <div className="md:pt-3 pt-2 md:pb-5 pb-3">
                  <p className="md:text-lg text-md text-white text-center">
                    {p1}
                  </p>
                  <p className="md:text-lg text-md text-white text-center">
                    {p2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionCard;
