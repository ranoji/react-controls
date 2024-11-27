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
