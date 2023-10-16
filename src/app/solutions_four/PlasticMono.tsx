import {title} from "process";
import React from "react";

const monoCard = [
  {
    pic: "/picture/Mask group mono.png",
    name: "TPEE Mono.",
    title: [
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
    name: "TPU Mono.",
    title: [
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
    name: "TPA Mono.",
    title: [
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
];

function PlasticMono() {
  return (
    <div className="bg-[rgba(11,_11,_43,_0.05)]">
      <div className="container">
        <div className="mb-[120px]">
          <div className="text-12xl font-bold text-slate-900 mb-11">
            Thermoplastic Elastomer Mono.
          </div>
          <div className="grid grid-cols-3 gap-5">
            {monoCard.map((item, index) => (
              <div key={index}>
                <div className="bg-emerald-600 pb-2.5 rounded-t-3xl">
                  <img className="w-full" src={item.pic} alt="" />
                </div>
                <div className="py-10 px-10 bg-white">
                  <div className="text-4xl font-bold mb-2.5">{item.name}</div>
                  <div className="">
                    {item.title.map((feature, index) => (
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
      </div>
      <div className="container">
        <div className="text-12xl font-bold text-slate-900 mb-3">
          Fusible Mono.
        </div>
        <div className="relative">
          <div className="-mx-28">
            <img className="w-full" src="/picture/Vector (4).svg" alt="" />
          </div>
          <div className="max-w-[402px] absolute top-8">
            <div className="bg-emerald-600 pb-2.5 inline-block rounded-t-3xl">
              <img src="/picture/Mask group (12).png" alt="" />
            </div>
            <div className="p-10 bg-white">
              <div className="text-4xl font-bold mb-2.5">
                Bi-component Mono.
              </div>
              <div className="flex gap-2">
                <div className="text-[30px] font-medium -mt-5">.</div>
                <div className="text-md font-medium">
                  Textiles can be bonded at 110°C - 180°C, in place of adhesives
                  for hetero-material.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="text-[30px] font-medium -mt-5">.</div>
                <div className="text-md font-medium">
                  Reduce carbon emissions by streamlining processes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="-mt-20">
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
