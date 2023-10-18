import Button from "@/components/common/Button";
import CardTop from "@/components/template/CardTop";
import React from "react";

function Card() {
  return (
    <div className="bg-gray-300">
      <div>
        <CardTop />
      </div>
      <div className="mb-14 relative z-10">
        <div
          aria-label="Cards 1"
          className="lg:flex items-center mb-11 bg-card1 lg:[background-image:none] bg-no-repeat bg-cover px-4 lg:px-0"
        >
          <div className="bg-emerald-600 md:pl-20 md:pr-12 px-5 md:py-20 pt-7 pb-14 lg:max-w-[602px] md:-mt-20 z-0 lg:ml-14 -translate-y-[20%] md:translate-y-0">
            <div className="md:text-19xl text-16xl font-bold text-white text-right md:mb-3 mb-1">
              1.
            </div>
            <div className="md:text-lg text-md font-medium text-white md:mb-10 mb-7">
              RTS Solutions to <br /> #Lightweighting
            </div>
            <div className="md:text-15xl text-9xl font-medium md:text-white text-slate-900 mb-6">
              Low Carbon Footprint Monofilament
            </div>
            <div className="md:text-lg text-md text-white md:mb-[60px] mb-10">
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
          <div className="hidden lg:block">
            <img
              className="w-full"
              src="/picture/AdobeStock_490732559_Preview.png"
              alt=""
            />
          </div>
          <div className="-mx-4 lg:hidden">
            <img className="w-full" src="/picture/Vector (10).svg" alt="" />
          </div>
        </div>
        <div aria-label="Card 2" className="lg:relative">
          <div className="lg:flex gap-20 items-center mb-24">
            <div className="max-w-[482px] py-10 px-5 ml-24 col-span-5">
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
              <div className="text-lg text-slate-900 mb-8 max-w-[402px]">
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
            <div className="col-span-6">
              <img src="/picture/RTS_RetainToSustain45 1.png" alt="" />
            </div>
          </div>
          <div className="absolute -bottom-14">
            <img className="w-screen" src="/picture/Vector.svg" alt="" />
          </div>
        </div>
        <div aria-label="Cards 3" className="lg:flex items-center mb-3">
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
        <div aria-label="Card 4" className="relative">
          <div className="lg:flex gap-5 items-center mt-24">
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
          <div className="absolute -top-24 -z-10">
            <img src="/picture/Vector (1).svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
