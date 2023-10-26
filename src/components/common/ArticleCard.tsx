import React from "react";

export interface ArticleCardProps {
  thumbnail: string;
  index?: number;
  title?: string;
  content: string;
  theme?: "dark" | "light" | "white";
  size?: "16" | "24";
}

function ArticleCard(props: ArticleCardProps) {
  const {
    thumbnail,
    index,
    title,
    content,
    theme = "light",
    size = "16",
  } = props;
  return (
    <div className="w-full">
      <div className="bg-emerald-600 pb-2.5">
        <img className="w-full" src={thumbnail} alt="" />
      </div>
      <div
        className={`md:p-10 pt-7 pb-11 px-5 ${
          theme === "light" || theme === "white"
            ? `${
                theme === "white" ? "bg-white" : "bg-[rgba(11,_11,_43,_0.05)]"
              } text-slate-900`
            : "bg-slate-900 text-white"
        }`}
      >
        <div
          className={`font-medium text-emerald-600 md:mb-3.5 mb-[18px] ${
            size === "16" ? "text-md" : "text-4xl"
          }`}
        >
          # {index}
        </div>
        <div className="text-4xl font-bold md:mb-2.5 mb-3.5">{title}</div>
        <div
          className={`font-medium ${size === "16" ? "text-md " : "text-4xl"}`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
