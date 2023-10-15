import React from "react";

const cards4 = [
  {
    pic: "/picture/Group 254 (1).png",
    number: "# 1",
    name: "The cost and expense of chemical recycling can be risky.",
    title:
      "Textile recycling with different materials is a challenging task—especially when it comes to mechanical recycling processes. However, chemical recycling can also be costly and cause environmental pollution.",
  },
  {
    pic: "/picture/Mask group (8).png",
    number: "# 2",
    name: "Large amounts of textile waste accumulate.",
    title:
      "Complex, difficult-to-recycle textiles with multiple materials will likely become waste. This can result in environmental burdens, such as landfilling or incineration.",
  },
  {
    pic: "/picture/Mask group (9).png",
    number: "# 3",
    name: "Carbon emissions are on the rise.",
    title:
      "The reduction of easily recyclable textiles has led to a shift towards using petrochemical raw materials, resulting in increased carbon emissions. Petrochemical raw materials involve processes such as extraction, refining, and processing, while recycled materials typically require simpler treatment and processing.",
  },
];

function CardsFour() {
  return (
    <div>
      <div className="bg-[rgba(11,_11,_43,_0.05)] pb-28">
        <div className="-mt-40">
          <img className="w-full" src="/picture/Vector (4).svg" alt="" />
        </div>
        <div className="container">
          <div className="flex gap-7 items-center pb-24 -mt-14">
            <div>
              <img src="/picture/Group 73.png" alt="" />
            </div>
            <div className="text-5xl font-medium text-slate-900 max-w-[540px]">
              When products with different materials are thrown away, they can
              lead to a series of interconnected environmental issues.
            </div>
          </div>
          <div className="flex flex-row justify-between gap-5 pb-32">
            {cards4.map((item, index) => (
              <div key={index} className="max-w-[398px]">
                <div className="bg-emerald-600 pb-2.5">
                  <img src={item.pic} alt="" />
                </div>
                <div className="px-10 py-9 bg-slate-900">
                  <div className="text-md font-medium text-emerald-600 mb-3.5">
                    {item.number}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2.5">
                    {item.name}
                  </div>
                  <div className="text-md font-medium text-white">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className=""
          style={{backgroundImage: `url('/picture/Group 116.png')`}}
        >
          <div className="container">
            <div className="text-10xl text-white max-w-[674px] py-32">
              The RTS circular design mindset is all about using mono-material
              in products to be able to concentrate on the re-usability and
              efficient resource utilization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsFour;
