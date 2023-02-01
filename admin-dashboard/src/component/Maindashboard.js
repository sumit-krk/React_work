import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getAllfileds, getNextFileds } from "../redux/action";
import { useSelector } from 'react-redux';
import TableRowComponent from './TableRowComponent';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Maindashboard=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllfileds())
    },[])
    const { dashboardFilds }=useSelector((state)=>state);
    console.log("next",dashboardFilds)
    const handlePagenation=(e,value)=>{
        dispatch(getNextFileds(value))
    }
    let AllData=dashboardFilds.nextfild.length>0?dashboardFilds.nextfild[0]:dashboardFilds.fild.slice(1,11);
    return (
      <div>
        <TableRowComponent dashboardFilds={AllData} />
        <div style={{display:'flex',justifyContent:'center'}}>
          <Stack spacing={2}>
            <Pagination count={Math.round(dashboardFilds.fild.length/10)} showFirstButton showLastButton color="primary" onChange={handlePagenation} />
          </Stack>
        </div>
      </div>
    );
}
export default Maindashboard;