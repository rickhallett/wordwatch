export const mapSentimentColour = (sentiment: number): string => {
  if (sentiment > 75) return "green";
  if (sentiment > 50) return "gray";
  return "red";
};
