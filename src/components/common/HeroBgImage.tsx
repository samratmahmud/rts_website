import React from "react";

interface HeroText {
  title: string;
}

function HeroBgImage(props: HeroText) {
  const {title} = props;
  return (
    <div>
      <div className="container">
        <div className="md:text-10xl text-5xl text-white max-w-[670px] md:py-[138px] py-16">
          {title}
        </div>
      </div>
    </div>
  );
}

export default HeroBgImage;
