import ArticleCard, {ArticleCardProps} from "@/components/common/ArticleCard";
import HeroBgImage from "@/components/common/HeroBgImage";
import React from "react";

const cards4: ArticleCardProps[] = [
  {
    thumbnail: "/picture/Group 254 (1).png",
    index: 1,
    title: "The cost and expense of chemical recycling can be risky.",
    content:
      "Textile recycling with different materials is a challenging task—especially when it comes to mechanical recycling processes. However, chemical recycling can also be costly and cause environmental pollution.",
  },
  {
    thumbnail: "/picture/Mask group (8).png",
    index: 2,
    title: "Large amounts of textile waste accumulate.",
    content:
      "Complex, difficult-to-recycle textiles with multiple materials will likely become waste. This can result in environmental burdens, such as landfilling or incineration.",
  },
  {
    thumbnail: "/picture/Mask group (9).png",
    index: 3,
    title: "Carbon emissions are on the rise.",
    content:
      "The reduction of easily recyclable textiles has led to a shift towards using petrochemical raw materials, resulting in increased carbon emissions. Petrochemical raw materials involve processes such as extraction, refining, and processing, while recycled materials typically require simpler treatment and processing.",
  },
];

function CardsFour() {
  return (
    <div>
      <div className="bg-[rgba(11,_11,_43,_0.05)] pb-3 md:pb-0">
        <div className="container">
          <div className="flex lg:flex-row flex-col justify-between gap-5 nd:pb-32 pb-24">
            {cards4.map((item, index) => (
              <ArticleCard
                theme="dark"
                {...item}
                index={index + 1}
                key={index}
              />
            ))}
          </div>
        </div>
        <div
          className="bg-no-repeat bg-cover"
          style={{backgroundImage: `url('picture/Group 116.png')`}}
        >
          <HeroBgImage title="The RTS circular design mindset is all about using mono-material in products to be able concentrate on the re-usability and efficient resource utilization." />
        </div>
      </div>
    </div>
  );
}

export default CardsFour;
