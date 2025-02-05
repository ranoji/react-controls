const filterYAxisCategories = (categories, startValue, endValue, maxValues = 19) => {
  // Ensure startValue and endValue are included
  const requiredValues = [startValue, endValue];

  // Filter out duplicates and sort the array
  const uniqueCategories = [...new Set(categories)].sort((a, b) => a - b);

  // Calculate the step size to distribute remaining values
  const totalValues = uniqueCategories.length;
  const step = Math.floor((totalValues - 2) / (maxValues - 2));

  // Select values at regular intervals, ensuring start and end are included
  const filteredCategories = [];
  for (let i = 0; i < totalValues; i += step) {
    if (filteredCategories.length >= maxValues) break; // Stop if we reach the max limit
    filteredCategories.push(uniqueCategories[i]);
  }

  // Ensure startValue and endValue are included
  if (!filteredCategories.includes(startValue)) {
    filteredCategories.unshift(startValue);
  }
  if (!filteredCategories.includes(endValue)) {
    filteredCategories.push(endValue);
  }

  // Remove extra values if the array exceeds maxValues
  if (filteredCategories.length > maxValues) {
    filteredCategories.splice(maxValues);
  }

  return filteredCategories.sort((a, b) => a - b);
};
