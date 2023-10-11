import React from "react";

const articlePage = [
  {
    pic: "/picture/AdobeStock_237351350_Preview 1.png",
    tagName: "#microplastics",
    name: "The Truth About Microplastics in Textiles",
    title:
      "35% of microplastics found in the ocean come from synthetic fibers. These synthetic fibers are sometimes referred to as filaments and categorized into monofilament yarn or multifilament yarns. Their application is versatile and vast, from footwear to outdoor products, the lining in automobiles, consumer goods, and more. Though handy, however, microplastics are released during the textile manufacturing process and during use.",
    date: "July 17, 2023",
  },
  {
    pic: "/picture/Screenshots 2023-08-18 at 12.39 1.png",
    tagName: "#textile circularity",
    name: "Circular Design and Mono-Materials",
    title:
      "Designing with mono-material at heart means the end product doesn’t need to be disassembled, enabling a direct passage to reach the recycling system and reducing the proportion of impurities.",
  },
];

function Article() {
  return (
    <div className="bg-[rgba(11,_11,_43,_0.05)]">
      <div className="container pb-24">
        <div className="text-12xl font-bold text-slate-900 mb-3.5">
          Latest articles
        </div>
        <div className="flex gap-10">
          {articlePage.map((item, index) => (
            <div key={index} className="flex flex-col max-w-[593px]">
              <div>
                <img
                  className="bg-cover bg-no-repeat w-full"
                  src={item.pic}
                  alt=""
                />
              </div>
              <div className="py-12 px-14 bg-white">
                <div className="text-md font-medium text-emerald-600 mb-3.5">
                  {item.tagName}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-6 max-w-[350px]">
                  {item.name}
                </div>
                <div className="text-md font-medium text-[rgba(11,_11,_43,_0.80)] mb-6">
                  {item.title}
                </div>
                <div className="text-sm font-bold text-[rgba(11,_11,_43,_0.60)]">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
