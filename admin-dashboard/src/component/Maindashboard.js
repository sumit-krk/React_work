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
  const [searchAllFild,setSearchAllFild]=useState([]);
  const [showFild,setShowFild]=useState([]);
  const [searchText,setSearchText]=useState("");

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllfileds())
    },[])

    const { dashboardFilds }=useSelector((state)=>state);

      useEffect(()=>{
        setAllFildData(dashboardFilds.fild);
      },[dashboardFilds.fild])

      useEffect(()=>{
        if(dashboardFilds.nextfild.length>0){
          setAllFildData(dashboardFilds.nextfild);
        }
        else{
          setAllFildData(dashboardFilds.fild)
        }
      },[dashboardFilds.nextfild,searchText])

    const handleInputChange=(e)=>{
        setSearchText(e.target.value)
        dispatch(getSearchData(e.target.value));
    }
    
    useEffect(()=>{
        setShowFild(allFildData.slice((handleFild-1)*10,handleFild*10));
    },[handleFild])

    console.log("showFild",showFild)

    const handlePagenation=(e,value)=>{
      setHandleFild(value)
  }

    return (
      <div>
        <input style={{width:"98%",height:"30px",margin:'10px'}} onKeyUp={handleInputChange} placeholder="Search by name, email or role"/>
        <TableRowComponent dashboardFilds={showFild.length<10?allFildData.slice(0,10):showFild} />
        <div style={{display:'flex',justifyContent:'center'}}>
          <Stack spacing={2}>
            <Pagination count={Math.round(allFildData.length<10?1:allFildData.length/10)} showFirstButton showLastButton color="primary" onChange={handlePagenation} />
          </Stack>
        </div>
      </div>
    );
}
export default Maindashboard;