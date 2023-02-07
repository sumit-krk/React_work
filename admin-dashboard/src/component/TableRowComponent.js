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
import { Input } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deleteSingleData } from '../redux/action';
import styles from './TableRowComponent.module.css'

const head=["Name","Email","Role","Actions"]
const TableRowComponent=({dashboardFilds,handleSelectAllClick, handleCheckUnckeck})=>{
  const dispatch=useDispatch();
  const [mainCheck,setMainCheck]=React.useState(false);
  let filterData=[];
  let new_data;
  
  React.useEffect(()=>{
    setMainCheck(false)
  },[dashboardFilds])

  const HandleCheckedBox=(e,user,id)=>{
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
    handleSelectAllClick(filterData); 
  }

  const handleCkeckBox=()=>{
    setMainCheck(!mainCheck);
    if(!mainCheck){
      handleSelectAllClick(dashboardFilds)
    }
    else{
      handleSelectAllClick([])
    }
  }

  const handleSingleDelete=(id)=>{
    dispatch(deleteSingleData(id))
  }
 
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={mainCheck}
                  color="primary"
                    onClick={(e)=>handleCkeckBox(e)}
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
              >
                  {mainCheck?( <input className={styles.inputbox} type='checkbox' checked={true} /> ):(<TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    onClick={(e)=>HandleCheckedBox(e,user,user.id)}
                  />
                </TableCell>)
                }

                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                  >
                    <EditLocationAltIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={()=>handleSingleDelete(user.id)}
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
