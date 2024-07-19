import React, { useRef, useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const GridComponent = () => {
  const gridRef = useRef(null);

  const [rowData, setRowData] = useState([
    { name: "aname", value: 1000 },
    { name: "a1name", value: 2000 },
    { name: "a2name", value: 3000 },
  ]);

  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Value", field: "value" },
  ];

  const processDataFromClipboard = (params) => {
    console.log("Data from clipboard:", params.data);
    // Assuming the clipboard data is an array of arrays (rows and columns)
    const newRowData = params.data.map((row) => ({
      name: row[0], // Assuming the first column is 'name'
      value: parseInt(row[1], 10), // Assuming the second column is 'value'
    }));

    // Append new rows to the existing data
    setRowData((currentRowData) => [...currentRowData, ...newRowData]);
    return false; // Return false to prevent the default paste behavior
  };

  useEffect(() => {
    const handlePaste = (event) => {
      const clipboardData = event.clipboardData || window.clipboardData;
      const pastedData = clipboardData.getData("Text");
      const rows = pastedData.split("\n").map((row) => row.split("\t"));

      processDataFromClipboard({ data: rows });
    };

    document.addEventListener("paste", handlePaste);

    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection="single"
        defaultColDef={{ editable: true, resizable: true }}
        domLayout="autoHeight"
        processDataFromClipboard={processDataFromClipboard}
      />
    </div>
  );
};

export default GridComponent;
