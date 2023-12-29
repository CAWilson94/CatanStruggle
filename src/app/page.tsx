"use client";

import Card from "@/components/Card";
import {
  ResourceDecks,
  baseResourceCards,
  marketBaseDeck,
} from "@/modules/Resources/Resources";
import { shuffleListItems } from "@/utils/utils";
import { useState } from "react";

export default function Home() {

  const resourceBaseGameCards: ResourceDecks = marketBaseDeck(baseResourceCards);
  
  const [resourceCardStack, setResourceCardStack] = useState(() =>
    shuffleListItems(resourceBaseGameCards.mainDeck)
  );

  const shuffleCards = () => {
    setResourceCardStack(shuffleListItems(resourceBaseGameCards.mainDeck));
  };



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div>
            <h1 className="px-6 font-bold text-xl mb-2">Market</h1>
          </div>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="card-list">
              {resourceBaseGameCards.market.map((card, index) => (
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
        <div>
          <Card description={resourceBaseGameCards.mainDeck[0] as string} imagePath={`${resourceBaseGameCards.mainDeck[0]}.jpeg`} />
        </div>
      </div>
    </main>
  );
}

