import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Checkbox from "@mui/material/Checkbox";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const head=["Name","Email","Role","Actions"]
const TableRowComponent=()=>{
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                //   onClick={handleSelectAllClick}
                //   checked={selectAll}
                />
              </TableCell>
              {head.map((header) => (
                <TableCell key={header.id} sx={{ fontWeight: "1000" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    );
}
export default TableRowComponent