"use client";

import { KnightCard } from "@/@types/global";
import Card from "@/components/Card";
import CardStack from "@/components/CardStack";
import {
  baseResourceCards,
  knightCards,
  roadCards,
} from "@/modules/Resources/Resources";
import { shuffleListItems } from "@/utils/utils";
import { useState } from "react";

export default function Home() {
  const [knightCardStack, setKnightCardStack] = useState(() =>
    shuffleListItems(knightCards)
  );
  const [roadCardStack, setRoadCardStack] = useState(() =>
    shuffleListItems(roadCards)
  );
  const [resourceCardStack, setResourceCardStack] = useState(() =>
    shuffleListItems(baseResourceCards)
  );

  const shuffleCards = () => {
    setResourceCardStack(shuffleListItems(baseResourceCards));
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <div>
          <h1 className="px-6 font-bold text-xl mb-2">Market</h1>
        </div>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="card-list">
            {resourceCardStack.slice(0, 5).map((card, index) => (
              <Card description={card as string} imagePath={`${card}.jpeg`} />
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
          <button
            className="w-40 mt-4 p-4 py-2 bg-blue-500 text-white rounded"
            onClick={shuffleCards}
          >
            Refresh Cards
          </button>
        </div>
      </div>
    </main>
  );
}
