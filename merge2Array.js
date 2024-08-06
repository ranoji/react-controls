const mergeArrays = (arr1, arr2) => {
  const mergedMap = new Map();

  // Helper function to add or update an entry in the map
  const addToMap = (item) => {
    const { date, ...rest } = item;
    if (!mergedMap.has(date)) {
      mergedMap.set(date, { date });
    }
    mergedMap.set(date, { ...mergedMap.get(date), ...rest });
  };

  // Add items from the first array
  arr1.forEach(addToMap);

  // Add items from the second array
  arr2.forEach(addToMap);

  // Convert map to array
  return Array.from(mergedMap.values());
};

const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);
