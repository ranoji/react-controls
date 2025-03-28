import React from 'react';
import { Grid, Box, Typography, Paper, Divider } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const TwoTablesWithHolidays = ({ holidays }) => {
  // Sample data for tables (replace with your actual data)
  const columnDefs = [/* your 7 columns */];
  const rowData1 = [/* your table data */];
  const rowData2 = [/* your table data */];

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Tables Section */}
      <Grid container spacing={3}>
        {/* First Table */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
              Table 1 Header
            </Typography>
            <Paper sx={{ height: 400 }}>
              <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData1}
                className="ag-theme-material"
                domLayout='autoHeight'
              />
            </Paper>
          </Box>
        </Grid>

        {/* Second Table */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
              Table 2 Header
            </Typography>
            <Paper sx={{ height: 400 }}>
              <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData2}
                className="ag-theme-material"
                domLayout='autoHeight'
              />
            </Paper>
          </Box>
        </Grid>
      </Grid>

      {/* Holidays Section */}
      <Box>
        <Typography variant="h5" gutterBottom sx={{ 
          color: 'text.primary',
          fontWeight: 'bold',
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          '&::after': {
            content: '""',
            flex: 1,
            ml: 2,
            height: '1px',
            backgroundColor: 'divider'
          }
        }}>
          Upcoming Holidays
        </Typography>
        
        <Grid container spacing={2}>
          {holidays?.map((holiday, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={0} sx={{
                p: 2,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                '&:hover': {
                  boxShadow: 1,
                  borderColor: 'primary.main'
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    p: 1,
                    borderRadius: 1,
                    minWidth: 60,
                    textAlign: 'center'
                  }}>
                    <Typography variant="subtitle2">
                      {holiday.date.split('-')[2]}
                    </Typography>
                    <Typography variant="caption">
                      {new Date(holiday.date).toLocaleString('default', { month: 'short' })}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="medium">
                      {holiday.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(holiday.date).toLocaleDateString('en-US', {
                        weekday: 'long'
                      })}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

// Sample holiday data format
const sampleHolidays = [
  { date: '2025-01-01', name: 'New Year' },
  { date: '2025-01-26', name: 'Republic Day' },
  // Add 9-10 more holidays
];

// Usage in parent component:
// <TwoTablesWithHolidays holidays={sampleHolidays} />
