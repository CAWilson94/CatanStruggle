"use client";

import { KnightCard } from "@/@types/global";
import Card from "@/components/Card";
import { AllCards, allCards } from "@/modules/Resources/Resources";
import { shuffleListItems } from "@/utils/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [cards, setCards] = useState(() => shuffleListItems(allCards));

  const shuffleCards = () => {
    setCards(shuffleListItems(allCards));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <div>
          <h1 className="px-6 font-bold text-xl mb-2">Market</h1>
        </div>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="card-list">
            {cards.slice(0, 5).map((card, index) => (
              <CardItem key={index} card={card} />
            ))}
            <style jsx>{`
              .card-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                padding: 16px; // Adjust as needed
              }
            `}</style>
          </div>
        </div>
        <div className="px-6">
        <button className="w-40 mt-4 p-4 py-2 bg-blue-500 text-white rounded" onClick={shuffleCards}>
            Refresh Cards
          </button>
        </div>
        
      </div>
    </main>
  );
}

interface CardItemProps {
  card: AllCards;
}

const CardItem = ({ card }: CardItemProps) => {
  return (
    <div className="card-item">
      {card.hasOwnProperty("ABType") ? (
        // handle knight or road card
        <Card
          description={(card as KnightCard<"A" | "B">).description}
          points={(card as KnightCard<"A" | "B">).points}
          imagePath="sheep.jpeg"
        />
      ) : (
        // handle resource card
        <Card
          description={card as string}
          points={0}
          imagePath={`${card}.jpeg`}
        />
      )}
      <style jsx>{`
        .card-item {
          margin: 8px; // Adjust as needed
        }
      `}</style>
    </div>
  );
};
