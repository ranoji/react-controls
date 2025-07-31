import React, { useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import * as htmlToImage from 'html-to-image';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Register AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const App = () => {
  const gridRef = useRef(null);
  const wrapperRef = useRef(null);

  const [rowData] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
    }))
  );

  const columnDefs = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'email', headerName: 'Email' },
  ];

  const handleSaveImage = () => {
    const gridBody = document.querySelector('.ag-body-viewport');

    // Scroll to top using both DOM and AG Grid API
    if (gridBody) gridBody.scrollTop = 0;
    if (gridRef.current && gridRef.current.api) {
      gridRef.current.api.ensureIndexVisible(0, 'top');
    }

    // Delay capture to let scroll/render settle
    setTimeout(() => {
      htmlToImage
        .toPng(wrapperRef.current, {
          pixelRatio: 2,
          cacheBust: true,
        })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'grid-top-capture.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Capture failed:', err);
        });
    }, 500);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <button onClick={handleSaveImage} style={{ marginBottom: '10px' }}>
        Capture Grid with Header
      </button>

      <div ref={wrapperRef} style={{ border: '1px solid #ccc', padding: '1rem' }}>
        {/* Grid Header */}
        <h2 style={{ marginTop: 0, marginBottom: '1rem', textAlign: 'center' }}>
          👥 User List Grid
        </h2>

        <div
          className="ag-theme-alpine"
          style={{ height: '300px', width: '100%' }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{ flex: 1 }}
            domLayout="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
