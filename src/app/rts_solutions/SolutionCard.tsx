import React from "react";

const cards = [
  {
    pic: "/picture/AdobeStock_74657163_Preview 2.png",
    name: "Low Carbon Footprint Monofilament",
    p1: "RTS Solutions to",
    p2: "# Lightweighting",
  },
  {
    pic: "/picture/Mask group (1).png",
    name: "Monofilament With Greater Inclusivity ",
    p1: "RTS Solutions to",
    p2: "# Addressing the current challenges in textile recycling",
  },
  {
    pic: "/picture/Mask group (2).png",
    name: "Monofilaments For Improved Recyclability",
    p1: "RTS Solutions to",
    p2: "# Embracing a mono-material approach",
  },
  {
    pic: "/picture/Mask group (1).png",
    name: "Monofilament With Higher Durability and Low Shedding",
    p1: "RTS Solutions to",
    p2: "# Microfiber shedding",
  },
];

function SolutionCard() {
  return (
    <section className="lg:bg-[rgba(11,_11,_43,_0.05)] pb-24 pt-16 relative z-0 ">
      <img
        className="absolute -z-20 -top-10 lg:-top-[14%] w-full"
        src="/picture/Vector (4).svg"
        alt=""
      />
      <img
        className="w-full absolute -translate-y-1/2 top-1/2  -z-10"
        src="/picture/Vector (1).png"
        alt=""
      />

      <div className="container">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 -mt-10 md:-mt-0">
            {cards.map((item, index) => (
              <div key={index} className="bg-slate-900 w-full">
                <div className="relative">
                  <img className="w-full" src={item.pic} alt="" />
                  <div className="text-8xl font-bold text-emerald-600 max-w-[457px] text-center m-auto absolute top-1/2 left-0 right-0 bottom-0 justify-center">
                    {item.name}
                  </div>
                </div>
                <div className="py-4">
                  <p className="text-lg text-white text-center">{item.p1}</p>
                  <p className="text-lg text-white text-center">{item.p2}</p>
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
