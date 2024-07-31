import React from "react";
import ExcelJS from "exceljs";

const ExportToExcel = () => {
  const data = [
    { name: "John Doe", subject: "Math", percentage: 78, status: "Pass" },
    { name: "Jane Doe", subject: "Science", percentage: 45, status: "Fail" },
    { name: "Jim Beam", subject: "History", percentage: 65, status: "Pass" },
    {
      name: "Jake Blues",
      subject: "Geography",
      percentage: 38,
      status: "Fail",
    },
  ];

  const columns = [
    { header: "Name", key: "name" },
    { header: "Subject", key: "subject" },
    { header: "Percentage", key: "percentage" },
    { header: "Status", key: "status" },
  ];

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    // Define columns with header styles
    worksheet.columns = columns.map((col) => ({
      header: col.header,
      key: col.key,
      width: 20,
    }));

    // Add rows and apply conditional formatting
    data.forEach((item) => {
      const row = worksheet.addRow(item);

      // Apply conditional formatting for Percentage
      const percentageCell = row.getCell("percentage");
      if (item.percentage > 50) {
        percentageCell.font = { color: { argb: "FF00FF00" } }; // Green
      } else {
        percentageCell.font = { color: { argb: "FFFF0000" } }; // Red
      }

      // Apply conditional formatting for Status
      const statusCell = row.getCell("status");
      if (item.status === "Pass") {
        statusCell.font = { color: { argb: "FF00FF00" } }; // Green
      } else {
        statusCell.font = { color: { argb: "FFFF0000" } }; // Red
      }
    });

    // Apply header styles
    worksheet.getRow(1).eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFADD8E6" }, // Light Blue background
      };
      cell.font = {
        color: { argb: "FFFFFFFF" }, // White font color
        bold: true,
      };
    });

    // Write the workbook to buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a blob from the buffer
    const blob = new Blob([buffer], { type: "application/octet-stream" });

    // Create a link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "students.xlsx";

    // Append link to body
    document.body.appendChild(link);

    // Trigger download
    link.click();

    // Remove link from body
    document.body.removeChild(link);
  };

  return <button onClick={exportToExcel}>Export to Excel</button>;
};

export default ExportToExcel;
