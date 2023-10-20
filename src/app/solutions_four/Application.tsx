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
    <div>
      <div className="relative">
        <div className="mt-80">
          <img src="/picture/Vector (6).svg" alt="" />
        </div>
        <div className="container">
          <div className="absolute -top-52">
            <UserProfile
              pic="/picture/AdobeStock_312925667_Preview 1.png"
              name="Our goals"
              title="Recovery and elasticity of elastic monofilaments trail those commonly used elastic fibers in the industry, such as Spandex. To address these deficiencies, RTS is developing elastic monofilaments that will be more elastic with higher recovery than existing products, while maintaining strength, processability, dyeability, and recyclability."
              p1=" From a design perspective, opting for a mono-material increases textile recyclability—making this material an ideal choice for multiple applications."
            />
          </div>
          <div className="text-12xl font-bold text-slate-900 mb-8 -mt-4">
            Applications
          </div>
        </div>
        <div className="flex flex-wrap">
          {pictureGroup.map((item, index) => (
            <div key={index} className="">
              <div className="relative">
                <img className="w-full" src={item.pic} alt="" />
                <div className=" absolute top-[45%] text-8xl font-[350px] text-white text-center left-0 right-0">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Application;
