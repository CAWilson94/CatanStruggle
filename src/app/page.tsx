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
  const [resourceCardStack, setResourceCardStack] = useState(
    marketBaseDeck(baseResourceCards)
  );

  const shuffleCards = () => {
    let currentResources: ResourceDecks = {
      mainDeck: shuffleListItems(resourceCardStack.mainDeck),
      discardPile: resourceCardStack.market,
      market: resourceCardStack.mainDeck.splice(0, 5),
    };
    setResourceCardStack(currentResources);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="px-6 font-bold text-xl mb-2 ml-1">Market</h1>
          </div>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="card-list">
              {resourceCardStack.market.map((card, index) => (
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
          <div>
            <div className="discard-pile">
              <Card
                description={resourceCardStack.discardPile[0] as string}
                imagePath={`${resourceCardStack.discardPile[0]}.jpeg`}
              />
              <style jsx>{`
                .discard-pile {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: start;
                  padding: 16px;
                }
              `}</style>
            </div>
            <h1 className="px-6 font-bold text-xl mb-2 ml-1">Discard Pile</h1>
          </div>
        </div>
        <div className="main-deck">
          <Card
            description={resourceCardStack.mainDeck[0] as string}
            imagePath={`${resourceCardStack.mainDeck[0]}.jpeg`}
          />
          <style jsx>{`
            .main-deck {
              padding-top: 60px;
            }
          `}</style>
        </div>
      </div>
    </main>
  );
}
