import React from "react";

const cardsFive = [
  {
    pic: "/picture/AdobeStock_237351350_Preview 2.png",
    number: "# 1",
    name: "Environmental pollution",
    title:
      "According to a survey by the International Union for Conservation of Nature (IUCN), 35% of non-biodegradable, marine microplastic pollution comes from synthetic fibers.",
  },
  {
    pic: "/picture/AdobeStock_237351350_Preview 2.png",
    number: "# 2",
    name: "Biological food chain pollution",
    title:
      "Recent studies indicate that each person ingests approximately a credit card's worth of plastic every week. Although the medical community has not reached a definitive conclusion on the impact of plastic on human health, potential risks are indicated.",
  },
  {
    pic: "/picture/AdobeStock_237351350_Preview 2.png",
    number: "# 3",
    name: "Decrease of textiles quality and lifespan",
    title:
      "Textiles that shed microfibers and are less durable experience a decrease in their lifespan. This leads to resource wastage, as well as environmental burdens.",
  },
];

function CardFive() {
  return (
    <div>
      <div className="relative">
        <img className="w-full" src="/picture/Mask group (19).png" alt="" />
        <div className="absolute -top-[18%]">
          <img className="w-screen" src="/picture/Vector (7).svg" alt="" />
        </div>
        <div className="container">
          <div className="absolute top-[226px]">
            <div className="flex gap-8 items-center mb-40">
              <div>
                <img src="/picture/Group 73 (1).png" alt="" />
              </div>
              <div className="text-5xl font-medium text-white w-[44%]">
                Textiles shed microfibers during use and washing, which can
                enter the environment and the food chain, causing pollution.
              </div>
            </div>
            <div className="flex flex-row gap-6 rounded-xl">
              {cardsFive.map((item, index) => (
                <div key={index} className="max-w-[398px] rounded-xl">
                  <div className="bg-emerald-600 pb-2.5">
                    <img src={item.pic} alt="" />
                  </div>
                  <div className="px-10 py-10 bg-white">
                    <div className="text-md font-medium text-emerald-600 mb-3.5">
                      {item.number}
                    </div>
                    <div className="text-4xl font-bold text-slate-900 mb-2.5">
                      {item.name}
                    </div>
                    <div className="text-md font-medium text-slate-900">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFive;
