const transformData = (input) => {
    return input.reduce((acc, obj) => {
        // Process each object
        Object.entries(obj).forEach(([key, value]) => {
            // Rename 'field1' to 'renamedField1'
            const newKey = key === "field1" ? "renamedField1" : key;

            // Initialize array if it doesn't exist
            if (!acc[newKey]) {
                acc[newKey] = [];
            }
            // Push value to the new key
            acc[newKey].push(value);

            // Add a new key dynamically, e.g., 'newFieldX'
            const newFieldKey = "newFieldX";
            if (!acc[newFieldKey]) {
                acc[newFieldKey] = [];
            }
            acc[newFieldKey].push(value + 100); // Example transformation for the new field
        });
        return acc;
    }, {});
};


class Utils {
    /**
     * Find the lower and upper bounds for a modified target value in a series starting from a given index.
     *
     * @param {number[]} series - The array in which to find bounds.
     * @param {number} startIndex - The index from where to start the search.
     * @returns {[number, number]} - A tuple containing the lower bound index and the upper bound index.
     */
    static findBounds(series, startIndex) {
        // Find the minimum value using Math.min
        const minValue = Math.min(...series);

        // Find the index of the minimum value
        const minIndex = series.indexOf(minValue);

        // Calculate the target as the minimum value * 1.05
        const target = minValue * 1.05;

        let lowerBoundIndex = null;
        let upperBoundIndex = null;

        // Find the lower bound (left side)
        for (let i = startIndex - 1; i >= 0; i--) {
            if (target < series[i]) {
                break;
            }
            lowerBoundIndex = i;
        }

        // Find the upper bound (right side)
        for (let i = startIndex; i < series.length; i++) {
            if (target < series[i]) {
                upperBoundIndex = i;
                break;
            }
        }

        return [lowerBoundIndex, upperBoundIndex];
    }
}

// Example Usage
const series = [23.3, 45, 6, 54, 3, 2, 6, 8, 56.7, 87, 9];
const startIndex = 5;

const [lowerBound, upperBound] = Utils.findBounds(series, startIndex);

console.log("Lower Bound Index:", lowerBound); // Example output: 4
console.log("Upper Bound Index:", upperBound); // Example output: 6
