import Button from "@/components/common/Button";
import React from "react";

const Brands = [
  "# microplastics",
  "# textile circularity",
  "# close the loop",
  "# carbon reduction",
  "# circular design ",
  "# microplasticsmicropm",
];

const issuesCards = [
  {
    thumbneil: "/picture/AdobeStock_237351350_Preview 1.png",
    tagName: "#microplastics",
    title: "The Truth About Microplastics in Textiles",
    contain:
      "35% of microplastics found in the ocean come from synthetic fibers. These synthetic fibers are sometimes referred to as filaments and categorized into monofilament yarn or multifilament yarns. Their application is versatile and vast, from footwear to outdoor products, the lining in automobiles, consumer goods, and more. Though handy, however, microplastics are released during the textile manufacturing process and during use.",
    date: "July 17, 2023",
  },
  {
    thumbneil: "/picture/Screenshots 2023-08-18 at 12.39 1.png",
    tagName: "#textile circularity",
    tagName2: "#circular design",
    title: "Circular Design and Mono-Materials",
    contain:
      "Designing with mono-material at heart means the end product doesn’t need to be disassembled, enabling a direct passage to reach the recycling system and reducing the proportion of impurities.",
  },
  {
    thumbneil: "/picture/Mask group (33).png",
    tagName: "#close the loop",
    tagName2: "#textile circularity",
    title: "Challenges of Textile-to-Textile Recycling",
    contain:
      "The textile industry's next frontier is a closed-loop system, where post-consumer and pre-consumer fabrics can be transformed into new textiles, resulting in zero waste. Put differently, these resources can be kept within the same supply chain and reused in a circular manner.",
    date: "July 17, 2023",
  },
  {
    thumbneil: "/picture/Mask group (34).png",
    tagName: "#carbon reduction",
    title: "Reducing Water and Carbon Footprints with Solution Dyeing",
    contain:
      "Society has used water to dye clothes for centuries. As water security becomes a global issue, the textile industry has started to take initiative in shaping a new future.",
  },
  {
    thumbneil: "/picture/Mask group (35).png",
    tagName: "#carbon reduction",
    title: "Decoding the future: Hollow monofilament yarn for carbon reduction",
    contain:
      "Climate change impacts are already evident, affecting vulnerable regions and communities disproportionately. Both companies and governments are playing their part to safeguard the future of our planet through product innovation, carbon pricing systems, and more. Hollow monofilament yarn is an example of an innovation that shows great promise in helping companies achieve their sustainability goals.",
  },
  {
    thumbneil: "/picture/Mask group (36).png",
    tagName: "#microplastics",
    title: "The Truth About Microplastics in Textiles",
    contain:
      "35% of microplastics found in the ocean come from synthetic fibers. These synthetic fibers are sometimes referred to as filaments and categorized into monofilament yarn or multifilament yarns. Their application is versatile and vast, from footwear to outdoor products, the lining in automobiles, consumer goods, and more. Though handy, however, microplastics are released during the textile manufacturing process and during use.",
    date: "July 17, 2023",
  },
];

function IssuesCard() {
  return (
    <section className="bg-slate-300/5 md:pb-20 pb-16 relative">
      <div className="-mt-[27%] md:-mt-[21%] relative z-0">
        <img className="w-full" src="/picture/Vector (8).png" alt="" />
      </div>
      <div className="absolute bottom-[47%]">
        <img src="/picture/Vector (10).png" alt="" />
      </div>
      <div className="container -mt-[10%] md:-mt-[16%]">
        <div className="flex flex-wrap md:gap-5 gap-3 md:mb-12 mb-10">
          {Brands.map((item, index) => (
            <div
              key={index}
              className="md:text-base text-md tracking-normal font-medium px-9 py-2 relative z-0 border border-slate-900 rounded-full cursor-pointer hover:bg-emerald-600 duration-300 hover:border-white"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 md:gap-10 gap-6 relative z-10 md:mb-16 mb-10">
          {issuesCards.map(
            ({thumbneil, tagName, title, contain, date, tagName2}, index) => (
              <div
                key={index}
                className="flex flex-col w-full lg:max-w-[563px]"
              >
                <div>
                  <img
                    className="bg-cover bg-no-repeat w-full rounded-t-md"
                    src={thumbneil}
                    alt=""
                  />
                </div>
                <div className="lg:py-12 pt-8 pb-12 lg:px-14 px-5 bg-white rounded-b-md">
                  <div className="lg:flex gap-4">
                    <div className="text-md font-medium text-emerald-600 lg:mb-3.5">
                      {tagName}
                    </div>
                    <div className="text-md font-medium text-emerald-600 mb-4">
                      {tagName2}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 lg:mb-6 mb-5">
                    {title}
                  </div>
                  <div className="text-md font-medium text-[rgba(11,_11,_43,_0.80)] mb-6 font-regulator-nova">
                    {contain}
                  </div>
                  <div className="text-sm font-bold text-[rgba(11,_11,_43,_0.60)] font-regulator-nova">
                    {date}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div
          role="button"
          className="flex justify-center rounded-full text-white"
        >
          <Button
            className="bg-emerald-600 hover:bg-green-500 duration-300"
            name="Load More"
          />
        </div>
      </div>
    </section>
  );
}

export default IssuesCard;
