export const mapSentimentColour = (sentiment: number): string => {
  if (sentiment > 50) return "green";
  if (sentiment > 25) return "gray";
  return "red";
};
