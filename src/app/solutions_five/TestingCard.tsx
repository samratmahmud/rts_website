import ArticleCard, {ArticleCardProps} from "@/components/common/ArticleCard";
import React from "react";

const cardsGroup: ArticleCardProps[] = [
  {
    thumbnail: "/picture/Mask group (23).png",
    index: 1,
    title: "Testing and evaluation",
    content:
      "A microfiber shedding rate test revealed that monofilament sheds fewer fibers than multifilament.",
  },
  {
    thumbnail: "/picture/Mask group (24).png",
    index: 2,
    title: "Smooth and low friction",
    content:
      "Monofilaments are less prone to surface abrasion and microfiber shedding during the manufacturing process and while in use.",
  },
  {
    thumbnail: "/picture/Mask group (25).png",
    index: 3,
    title: "Made to last",
    content:
      "Under the same denier, monofilaments have a lower breakage probability than multifilaments.",
  },
];

function TestingCard() {
  return (
    <section>
      <div className="lg:-mt-[6%] -mt-[12%] mb-8 lg:mb-0">
        <img className="w-full" src="/picture/Vector (4).svg" alt="" />
      </div>
      <div className="container">
        <div className="lg:-mt-[19%] mg:pb-[103px] pb-[70px]">
          <div className="grid lg:grid-cols-3 gap-6 rounded-xl">
            {cardsGroup.map((item, index) => (
              <ArticleCard {...item} index={index + 1} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestingCard;
