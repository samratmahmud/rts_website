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
      <div className="container -mt-[15%] mb-28">
        <div className="flex justify-center relative mb-24">
          <img src="/picture/Group.png" alt="" />
        </div>
        <div className="flex flex-col gap-8">
          {socialPage.map(({name, contact}, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-10xl leading-9 tracking-[0.54px] font-bold mb-1.5 text-slate-900">
                {name}
              </div>
              <div className="text-4xl text-slate-900">{contact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialSite;
