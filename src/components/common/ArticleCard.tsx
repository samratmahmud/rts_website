import React from "react";

export interface ArticleCardProps {
  thumbnail: string;
  index?: number;
  title: string;
  content: string;
  theme?: "dark" | "light";
}

function ArticleCard(props: ArticleCardProps) {
  const {thumbnail, index, title, content, theme = "light"} = props;
  return (
    <div className="w-full">
      <div className="bg-emerald-600 pb-2.5">
        <img className="w-full" src={thumbnail} alt="" />
      </div>
      <div
        className={`md:p-10 py-7 px-5 ${
          theme === "light"
            ? "bg-[rgba(11,_11,_43,_0.05)] text-slate-900"
            : "bg-slate-900 text-white"
        }`}
      >
        <div className="text-md font-medium text-emerald-600 md:mb-3.5 mb-[18px]">
          # {index}
        </div>
        <div className="text-4xl font-bold md:mb-2.5 mb-3.5">{title}</div>
        <div className="text-md font-medium">{content}</div>
      </div>
    </div>
  );
}

export default ArticleCard;
