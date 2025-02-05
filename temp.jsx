const getLimitedRange = (startIndex, endIndex) => {
  const totalRange = endIndex - startIndex + 1;

  if (totalRange <= 15) {
    return timeIntervals.slice(startIndex, endIndex + 1);
  }

  const result = [timeIntervals[startIndex]]; // Always include start
  const step = (endIndex - startIndex) / (15 - 2); // Step for intermediate values

  for (let i = 1; i < 14; i++) {
    const index = Math.round(startIndex + i * step);
    result.push(timeIntervals[index]);
  }

  result.push(timeIntervals[endIndex]); // Always include end
  return [...new Set(result)];
};
