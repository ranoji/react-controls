function transformDataToArray(data) {
    // Step 1: Group data by date
    let groupedData = {};
    let uniqueKeys = new Set();

    data.forEach(({ date, key, value }) => {
        if (!groupedData[date]) {
            groupedData[date] = {};
        }
        groupedData[date][key] = value;
        uniqueKeys.add(key);
    });

    // Step 2: Sort keys alphabetically to ensure column order consistency
    const sortedKeys = [...uniqueKeys].sort();

    // Step 3: Convert grouped data into an array format
    const result = Object.entries(groupedData).map(([date, values]) => {
        // Extract values in the correct key order
        const rowValues = sortedKeys.map(key => values[key] || 0); // Default to 0 if key is missing
        return [date, ...rowValues];
    });

    return result;
}
