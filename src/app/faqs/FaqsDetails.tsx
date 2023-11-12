"use client";
import FaqProps, {faqQuestion} from "@/components/template/FaqProps";
import React from "react";

type QsGroupT = {
  name: string;
  items: faqQuestion[];
};

const QsGroup: QsGroupT[] = [
  {
    name: "Lorem?",
    items: [
      {
        question: "1. Sed ut perspiciatis Sed ut perspiciatis",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        question: "2. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        question: "3. Nemo enim ipsam Nemo enim ipsam",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        question: "4. Sed ut perspiciatis Sed ut perspiciatis",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        question: "5. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        question: "6. Sed ut perspiciatis Sed ut perspiciatis",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        question: "7. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        question: "8. Nemo enim ipsam Nemo enim ipsam ",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
    ],
  },
  {
    name: "Ipsum?",
    items: [
      {
        question: "1. Sed ut perspiciatis Sed ut perspiciatis",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        question: "2. Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        question: "3. Nemo enim ipsam Nemo enim ipsam ",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
      {
        question: "4. Sed ut perspiciatis Sed ut perspiciatis",
        answer:
          "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      },
    ],
  },
];

function FaqsDetails() {
  return (
    <section className="md:mb-52 mb-28 relative z-10">
      <div className="absolute md:bottom-[22%] bottom-[43%] -z-10">
        <img className="w-full" src="/picture/Vector (9).png" alt="" />
      </div>
      <div className="-mt-[27%] md:-mt-[21%]">
        <img className="w-full" src="/picture/Vector (8).png" alt="" />
      </div>
      <div className="container -mt-[15%]">
        <div className="flex flex-col md:gap-24 gap-14">
          {QsGroup.map(({name, items}, index) => (
            <div key={index}>
              <div className="md:text-12xl text-7xl font-bold md:mb-9 mb-6">
                {name}
              </div>
              <div className="flex flex-col md:gap-6 gap-2">
                {items.map((item, index) => (
                  <FaqProps {...item} key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqsDetails;
