import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ExportToExcel = () => {
  const data = [
    { name: 'John Doe', age: 28, city: 'New York' },
    { name: 'Jane Doe', age: 32, city: 'Chicago' },
    // Add more data here
  ];

  const columns = [
    { header: 'Name', key: 'name' },
    { header: 'Age', key: 'age' },
    { header: 'City', key: 'city' },
  ];

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();

    // Create worksheet data
    const wsData = [
      ['Main Header'], // Main header row
      columns.map(col => col.header), // Column headers row
      ...data.map(item => columns.map(col => item[col.key])) // Data rows
    ];

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Merge the main header
    ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: columns.length - 1 } }];

    // Apply basic styling
    const range = XLSX.utils.decode_range(ws['!ref']);
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = { c: C, r: R };
        const cellRef = XLSX.utils.encode_cell(cellAddress);
        if (!ws[cellRef]) continue;

        if (!ws[cellRef].s) ws[cellRef].s = {};

        if (R === 0) {
          // Main header style
          ws[cellRef].s = {
            font: { bold: true, color: { rgb: "FFFFFF" } },
            alignment: { horizontal: 'center', vertical: 'center' },
            fill: { fgColor: { rgb: '000080' } }
          };
        } else if (R === 1) {
          // Column headers style
          ws[cellRef].s = {
            font: { bold: true, color: { rgb: '0000FF' } },
            alignment: { horizontal: 'center', vertical: 'center' }
          };
        } else {
          // Data rows style
          const isLightBlue = (R - 2) % 2 === 0;
          ws[cellRef].s = {
            fill: { fgColor: { rgb: isLightBlue ? 'DDEBF7' : 'FFFFFF' } },
            alignment: { horizontal: 'center', vertical: 'center' }
          };
        }
      }
    }

    // Append worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Write workbook and trigger download with cellStyles set to true
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array', cellStyles: true });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'example.xlsx');
  };

  return <button onClick={exportToExcel}>Export to Excel</button>;
};

export default ExportToExcel;
