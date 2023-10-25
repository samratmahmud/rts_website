import UserProfile from "@/components/common/Userprofile";
import FlexComponents from "@/components/common/Userprofile";
import React from "react";

const pictureGroup = [
  {
    pic: "/picture/Mask group (14).png",
    name: "Footwear",
  },
  {
    pic: "/picture/Mask group (15).png",
    name: "Outerwear",
  },
  {
    pic: "/picture/Mask group (16).png",
    name: "Bags",
  },
  {
    pic: "/picture/Mask group (17).png",
    name: "Outdoor equipment",
  },
];

function Application() {
  return (
    <div className="mt-[15%]">
      <div className="container">
        <div className="md:text-12xl text-7xl font-bold text-slate-900 md:mb-8 mb-6">
          Applications
        </div>
      </div>
      <div className="flex flex-wrap">
        {pictureGroup.map((item, index) => (
          <div key={index} className="">
            <div className="relative">
              <img className="w-full" src={item.pic} alt="" />
              <div className="absolute top-[50%] md:text-8xl text-lg font-[350px] text-white lg:text-center left-0 right-0 -translate-y-[50%] ml-4 lg:ml-0">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Application;
