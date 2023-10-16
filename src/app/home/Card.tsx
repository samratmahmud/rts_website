import Button from "@/components/common/Button";
import CardTop from "@/components/template/CardTop";
import React from "react";

function Card() {
  return (
    <div>
      <div>
        <CardTop />
      </div>
      <div className="container mb-14">
        <div aria-label="Cards 1" className="flex items-center mb-9">
          <div className="bg-emerald-600 pl-20 pr-12 py-20 max-w-[552px] -mt-20 z-0 ml-4">
            <div className="text-19xl font-bold text-white text-right mb-3">
              1.
            </div>
            <div className="text-lg font-medium text-white mb-10 max-w-[270px]">
              RTS Solutions to #Lightweighting
            </div>
            <div className="text-15xl font-medium text-white mb-5">
              Low Carbon Footprint Monofilament
            </div>
            <div className="text-lg text-white mb-14">
              Hollow monofilament's lightweight nature reduces energy
              consumption, leading to a decrease in carbon emissions.
            </div>
            <div
              role="button"
              className="bg-slate-900 text-emerald-600 rounded-full inline-block"
            >
              <Button name="Find out More" />
            </div>
          </div>
          <div className="w-full -mr-4">
            <img src="/picture/AdobeStock_490732559_Preview.png" alt="" />
          </div>
        </div>
        <div aria-label="Card 2" className="relative">
          <div className="flex gap-14 items-center mb-24">
            <div className=" max-w-[482px] py-10 px-5 ml-6 col-span-5">
              <div className="text-19xl font-bold text-emerald-600 mb-5">
                2.
              </div>
              <div className="text-lg font-medium text-emerald-600 mb-10">
                RTS Solutions to <br /> #Addressing the current <br />{" "}
                challenges in textile recycling
              </div>
              <div className="text-15xl font-medium text-slate-900 mb-5">
                Monofilament With Greater Inclusivity{" "}
              </div>
              <div className="text-lg text-slate-900 mb-8">
                Adopting a new method for mechanical recycling to overcome the
                challenges posed by synthetic textiles.
              </div>
              <div
                role="button"
                className="bg-emerald-600 text-white inline-block rounded-full"
              >
                <Button name="Find out More" />
              </div>
            </div>
            <div className="mr-14 col-span-6">
              <img src="/picture/RTS_RetainToSustain45 1.png" alt="" />
            </div>
          </div>
          <div className="absolute -bottom-14 -mx-4">
            <img className="w-full" src="/picture/Vector.svg" alt="" />
          </div>
        </div>

        <div aria-label="Cards 3" className="flex items-center mb-3">
          <div className="max-w-[604px] -ml-4">
            <img
              src="/picture/martin-katler-Y4fKN-RlMV4-unsplash 9.png"
              alt=""
            />
          </div>
          <div className="bg-slate-900 pl-20 pr-10 pt-7 pb-20 max-w-[602px]">
            <div className="text-19xl font-bold text-white mb-7">3.</div>
            <div className="text-lg font-medium text-emerald-600 mb-10">
              RTS Solutions to <br /> #Embracing a mono-material approach
            </div>
            <div className="text-15xl font-medium text-white mb-5">
              Monofilaments For Improved Recyclability
            </div>
            <div className="text-lg text-white mb-14 max-w-[442px]">
              Mono-material designs that promote product recyclability.
            </div>
            <div
              role="button"
              className="bg-emerald-600 text-slate-900 rounded-full inline-block"
            >
              <Button name="Find out More" />
            </div>
          </div>
        </div>
        <div aria-label="Card 2" className="relative">
          <div className="flex gap-5 items-center mt-24">
            <div className=" max-w-[482px] py-10 px-5 ml-6 col-span-5">
              <div className="text-19xl font-bold text-emerald-600 mb-7">
                4.
              </div>
              <div className="text-lg font-medium text-emerald-600 mb-12">
                RTS Solutions to <br /> #Microfiber shedding
              </div>
              <div className="text-15xl font-medium text-slate-900 mb-5">
                Monofilament With Higher Durability and Low Shedding
              </div>
              <div className="text-lg text-slate-900 mb-8">
                Combating microfiber shedding with our fine, resilient
                monofilament.
              </div>
              <div
                role="button"
                className="bg-emerald-600 text-white inline-block rounded-full"
              >
                <Button name="Find out More" />
              </div>
            </div>
            <div className="mr-14 col-span-6">
              <img src="/picture/RTS_RetainToSustain12 1.png" alt="" />
            </div>
          </div>
          <div className="absolute -top-24 -z-10 -mx-4">
            <img src="/picture/Vector (1).svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
