import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const PaceChart = () => {

    function createData(
        easy: string,
        marathon: number,
        threshold: number,
        interval: number,
        repitition: number,
      ) {
        return { easy, marathon, threshold, interval, repitition };
      }
      
      const rows = [
        createData('Easy', 8.4, 0, 0, 0),
        createData('Marathon', 7.38, 4.45, 0, 0),
        createData('Threshold', 7.11, 4.28, 3.34, 1.47),
        createData('Interval', 6.37, 4.07, 3.17, 1.39),
        createData('Repitition', 6.13, 3.52, 3.05, 1.33),
      ]

  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PM Race Calculator</TableCell>
            <TableCell align="right">Mile</TableCell>
            <TableCell align="right">1K</TableCell>
            <TableCell align="right">800M</TableCell>
            <TableCell align="right">400M</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.easy}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.easy}
              </TableCell>
              <TableCell align="right">{row.marathon}</TableCell>
              <TableCell align="right">{row.threshold}</TableCell>
              <TableCell align="right">{row.interval}</TableCell>
              <TableCell align="right">{row.repitition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default PaceChart