import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getAllfileds } from "../redux/action";
import { useSelector } from 'react-redux';
import TableRowComponent from './TableRowComponent';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Maindashboard=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getAllfileds())},[])
    const { dashboardFilds }=useSelector((state)=>state);
    return (
      <div>
        <TableRowComponent dashboardFilds={dashboardFilds} />
        <div style={{display:'flex',justifyContent:'center'}}>
          <Stack spacing={2}>
            <Pagination count={10} showFirstButton showLastButton />
          </Stack>
        </div>
      </div>
    );
}
export default Maindashboard;