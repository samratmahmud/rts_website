import ArticleCard, {ArticleCardProps} from "@/components/common/ArticleCard";
import React from "react";

const cardsFive: ArticleCardProps[] = [
  {
    thumbnail: "/picture/Mask group (22).png",
    title: "Environmental pollution",
    content:
      "According to a survey by the International Union for Conservation of Nature (IUCN), 35% of non-biodegradable, marine microplastic pollution comes from synthetic fibers.",
  },
  {
    thumbnail: "/picture/Mask group (20).png",
    title: "Biological food chain pollution",
    content:
      "Recent studies indicate that each person ingests approximately a credit card's worth of plastic every week. Although the medical community has not reached a definitive conclusion on the impact of plastic on human health, potential risks are indicated.",
  },
  {
    thumbnail: "/picture/Mask group (21).png",
    title: "Decrease of textiles quality and lifespan",
    content:
      "Textiles that shed microfibers and are less durable experience a decrease in their lifespan. This leads to resource wastage, as well as environmental burdens.",
  },
];

function CardFive() {
  return (
    <section
      className="bg-no-repeat bg-cover relative"
      style={{backgroundImage: `url('/picture/Mask group (19).png')`}}
    >
      <div className="absolute -mt-[15%] left-0 right-0">
        <img className="w-full" src="/picture/Vector (7).svg" alt="" />
      </div>
      <div className="container">
        <div className="md:pt-[236px] pt-24 md:pb-[162px] pb-28">
          <div className="flex lg:flex-row flex-col lg:gap-8 gap-6 items-center md:mb-48 mb-16">
            <div>
              <img className="w-full" src="/picture/Group 73 (1).png" alt="" />
            </div>
            <div className="md:text-5xl text-2xl font-medium text-white lg:w-[44%] font-regulator-nova">
              Textiles shed microfibers during use and washing, which can enter
              the environment and the food chain, causing pollution.
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-6 rounded-xl">
            {cardsFive.map((item, index) => (
              <ArticleCard
                theme="white"
                {...item}
                index={index + 1}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardFive;
