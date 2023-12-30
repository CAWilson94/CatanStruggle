"use client";
import { ResourceCard } from "@/@types/global";
import Card from "@/components/Card";
import ResourcesBoard from "@/components/ResourcesBoard";
import {
  ResourceDecks,
  baseResourceCards,
  marketBaseDeck,
} from "@/modules/Resources/Resources";
import { shuffleListItems } from "@/utils/utils";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ResourcesBoard />
    </main>
  );
  /**
   * Next task -- get the cards board out as a separate component from page. Maybe call it games board.
   * Would be good to have the cards smaller
   * Need to have knights, settlements and roads out under this line.
   * A player 1 and a player 2 hand component required also.
   */
}
