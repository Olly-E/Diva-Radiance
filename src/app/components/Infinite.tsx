"use client";

import React from "react";

import { INFINITY_CARD_DATA, INFINITY_CARD_DATA2 } from "../utils/constant";
import ItemCardMini from "./ItemCardMini";

export const Infinite = () => {
  return (
    <div className="relative z-40 lg:mx-auto box-border flex items-center w-full overflow-hidden px-3 ">
      <div className=" z-[100] w-full" />
      <div className="flex items-center gap-16">
        <div className="flex ribbon items-center gap-16">
          {INFINITY_CARD_DATA.map((card) => (
            <ItemCardMini
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </div>
        <div className="flex ribbon items-center gap-16">
          {INFINITY_CARD_DATA.map((card) => (
            <ItemCardMini
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </div>
      </div>
      <style jsx global>{`
        .ribbon {
          animation: animate 18s linear infinite;
        }
        .reverse-ribbon {
          animation: animate 18s linear infinite reverse;
        }
        @keyframes animate {
          0% {
            transform: translateX(1%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export const Infinite2 = () => {
  return (
    <div className="relative z-40 lg:mx-auto box-border flex items-center w-full overflow-hidden px-3 ">
      <div className=" z-[100] w-full" />
      <div className="flex items-center gap-16">
        <div className="flex reverse-ribbon items-center gap-16">
          {INFINITY_CARD_DATA2.map((card) => (
            <ItemCardMini
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </div>
        <div className="flex reverse-ribbon items-center gap-16">
          {INFINITY_CARD_DATA2.map((card) => (
            <ItemCardMini
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
