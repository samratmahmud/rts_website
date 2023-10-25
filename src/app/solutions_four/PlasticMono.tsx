import {title} from "process";
import React from "react";

const monoCards = [
  {
    name: "Thermoplastic Elastomer Mono.",
    items: [
      {
        pic: "/picture/Mask group mono.png",
        title: "TPEE Mono.",
        containt: [
          {
            dots: ".",
            text: "Recyclable",
          },
          {
            dots: ".",
            text: "As a member of the same family as Polyester, it facilitates homogeneous recycling efforts.",
          },
          {
            dots: ".",
            text: "Good lightfastness",
          },
          {
            dots: ".",
            text: "RecyclaA cationic dyeable version of TPEE has been developed to address the color fastness issue.ble",
          },
        ],
      },
      {
        pic: "/picture/Mask group (10).png",
        title: "TPU Mono.",
        containt: [
          {
            dots: ".",
            text: "Recyclable",
          },
          {
            dots: ".",
            text: "Available as polyester-based (good light fastness) and polyether-based (hydrolysis resistant) products.",
          },
          {
            dots: ".",
            text: "Low shrinkage, ideal for products with special requirements.",
          },
        ],
      },
      {
        pic: "/picture/Mask group (11).png",
        title: "TPA Mono.",
        containt: [
          {
            dots: ".",
            text: "Recyclable",
          },
          {
            dots: ".",
            text: " Creates elasticity",
          },
          {
            dots: ".",
            text: "As a member of the same family as Polyamide, it facilitates mono-material recycling.",
          },
        ],
      },
    ],
  },
  {
    name: "Fusible Mono.",
    items: [
      {
        pic: "/picture/Mask group (12).png",
        title: "Bi-component Mono.",
        containt: [
          {
            dots: ".",
            text: "Textiles can be bonded at 110°C - 180°C, in place of adhesives for hetero-material.",
          },
          {
            dots: ".",
            text: "Reduce carbon emissions by streamlining processes.",
          },
        ],
      },
    ],
  },
];

function PlasticMono() {
  return (
    <div className="bg-[rgba(11,_11,_43,_0.05)]">
      <div className="relative">
        <div className="absolute -z-10 bottom-24 w-full">
          <img className="w-full" src="/picture/Vector (4).svg" alt="" />
        </div>
        <div className="container">
          <div className="">
            {monoCards.map((item, index) => (
              <div key={index}>
                <div className="md:text-12xl text-7xl font-bold text-slate-900 md:pt-28 pt-9 md:mb-11 mb-6">
                  {item.name}
                </div>
                <div className="grid lg:grid-cols-3 gap-5">
                  {item.items.map((card, index) => (
                    <div key={index}>
                      <div className="bg-emerald-600 pb-2.5 rounded-t-3xl">
                        <img className="w-full" src={card.pic} alt="" />
                      </div>
                      <div className="md:py-10 pb-11 pt-9 md:px-10 px-5 bg-white">
                        <div className="text-4xl font-bold mb-2.5">
                          {card.title}
                        </div>
                        <div className="">
                          {card.containt.map((feature, index) => (
                            <div key={index} className="flex gap-2">
                              <div className="text-[30px] font-medium -mt-5">
                                {feature.dots}
                              </div>
                              <div className="text-md font-medium">
                                {feature.text}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="-mt-[12%]"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 43, 0.001) 50%,white 50%)`,
          }}
        >
          <img className="w-full" src="/picture/Mask group (13).png" alt="" />
          <div className="container">
            <div className="top-0 absolute text-11xl font-medium text-white pt-[30%] max-w-[900px] m-auto left-0 right-0 text-center">
              Despite the advantages of mono-material design, many challenges
              remain.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlasticMono;
