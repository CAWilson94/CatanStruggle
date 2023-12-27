export enum ResourceCard {
  Brick = "Brick",
  Sheep = "Sheep",
  Wheat = "Wheat",
  Ore = "Ore",
  Wood = "Wood",
}

export interface RoadCard<T extends "A" | "B"> { 
    ABType: T,
    points:  number;
    description: string;
}

export const roadCardA: RoadCard<"A"> = {
    ABType: "A",
    points: 1,
    description: "Road"
};

export const roadCardB: RoadCard<"B"> = {
    ABType: "B",
    points: 0,
    description: "Road"
};

export interface KnightCard<T extends "A" | "B"> { 
    ABType: T,
    points:  number;
    description: string;
}

export const KnightCardA: RoadCard<"A"> = {
    ABType: "A",
    points: 1,
    description: "Knight",
};

export const KnightCardB: RoadCard<"B"> = {
    ABType: "B",
    points: 0,
    description: "Knight",
};


