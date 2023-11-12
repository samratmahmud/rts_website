import React from "react";

const socialPage = [
  {
    name: "Email",
    contact: "info@retain2sustain.com",
  },
  {
    name: "TEL",
    contact: "886-2-25786188",
  },
  {
    name: "FAX",
    contact: "886-2-25796388",
  },
];

function SocialSite() {
  return (
    <section>
      <div className="-mt-[25%] md:-mt-[21%] relative">
        <img className="w-full" src="/picture/Vector (8).png" alt="" />
      </div>
      <div className="container -mt-[15%] md:mb-28 mb-20">
        <div className="flex justify-center relative md:mb-24 mb-14">
          <img
            className="max-w-[220px] md:max-w-xs"
            src="/picture/Group.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8">
          {socialPage.map(({name, contact}, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="md:text-10xl text-4xl leading-9 tracking-[0.54px] font-bold mb-1.5 text-slate-900">
                {name}
              </div>
              <div className="md:text-4xl text-2xl text-slate-900">
                {contact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialSite;
