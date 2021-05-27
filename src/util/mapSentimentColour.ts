export const mapSentimentColour = (sentiment: string): string => {
  const sentimentToColourMap: any = {
    positive: 'green',
    neutral: 'gray',
    negative: 'red'
  };

  return sentimentToColourMap[sentiment];
}

