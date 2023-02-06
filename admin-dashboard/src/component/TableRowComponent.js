import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Checkbox from "@mui/material/Checkbox";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";

const head=["Name","Email","Role","Actions"]
const TableRowComponent=({dashboardFilds=[],handleSelectAllClick})=>{
  let filterData=[];
  let new_data;
  // const handleCkeckBox=(e)=>{
  //   handleSelectAllClick(e.target.checked);
  // }
  const HandleCheckedBox=(user,id,e)=>{
    if(e.target.checked){
      if(filterData.length){ 
          filterData.push(user)
      }
      else{
        filterData.push(user)
      }
    }
    else{
       new_data=filterData.filter((e)=>e.id!=id);
       filterData=new_data;
    }
    console.log("filterData",filterData);
    handleSelectAllClick(filterData);
    
  }
 
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                    // onClick={handleCkeckBox}
                    // checked={selectAll}
                />
              </TableCell>
              {head.map((header) => (
                <TableCell key={header.id} sx={{ fontWeight: "1000" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dashboardFilds.map((user) => (
              <TableRow
                key={user.id}
                // sx={{
                //   ...(isSelected(user.name) && { backgroundColor: "#D3D3D3" }),
                // }}
                // onClick={(event) => handleClick(event, user.name)}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    // checked={isSelected(user.name)}
                    // onClick={(event) => handleClick(event, user.name)}
                   onClick={(e)=>HandleCheckedBox(user,user.id,e)}
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    // onClick={() => handleEdit(user.id)}
                  >
                    <EditLocationAltIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    // onClick={() => handleDelete(user.id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
export default TableRowComponent