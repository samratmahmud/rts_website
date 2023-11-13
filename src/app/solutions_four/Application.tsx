import UserProfile from "@/components/common/Userprofile";
import React from "react";

const pictureGroup = [
  {
    thumbnail: "/picture/Mask group (14).png",
    titleD: "Footwear",
    titleM: "Footwear fabric",
  },
  {
    thumbnail: "/picture/Mask group (15).png",
    titleD: "Outerwear",
    titleM: "Coat and windbreaker fabric",
  },
  {
    thumbnail: "/picture/Mask group (16).png",
    titleD: "Bags",
    titleM: "Bag fabric",
  },
  {
    thumbnail: "/picture/Mask group (17).png",
    titleD: "Outdoor equipment",
    titleM: "Outdoor equipment fabric",
  },
];

function Application() {
  return (
    <section className="mt-[15%]">
      <div className="container">
        <div className="md:text-12xl text-7xl font-bold text-slate-900 md:mb-8 mb-6">
          Applications
        </div>
      </div>
      <div className="flex flex-wrap">
        {pictureGroup.map(({thumbnail, titleD, titleM}, index) => (
          <div key={index} className="relative">
            <img className="w-full" src={thumbnail} alt="" />
            <div className="absolute top-[50%] text-8xl font-[350px] text-white text-center left-0 right-0 -translate-y-[50%] ml-4 lg:ml-0 hidden lg:block">
              {titleD}
            </div>
            <div className="absolute top-[50%] text-lg font-[350px] text-white text-left left-0 right-0 -translate-y-[50%] ml-4 lg:ml-0 lg:hidden">
              {titleM}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Application;
