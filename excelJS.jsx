import React from "react";
import ExcelJS from "exceljs";
//import logoImage from "../excel/"; // Adjust the path to your logo image

const ETEwtExcelJS = () => {
  const handleExport = async () => {
    // Sample data
    const data = [
      { name: "Alice", age: 22, date: "2024-08-23", percentage: 90 },
      { name: "Bob", age: 25, date: "2024-08-22", percentage: 85 },
      { name: "Charlie", age: 24, date: "2024-08-21", percentage: 88 },
    ];

    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Students");

    // Add the logo image
    const response = await fetch("/assets/images/logofav.jpeg");
    const logoBlob = await response.blob();
    const logoArrayBuffer = await logoBlob.arrayBuffer();
    const imageId = workbook.addImage({
      buffer: logoArrayBuffer,
      extension: "png",
    });
    // worksheet.addImage(imageId, "A1:D3"); // Adjust the position as needed

    // Add the college name below the image
    worksheet.mergeCells("A4:D4");
    worksheet.getCell("A4").value = "Your College Name";
    worksheet.getCell("A4").alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell("A4").font = { size: 14, bold: true };

    // Add the headers
    worksheet.addRow([]); // Adding an empty row for spacing
    const headerRow = worksheet.addRow(["Name", "Age", "Date", "Percentage"]);

    // Style the header
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "ADD8E6" }, // Light blue color
      };
      cell.font = { bold: true };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // Add data rows
    data.forEach((item) => {
      worksheet.addRow([item.name, item.age, item.date, item.percentage]);
    });

    // Auto-fit columns
    worksheet.columns.forEach((column) => {
      const maxLength = Math.max(
        ...column.values.map((val) => (val ? val.toString().length : 10))
      );
      column.width = maxLength + 2;
    });

    // Generate the Excel file and trigger the download
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "Students.xlsx";
    document.body.appendChild(link);
    link.click();

    // Clean up and remove the link element
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return <button onClick={handleExport}>Export Excel</button>;
};

export default ETEwtExcelJS;
