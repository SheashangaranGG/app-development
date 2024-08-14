import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';

const columns = [
  { field: 'rank', headerName: 'Rank', width: 120 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'score', headerName: 'Score', type: 'number', width: 150 },
];

// Sample data and ranking logic
const rows = [
  { id: 1, name: 'sanjay.S', score: 85 },
  { id: 2, name: 'Sanjay.k', score: 95 },
  { id: 3, name: 'Billy', score: 90 },
  { id: 4, name: 'Ravi', score: 70 },
  { id: 5, name: 'Savitha', score: 75 },
  { id: 6, name: 'Eswari', score: 100 },
  { id: 7, name: 'Sanju', score: 65 },
  { id: 8, name: 'Naveena', score: 60 },
  { id: 9, name: 'Sam', score: 55 },
].map((row, index) => ({ ...row, rank: index + 1 })) // Rank calculation

export default function Leaderboard() {
  return (
    <div>
      <Navbar/>
    <Box
      sx={{
        height: '80.8vh',
        width: '96vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: 4,
      }}
      >
      <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        Leaderboard
      </Typography>
      <Box sx={{ height: 600, width: '40%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowsPerPageOptions={[5, 10]}
          />
      </Box>
    </Box>
    </div>
  );
}
