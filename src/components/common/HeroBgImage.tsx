import React from "react";

interface HeroText {
  title: string;
  width?: "false" | "true";
}

function HeroBgImage(props: HeroText) {
  const {title, width = "false"} = props;
  return (
    <div>
      <div className="container">
        <div
          className={`md:text-10xl text-5xl text-white md:py-[138px] py-16 ${
            width === "false" ? "max-w-[700px]" : "max-w-[555px]"
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default HeroBgImage;
