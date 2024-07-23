import React, { useRef, useEffect, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MyComponent = ({ processDataFromClipboard, rowData, columnDefs }) => {
  const gridRef = useRef();

  const handlePaste = useCallback((event) => {
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData("Text");
    const rows = pastedData.split("\n").map((row) => row.split("\t"));

    processDataFromClipboard({ data: rows });
  }, [processDataFromClipboard]);

  useEffect(() => {
    const handlePasteEvent = (event) => {
      if (gridRef.current && gridRef.current.gridOptions.api) {
        event.stopPropagation();
        handlePaste(event);
      }
    };

    const gridElement = gridRef.current?.gridOptions?.api?.getGui();
    if (gridElement) {
      gridElement.addEventListener("paste", handlePasteEvent);
    }

    return () => {
      if (gridElement) {
        gridElement.removeEventListener("paste", handlePasteEvent);
      }
    };
  }, [handlePaste]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        // Additional grid properties
      />
    </div>
  );
};

export default MyComponent;
