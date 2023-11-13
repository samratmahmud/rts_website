import {title} from "process";
import React from "react";

const monoCardData = [
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

function MonoCards() {
  return (
    <section className="bg-[rgba(11,_11,_43,_0.05)]">
      <div className="relative">
        <div className="absolute -z-10 lg:top-[64%] top-[45%] w-full">
          <img className="w-full" src="/picture/Vector (4).svg" alt="" />
        </div>
        <div className="container">
          <div className="mb-9 md:mb-0">
            {monoCardData.map(({items, name}, index) => (
              <div key={index}>
                <div className="md:text-12xl text-7xl font-bold text-slate-900 md:pt-28 pt-9 md:mb-11 mb-6">
                  {name}
                </div>
                <div className="grid lg:grid-cols-3 gap-5">
                  {items.map(({pic, title, containt}, index) => (
                    <div key={index}>
                      <div className="bg-emerald-600 pb-2.5 rounded-t-3xl">
                        <img className="w-full" src={pic} alt="" />
                      </div>
                      <div className="md:py-10 pb-11 pt-9 md:px-10 px-5 bg-white">
                        <div className="text-4xl font-bold mb-2.5">{title}</div>
                        <div className="">
                          {containt.map(({dots, text}, index) => (
                            <div
                              key={index}
                              className="flex gap-2 font-regulator-nova"
                            >
                              <div className="text-[30px] font-medium -mt-5">
                                {dots}
                              </div>
                              <div className="text-md font-medium">{text}</div>
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
          className="lg:-mt-[12%]"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 43, 0.001) 50%,white 50%)`,
          }}
        >
          <img
            className="w-full hidden md:block"
            src="/picture/Mask group (13).png"
            alt=""
          />
          <img
            className="w-full md:hidden"
            src="/picture/Mask group (31).png"
            alt=""
          />
          <div className="">
            <div className="top-0 absolute md:text-11xl text-4xl font-medium text-white pt-[30%] max-w-[900px] m-auto left-0 right-0 text-center px-4">
              Despite the advantages of mono-material design, many challenges
              remain.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MonoCards;
