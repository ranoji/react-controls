import XLSX from "xlsx";

export const generateExcel = () => {
  // Input JSON data
  const jsonData = [
    { type: "aaa", data: ["2023-12-01 10:00", 25] },
    { type: "bbb", data: ["2023-12-01 10:00", 60] },
    { type: "aaa", data: ["2023-12-01 11:00", 28] },
    { type: "bbb", data: ["2023-12-01 11:00", 55] },
  ];

  // Step 1: Extract unique times and types
  const uniqueTimes = [...new Set(jsonData.map((item) => item.data[0]))];
  const uniqueTypes = [...new Set(jsonData.map((item) => item.type))];

  // Step 2: Initialize the formatted data
  const formattedData = [];

  // Add the header row (Time + Types as columns)
  const headerRow = ["Time", ...uniqueTypes];
  formattedData.push(headerRow);

  // Add the data rows
  uniqueTimes.forEach((time) => {
    const row = [time]; // First column is the time
    uniqueTypes.forEach((type) => {
      // Find the matching value for the type and time
      const matchingItem = jsonData.find(
        (item) => item.type === type && item.data[0] === time
      );
      row.push(matchingItem ? matchingItem.data[1] : ""); // Add value or empty cell
    });
    formattedData.push(row);
  });

  // Step 3: Convert to Excel worksheet format
  const worksheet = XLSX.utils.aoa_to_sheet(formattedData);

  // Step 4: Create workbook and append worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Step 5: Export the file
  XLSX.writeFile(workbook, "NestedArrayDataFormatted.xlsx");
};
