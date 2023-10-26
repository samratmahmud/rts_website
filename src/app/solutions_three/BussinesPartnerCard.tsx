import React from "react";

const bussinesCard = [
  {
    thumbnail: "/picture/Group 254.png",
    number: "# 1",
    content: "Partners involved in destocking internal fiber or fabric waste.",
  },
  {
    thumbnail: "/picture/Mask group (5).png",
    number: "# 2",
    content:
      "Partners who want to support a true closed-loop system, whether it involves recycling bottles into new bottles or turning fabric scraps into new fabric.",
  },
  {
    thumbnail: "/picture/AdobeStock_585721685_Preview 1.png",
    number: "# 3",
    content: "Partners who collaborate in reducing textile waste.",
  },
  {
    thumbnail: "/picture/Mask group (6).png",
    number: "# 4",
    content:
      "Businesses that seek to gain value in the circular economy, reducing their products' carbon footprint and carbon taxes.",
  },
];

function BussinesPartnerCard() {
  return (
    <div className="relative z-0 bg-[rgba(11,_11,_43,_0.05)] -mt-3.5">
      <div className="absolute left-0 right-0 lg:bottom-[30%] bottom-[55%] -z-10">
        <img className="w-full" src="/picture/Vector (7).png" alt="" />
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-2 md:gap-10 gap-5 lg:pb-40 pb-16">
          {bussinesCard.map((item, index) => (
            <div key={index}>
              <div className="bg-emerald-600 pb-2.5">
                <img
                  className="w-full lg:min-h-[402px]"
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div className="bg-slate-900 md:p-10 pt-7 pb-10 px-5">
                <div className="md:text-4xl text-md font-bold text-emerald-600 md:mb-6 mb-4">
                  {item.number}
                </div>
                <div className="md:text-4xl text-2xl text-white">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BussinesPartnerCard;
