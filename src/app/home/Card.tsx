import Button from "@/components/common/Button";
import CardTop from "@/components/template/CardTop";
import React from "react";

function Card() {
  return (
    <div className="">
      <div>
        <CardTop />
      </div>
      <div className="lg:mb-14 relative z-10">
        <div
          aria-label="Cards 1"
          className="lg:flex items-center lg:mb-11 bg-card1 lg:[background-image:none] bg-no-repeat bg-cover px-4 lg:px-0"
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
          <div className="-mx-4 lg:hidden pb-[71px] -mt-[20%] md:-mt-0">
            <img className="w-full" src="/picture/Vector (10).svg" alt="" />
          </div>
        </div>
        <div
          aria-label="Card 2"
          className="lg:relative bg-card2 lg:[background-image:none] bg-no-repeat bg-cover z-0 relative"
        >
          <div className="lg:flex gap-20 items-center mb-24 -translate-y-[20%] lg:-translate-y-0">
            <div className="lg:max-w-[482px] bg-white md:py-10 pt-[77px] pb-14 px-5 lg:ml-24 mx-4 lg:mx-0 z-20 relative">
              <div className="md:text-19xl text-16xl font-bold md:text-emerald-600 text-slate-900 md:mb-5 mb-2 text-right md:text-left">
                2.
              </div>
              <div className="md:text-lg text-md font-medium text-emerald-600 md:mb-10 mb-7">
                RTS Solutions to <br /> #Addressing the current <br />
                challenges in textile recycling
              </div>
              <div className="md:text-15xl text-9xl font-medium text-slate-900 mb-6">
                Monofilament <br /> With Greater Inclusivity{" "}
              </div>
              <div className="md:text-lg text-md text-slate-900 md:mb-8 mb-10 lg:max-w-[360px]">
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
            <div className="col-span-6 hidden lg:block">
              <img src="/picture/RTS_RetainToSustain45 1.png" alt="" />
            </div>
            <div className="absolute -bottom-14 hidden lg:block z-10">
              <img className="w-screen" src="/picture/Vector.svg" alt="" />
            </div>
          </div>

          <div className="lg:hidden -mt-60 pb-24">
            <img className="w-full" src="/picture/Vector (4).png" alt="" />
          </div>
        </div>
        <div
          aria-label="Cards 3"
          className="lg:flex items-center bg-card3 bg-no-repeat bg-cover lg:[background-image:none] lg:mr-24"
        >
          <div className="max-w-[604px hidden lg:block">
            <img
              className="w-screen"
              src="/picture/martin-katler-Y4fKN-RlMV4-unsplash 9.png"
              alt=""
            />
          </div>
          <div className="bg-slate-900 md:pl-20 md:pr-10 px-5 pt-7 md:pb-20 pb-14 lg:max-w-[602px] mx-4 lg:mx-0 -translate-y-[13%] lg:-translate-y-0">
            <div className="md:text-19xl text-16xl font-bold text-white md:mb-7 mb-2 text-right lg:text-left">
              3.
            </div>
            <div className="md:text-lg md:text-md font-medium text-emerald-600 md:mb-10 mb-7">
              RTS Solutions to <br /> #Embracing a mono-material approach
            </div>
            <div className="md:text-15xl text-9xl font-medium text-white mb-6">
              Monofilaments For Improved Recyclability
            </div>
            <div className="text-lg text-white md:mb-14 mb-10 lg:max-w-[442px]">
              Mono-material designs that promote product recyclability.
            </div>
            <div
              role="button"
              className="bg-emerald-600 text-slate-900 rounded-full inline-block"
            >
              <Button name="Find out More" />
            </div>
          </div>
          <div className="pt-16 pb-9 lg:hidden">
            <img className="w-full" src="/picture/Vector (4).png" alt="" />
          </div>
        </div>
        <div
          aria-label="Card 4"
          className="lg:relative bg-card4 bg-no-repeat bg-cover lg:[background-image:none] pb-16"
        >
          <div className="lg:flex gap-10 justify-between items-center lg:mt-24">
            <div className="lg:max-w-[482px] md:py-10 pb-[72px] pt-7 px-5 lg:ml-6 mx-4 lg:mx-0 bg-white -z-10 -translate-y-[13%] lg:-translate-y-0">
              <div className="md:text-19xl text-16xl font-bold lg:text-emerald-600 text-slate-900 md:mb-7 mb-2 text-right lg:text-left">
                4.
              </div>
              <div className="md:text-lg text-md font-medium text-emerald-600 md:mb-12 mb-7">
                RTS Solutions to <br /> #Microfiber shedding
              </div>
              <div className="md:text-15xl text-9xl font-medium text-slate-900 mb-6">
                Monofilament With Higher Durability and Low Shedding
              </div>
              <div className="md:text-lg text-md text-slate-900 md:mb-8 mb-10">
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
            <div className="hidden lg:block lg:mr-[137px]">
              <img src="/picture/RTS_RetainToSustain12 1.png" alt="" />
            </div>
          </div>
          <div className="absolute -top-24 -z-10 hidden lg:block w-full">
            <img className="w-full" src="/picture/Vector (1).svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
