import React from "react";

const cardsFive = [
  {
    pic: "/picture/Mask group (22).png",
    number: "# 1",
    name: "Environmental pollution",
    title:
      "According to a survey by the International Union for Conservation of Nature (IUCN), 35% of non-biodegradable, marine microplastic pollution comes from synthetic fibers.",
  },
  {
    pic: "/picture/Mask group (20).png",
    number: "# 2",
    name: "Biological food chain pollution",
    title:
      "Recent studies indicate that each person ingests approximately a credit card's worth of plastic every week. Although the medical community has not reached a definitive conclusion on the impact of plastic on human health, potential risks are indicated.",
  },
  {
    pic: "/picture/Mask group (21).png",
    number: "# 3",
    name: "Decrease of textiles quality and lifespan",
    title:
      "Textiles that shed microfibers and are less durable experience a decrease in their lifespan. This leads to resource wastage, as well as environmental burdens.",
  },
];

function CardFive() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover"
        style={{backgroundImage: `url('/picture/Mask group (19).png')`}}
      >
        <div className="absolute -mt-[15%]">
          <img className="w-full" src="/picture/Vector (7).svg" alt="" />
        </div>
        <div className="container">
          <div className="md:pt-[236px] pt-24 md:pb-[162px] pb-28">
            <div className="flex lg:flex-row flex-col lg:gap-8 gap-6 items-center md:mb-48 mb-16">
              <div>
                <img
                  className="w-full"
                  src="/picture/Group 73 (1).png"
                  alt=""
                />
              </div>
              <div className="md:text-5xl text-2xl font-medium text-white lg:w-[44%]">
                Textiles shed microfibers during use and washing, which can
                enter the environment and the food chain, causing pollution.
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-6 rounded-xl">
              {cardsFive.map((item, index) => (
                <div key={index} className="lg:max-w-[398px] rounded-xl">
                  <div className="bg-emerald-600 pb-2.5">
                    <img className="w-full" src={item.pic} alt="" />
                  </div>
                  <div className="md:px-10 px-5 md:py-10 pt-7 pb-11 bg-white">
                    <div className="text-md font-medium text-emerald-600 md:mb-3.5 mb-5">
                      {item.number}
                    </div>
                    <div className="text-4xl font-bold text-slate-900 md:mb-10 mb-5">
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
