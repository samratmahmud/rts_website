import ArticleCard, {ArticleCardProps} from "@/components/common/ArticleCard";
import HeaderSection from "@/components/common/HeaderSection";
import React from "react";

const cardProps: ArticleCardProps[] = [
  {
    thumbnail: "/picture/AdobeStock_612386745_Preview.png",
    title: "Reducing the use of petrochemical materials.",
    content:
      "Our hollow monofilament, developed using fewer petrochemical materials, reduces carbon emission and resource consumption, as well as meeting performance requirements.",
  },
  {
    thumbnail: "/picture/AdobeStock_41064239_Preview.png",
    title: "Reducing carbon emissions during transportation.",
    content:
      "If hollow monofilament can be 10%–20% lighter than solid monofilament, this will enable us to reduce the amount of fuel consumption needed to transport the product. This decreases greenhouse gasses, which has a positive impact on the environment.",
  },
  {
    thumbnail: "/picture/AdobeStock_41064239_Preview (1).png",
    title: "Creating energy-efficient products.",
    content:
      "Hollow monofilament is a lightweight material that is ideal for use in transportation vehicles such as cars, trains, and aviation. It reduces weight in these vehicles, thereby improving energy efficiency and lowering carbon emissions..",
  },
];

function Card_two() {
  return (
    <section>
      <div
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/picture/AdobeStock_74657163_Preview 1.png')`,
        }}
      >
        <HeaderSection
          p1="RTS Solutions to"
          p2="Lightweighting"
          div1="Monofilament with a smaller carbon footprint"
          title="Hollow monofilament's lightweight nature reduces energy consumption, leading to a decrease in carbon emissions."
        />
      </div>
      <div className="-mt-[15%] lg:mb-[52px] mb-6">
        <img className="w-full" src="/picture/Vector (4).svg" alt="" />
      </div>
      <div className="container">
        <div className="flex lg:flex-row flex-col lg:gap-[30px] gap-5 items-center lg:mb-32 mb-11">
          <div>
            <img src="/picture/AdobeStock_490732559_Preview.png" alt="" />
          </div>
          <div className="md:text-5xl text-2xl font-medium text-slate-900 lg:max-w-[560px]">
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
        <div className="grid lg:grid-cols-3 justify-between gap-5 md:mb-[124px] mb-7">
          {cardProps.map((item, index) => (
            <ArticleCard {...item} index={index + 1} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card_two;
