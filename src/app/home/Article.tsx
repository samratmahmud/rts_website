import React from "react";

const articlePage = [
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
];

function Article() {
  return (
    <div className="bg-[rgba(11,_11,_43,_0.05)]">
      <div className="container lg:pb-24 pb-14 md:pt-[118px] pt-12">
        <div className="md:text-12xl text-7xl font-bold text-slate-900 lg:mb-9 mb-10">
          Latest articles
        </div>
        <div className="flex lg:flex-row flex-col gap-10">
          {articlePage.map(
            ({thumbneil, tagName, title, contain, date, tagName2}, index) => (
              <div key={index} className="flex flex-col lg:w-1/2 w-full">
                <div>
                  <img
                    className="bg-cover bg-no-repeat w-full rounded-t-xl"
                    src={thumbneil}
                    alt=""
                  />
                </div>
                <div className="lg:py-12 pt-8 pb-12 lg:px-14 px-5 bg-white rounded-b-xl">
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
                  <div className="text-md font-medium text-[rgba(11,_11,_43,_0.80)] mb-6">
                    {contain}
                  </div>
                  <div className="text-sm font-bold text-[rgba(11,_11,_43,_0.60)]">
                    {date}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Article;
