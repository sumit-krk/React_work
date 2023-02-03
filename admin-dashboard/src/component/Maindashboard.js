import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { getAllfileds, getNextFileds, getSearchData } from "../redux/action";
import { useSelector } from 'react-redux';
import TableRowComponent from './TableRowComponent';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Maindashboard=()=>{
  const [allFildData,setAllFildData]=useState([]);
  const [checked,setChecked]=useState(false);

  console.log("checked",checked)

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllfileds())
    },[])

    const { dashboardFilds }=useSelector((state)=>state);
    console.log("dasboard",dashboardFilds)

      useEffect(()=>{
        setAllFildData(dashboardFilds.fild.slice(0,10));
      },[dashboardFilds.fild])

      useEffect(()=>{
        if(dashboardFilds.nextfild.length==0){
          setAllFildData(dashboardFilds.fild.slice(0,10));
        }
        else{
          setAllFildData(dashboardFilds.nextfild.slice(0,10));
        }
      },[dashboardFilds.nextfild])

      useEffect(()=>{
        setAllFildData(dashboardFilds.nexprevfild)
      },[dashboardFilds.nexprevfild])


    const handleInputChange=(e)=>{
        dispatch(getSearchData(e.target.value));
    }

    const handlePagenation=(e,value)=>{
      dispatch(getNextFileds(value))
  }

  const handleSelectAllClick=(value)=>{
      setChecked(value)
  }

    return (
      <div>
        <input style={{width:"98%",height:"30px",margin:'10px'}} onKeyUp={handleInputChange} placeholder="Search by name, email or role"/>
        <TableRowComponent dashboardFilds={allFildData} handleSelectAllClick={handleSelectAllClick} />
        <div style={{display:'flex',justifyContent:'center'}}>
          <Stack spacing={2}>
            <Pagination count={dashboardFilds.length<10?1:Math.round(dashboardFilds.length/10)} showFirstButton showLastButton color="primary" onChange={handlePagenation} />
          </Stack>
        </div>
      </div>
    );
}
export default Maindashboard;