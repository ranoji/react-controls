import React from "react";
import XLSX from "xlsx-js-style";

const ETEwtExcelJS = () => {
  const handleExport = async () => {
    // Sample data
    const data = [
      { name: "Alice", age: 22, date: "2024-08-23", percentage: 90 },
      { name: "Bob", age: 25, date: "2024-08-22", percentage: 85 },
      { name: "Charlie", age: 24, date: "2024-08-21", percentage: 88 },
    ];

    // Data for additional tables
    const moreData1 = [
      { name: "David", age: 28, date: "2024-08-20", score1: 95, score2: 85 },
      { name: "Eva", age: 30, date: "2024-08-19", score1: 90, score2: 80 },
    ];

    const moreData2 = [
      {
        name: "Frank",
        age: 32,
        date: "2024-08-18",
        score1: 85,
        score2: 80,
        score3: 75,
      },
      {
        name: "Grace",
        age: 31,
        date: "2024-08-17",
        score1: 88,
        score2: 84,
        score3: 82,
      },
    ];

    // Create a new workbook and worksheet
    const ws = XLSX.utils.aoa_to_sheet([]);

    // Define styles
    const mainHeaderStyle = {
      fill: { fgColor: { rgb: "000080" } }, // Navy blue
      font: { color: { rgb: "FFFFFF" }, sz: 14, bold: true }, // White text color
      alignment: { horizontal: "left", vertical: "left" },
    };

    const subHeaderStyle = {
      fill: { fgColor: { rgb: "000080" } }, // Navy blue
      font: { color: { rgb: "FFFFFF" }, sz: 12, bold: true }, // White text color
      alignment: { horizontal: "left", vertical: "left" },
    };

    const headerStyle = {
      fill: { fgColor: { rgb: "000080" } }, // Navy blue
      font: { color: { rgb: "FFFFFF" }, bold: true }, // White text color
      alignment: { horizontal: "left", vertical: "left" },
    };

    // Add the main header
    XLSX.utils.sheet_add_aoa(ws, [["XXXXXXX XXXXXX XXXXXXXXX"]], {
      origin: "A4",
    });
    ws["!merges"] = [{ s: { r: 3, c: 0 }, e: { r: 3, c: 12 } }];
    ws["A4"].s = mainHeaderStyle;

    // Add two sub-header rows below the main header
    XLSX.utils.sheet_add_aoa(ws, [["Sub-header 1"]], { origin: "A5" });
    ws["!merges"].push({ s: { r: 4, c: 0 }, e: { r: 4, c: 12 } });
    ws["A5"].s = subHeaderStyle;

    XLSX.utils.sheet_add_aoa(ws, [["Sub-header 2"]], { origin: "A6" });
    ws["!merges"].push({ s: { r: 5, c: 0 }, e: { r: 5, c: 12 } });
    ws["A6"].s = subHeaderStyle;

    //blank row
    XLSX.utils.sheet_add_aoa(ws, [[]], {
      origin: `A7`,
    });
    ws["!merges"].push({
      s: { r: 6, c: 0 },
      e: { r: 6, c: 12 },
    });

    // Add the headers for the first two tables
    XLSX.utils.sheet_add_aoa(
      ws,
      [
        [
          "Name",
          "Age",
          "Date",
          "Percentage",
          "",
          "Name",
          "Age",
          "Date",
          "Percentage",
        ],
      ],
      { origin: "A8" }
    );
    ["A8", "B8", "C8", "D8", "F8", "G8", "H8", "I8"].forEach((cell) => {
      ws[cell].s = headerStyle;
    });

    // Add data rows for the first two tables
    data.forEach((item, idx) => {
      XLSX.utils.sheet_add_aoa(
        ws,
        [
          [
            item.name,
            item.age,
            item.date,
            item.percentage,
            "",
            item.name,
            item.age,
            item.date,
            item.percentage,
          ],
        ],
        { origin: `A${9 + idx}` }
      );
    });

    // Blank row after the first two tables
    const startRowForSecondTables = 9 + data.length + 2;

    XLSX.utils.sheet_add_aoa(ws, [["Sub-header 2"]], {
      origin: `A${startRowForSecondTables - 1}`,
    });
    ws["!merges"].push({
      s: { r: startRowForSecondTables - 2, c: 0 },
      e: { r: startRowForSecondTables - 2, c: 12 },
    });

    // Add headers for the next two tables (5 columns and 6 columns)
    XLSX.utils.sheet_add_aoa(
      ws,
      [
        [
          "Name",
          "Age",
          "Date",
          "Score 1",
          "Score 2",
          "",
          "Name",
          "Age",
          "Date",
          "Score 1",
          "Score 2",
          "Score 3",
        ],
      ],
      { origin: `A${startRowForSecondTables}` }
    );
    ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L"].forEach((col) => {
      ws[`${col}${startRowForSecondTables}`].s = headerStyle;
    });

    // Add data rows for the next two tables
    moreData1.forEach((item, idx) => {
      XLSX.utils.sheet_add_aoa(
        ws,
        [
          [
            item.name,
            item.age,
            item.date,
            item.score1,
            item.score2,
            "",
            moreData2[idx]?.name,
            moreData2[idx]?.age,
            moreData2[idx]?.date,
            moreData2[idx]?.score1,
            moreData2[idx]?.score2,
            moreData2[idx]?.score3,
          ],
        ],
        { origin: `A${startRowForSecondTables + 1 + idx}` }
      );
    });

    // Define columns width
    ws["!cols"] = [
      { wpx: 150 },
      { wpx: 80 },
      { wpx: 120 },
      { wpx: 120 },
      { wpx: 100 }, // Empty space between the first two tables
      { wpx: 150 },
      { wpx: 80 },
      { wpx: 120 },
      { wpx: 120 },
      { wpx: 100 }, // Empty space between the last two tables
      { wpx: 120 },
      { wpx: 120 },
    ];

    // Generate the Excel file and trigger the download
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");

    // Convert to binary string and trigger download
    XLSX.writeFile(wb, "Students.xlsx");
  };

  return <button onClick={handleExport}>Export Excel</button>;
};

export default ETEwtExcelJS;

data.forEach((item, rowIndex) => {
        Object.keys(item).forEach((key, colIndex) => {
            const cellAddress = XLSX.utils.encode_cell({ c: colIndex, r: rowIndex + 1 }); // +1 if header row exists
            const cell = worksheet[cellAddress];
            
            if (typeof item[key] === 'number') {
                // Check if the number is positive or negative
                if (item[key] > 0) {
                    // Positive: Set the style to blue
                    cell.s = {
                        font: { color: { rgb: "0000FF" } } // Blue color
                    };
                } else if (item[key] < 0) {
                    // Negative: Set the style to red
                    cell.s = {
                        font: { color: { rgb: "FF0000" } } // Red color
                    };
                }
            }
        });
    });
