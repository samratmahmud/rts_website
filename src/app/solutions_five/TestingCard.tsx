import React from "react";

const cardsGroup = [
  {
    pic: "/picture/Mask group (23).png",
    number: "# 1",
    name: "Testing and evaluation",
    title:
      "A microfiber shedding rate test revealed that monofilament sheds fewer fibers than multifilament.",
  },
  {
    pic: "/picture/Mask group (24).png",
    number: "# 2",
    name: "Smooth and low friction",
    title:
      "Monofilaments are less prone to surface abrasion and microfiber shedding during the manufacturing process and while in use.",
  },
  {
    pic: "/picture/Mask group (25).png",
    number: "# 3",
    name: "Made to last",
    title:
      "Under the same denier, monofilaments have a lower breakage probability than multifilaments.",
  },
];

function TestingCard() {
  return (
    <div>
      <div className="-mt-[74px] relative">
        <img className="w-full" src="/picture/Vector (4).svg" alt="" />
        <div className="container">
          <div className="absolute top-[156px]">
            <div className="flex lg:flex-row flex-col gap-6 rounded-xl">
              {cardsGroup.map((item, index) => (
                <div key={index} className="lg:max-w-[398px] rounded-xl">
                  <div className="bg-emerald-600 pb-2.5">
                    <img className="w-full" src={item.pic} alt="" />
                  </div>
                  <div className="px-10 py-10 bg-[rgba(11,_11,_43,_0.05)]">
                    <div className="text-md font-medium text-emerald-600 mb-3.5">
                      {item.number}
                    </div>
                    <div className="text-4xl font-bold text-slate-900 mb-2.5 max-w-[242px]">
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

export default TestingCard;
