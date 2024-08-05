import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#efefef',
  },
  '& .MuiDataGrid-row:nth-of-type(even)': {
    backgroundColor: '#f7f7f782',
  },
  '& .MuiDataGrid-row:hover': {
    backgroundColor: '#f1f1f1',
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 'bold',
    color: '#555',
  },
  fontSize: '12px',
}));


export default function DataTable(data) {

  const years = data.data.labels;
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: '', flex: 1, minWidth: 190},
    ...years.map(year => ({
      field: year,
      headerName: year,
      maxWidth: 110,
       flex: 1
    }))
  ];

  const rows: GridRowsProp = data.data.datasets.map(country => {
    const row = { id: country.label };
    years.forEach((year, index) => {
      let formattedValue = country.data[index] !== undefined && country.data[index] !== null 
      ? parseFloat(country.data[index]).toLocaleString() 
      : ''; 
      row[year] = formattedValue;
    });
    return row;
  });

  return (
    <Box className='max-chart-height'>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        hideFooter
      />
    </Box>
  );
}
