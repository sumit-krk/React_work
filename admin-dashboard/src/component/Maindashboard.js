import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { getAllfileds, getNextFileds, getSearchData } from "../redux/action";
import { useSelector } from 'react-redux';
import TableRowComponent from './TableRowComponent';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Maindashboard=()=>{
  const [handleFild,setHandleFild]=useState(1);
  const [allFildData,setAllFildData]=useState([]);

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllfileds())
        console.log("Hello from dispatch")
    },[])

    const { dashboardFilds }=useSelector((state)=>state);
    console.log("next",dashboardFilds.fild)

      useEffect(()=>{
        setAllFildData(dashboardFilds.fild)
      },[dashboardFilds.fild])
  
    console.log("allFildData",allFildData)

    const handlePagenation=(e,value)=>{
        dispatch(getNextFileds(value))
    }

    const handleInputChange=(e)=>{
        dispatch(getSearchData(e.target.value));
    }

    let AllData=dashboardFilds.nextfild.length>0?dashboardFilds.nextfild.length>9?dashboardFilds.nextfild.slice(0,10):dashboardFilds.nextfild:dashboardFilds.fild.slice(1,10);
    console.log("allData",AllData);
    return (
      <div>
        <input style={{width:"98%",height:"30px",margin:'10px'}} onKeyUp={handleInputChange} placeholder="Search by name, email or role"/>
        <TableRowComponent dashboardFilds={AllData} />
        <div style={{display:'flex',justifyContent:'center'}}>
          <Stack spacing={2}>
            <Pagination count={Math.round(AllData.length>10?AllData.length/10:dashboardFilds.fild.length/10)} showFirstButton showLastButton color="primary" onChange={handlePagenation} />
          </Stack>
        </div>
      </div>
    );
}
export default Maindashboard;