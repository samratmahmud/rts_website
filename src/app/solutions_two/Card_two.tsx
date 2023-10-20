import HeaderSection from "@/components/common/HeaderSection";
import HeroBgImage from "@/components/common/HeroBgImage";
import React from "react";

const cardProps = [
  {
    pic: "/picture/AdobeStock_612386745_Preview.png",
    number: "# 1",
    name: "Reducing the use of petrochemical materials.",
    title:
      "Our hollow monofilament, developed using fewer petrochemical materials, reduces carbon emission and resource consumption, as well as meeting performance requirements.",
  },
  {
    pic: "/picture/AdobeStock_41064239_Preview.png",
    number: "# 2",
    name: "Reducing carbon emissions during transportation.",
    title:
      "If hollow monofilament can be 10%–20% lighter than solid monofilament, this will enable us to reduce the amount of fuel consumption needed to transport the product. This decreases greenhouse gasses, which has a positive impact on the environment.",
  },
  {
    pic: "/picture/AdobeStock_41064239_Preview (1).png",
    number: "# 3",
    name: "Creating energy-efficient products.",
    title:
      "Hollow monofilament is a lightweight material that is ideal for use in transportation vehicles such as cars, trains, and aviation. It reduces weight in these vehicles, thereby improving energy efficiency and lowering carbon emissions..",
  },
];

function Card_two() {
  return (
    <div className="">
      <div
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/picture/AdobeStock_74657163_Preview 1.png')`,
        }}
      >
        <HeaderSection
          p1="RTS Solutions to"
          p2="# Lightweighting"
          div1="Monofilament with a smaller carbon footprint"
          title="Hollow monofilament's lightweight nature reduces energy consumption, leading to a decrease in carbon emissions."
        />
      </div>
      <div className="-mt-[15%] mb-12">
        <img className="w-full" src="/picture/Vector (4).svg" alt="" />
      </div>
      <div className="container">
        <div className="flex gap-7 items-center mb-32">
          <div>
            <img src="/picture/AdobeStock_490732559_Preview.png" alt="" />
          </div>
          <div className="text-5xl font-medium text-slate-900 max-w-[560px]">
            The consequences of climate change are disproportionately borne by
            vulnerable groups and regions, who contribute minimally to
            greenhouse gas emissions. To address this problem, we aim to make
            breakthroughs in our products regarding net-zero emissions.
            <p className="pt-6">
              We turn to nature for design inspiration, observing how birds use
              hollow bones and feathers to achieve easier flight.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-5 mb-32">
          {cardProps.map((item, index) => (
            <div key={index} className="max-w-[398px]">
              <div className="bg-emerald-600 pb-2.5">
                <img src={item.pic} alt="" />
              </div>
              <div className="px-10 py-9 bg-[rgba(11,_11,_43,_0.05)]">
                <div className="text-md font-medium text-emerald-600 mb-3.5">
                  {item.number}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2.5">
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
      <div>
        <HeroBgImage />
      </div>
    </div>
  );
}

export default Card_two;
