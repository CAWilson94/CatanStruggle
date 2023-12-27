import { KnightCard, ResourceCard, RoadCard } from "@/@types/global";

const createRoadCards = (): RoadCard<"A" | "B">[] => {
  // Function to create an array of RoadCards
  const createRoadCardArray = <T extends "A" | "B">(
    ABType: T,
    length: number
  ): RoadCard<T>[] => {
    return Array.from({ length }, (_, index) => ({
      ABType,
      points: ABType === "A" ? 1 : 0,
      description: `RoadCard`,
    }));
  };
  // Create arrays of RoadCards for "A" and "B" types
  const roadCardsA: RoadCard<"A">[] = createRoadCardArray("A", 5);
  const roadCardsB: RoadCard<"B">[] = createRoadCardArray("B", 4);
  // Full array of cards for A and B type roads
  return [...roadCardsA, ...roadCardsB];
};

const createKnightCards = (): KnightCard<"A" | "B">[] => {
    // Function to create an array of RoadCards
    const createKnightCardArray = <T extends "A" | "B">(
      ABType: T,
      length: number
    ): KnightCard<T>[] => {
      return Array.from({ length }, (_, index) => ({
        ABType,
        points: ABType === "A" ? 1 : 0,
        description: `Knight`,
      }));
    };
    // Create arrays of RoadCards for "A" and "B" types
    const knightCardsA: RoadCard<"A">[] = createKnightCardArray("A", 3);
    const knightCardsB: RoadCard<"B">[] = createKnightCardArray("B", 2);
    // Full array of cards for A and B type roads
    return [...knightCardsA, ...knightCardsB];
  };

const createBaseGameResourceCards = (): string[] => { 
    const createResourceCardArray = (length: number, resourceName: string): string[] => { 
        return Array.from({length}, (_, index) => (resourceName));
    }
    const brickResources: string[] = createResourceCardArray(11, ResourceCard.Brick);
    const woodResources: string[] = createResourceCardArray(11, ResourceCard.Wood);
    const sheepResources: string[] = createResourceCardArray(15, ResourceCard.Sheep);
    const wheatResources: string[] = createResourceCardArray(15, ResourceCard.Wheat);
    const OreResources: string[] = createResourceCardArray(15, ResourceCard.Ore);
    return [...brickResources, ...woodResources, ...sheepResources, ...wheatResources, ...OreResources];
}

export const knightCards: KnightCard<"A"|"B">[] = createKnightCards();
export const roadCards: RoadCard<"A"|"B">[] = createRoadCards();
export const baseResourceCards: string[] = createBaseGameResourceCards();

export type AllCards = KnightCard<"A" | "B"> | RoadCard<"A" | "B"> | string;

export const allCards: AllCards[] = [
    ...knightCards,
    ...roadCards,
    ...baseResourceCards,
];
