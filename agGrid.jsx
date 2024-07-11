import React, { useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MyGridComponent = () => {
    const gridRef = useRef(null);

    const columnDefs = [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
    ];

    const rowData = [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 }
    ];

    useEffect(() => {
        // Focus on the grid when the component mounts
        if (gridRef.current) {
            gridRef.current.api.ensureIndexVisible(0, 'top');
            gridRef.current.api.setFocusedCell(0, 'make');
            gridRef.current.api.startEditingCell({ rowIndex: 0, colKey: 'make' });
        }
    }, []);

    return (
        <div
            className="ag-theme-alpine"
            style={{
                height: '500px',
                width: '600px'
            }}
        >
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                domLayout={'autoHeight'}
                defaultColDef={{
                    flex: 1,
                    minWidth: 100,
                    editable: true,
                }}
            />
        </div>
    );
};

export default MyGridComponent;
