export const shuffleListItems = <T>(arr: T[]): T[] => {
  const shuffledArr :T[] = [...arr]; // what type is this?
  shuffledArr.sort(() => Math.random() - 0.5);
  return shuffledArr;
};
