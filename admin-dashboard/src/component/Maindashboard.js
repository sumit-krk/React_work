import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { deleteSelecteData, getAllfileds, getNextFileds, getSearchData } from "../redux/action";
import { useSelector } from 'react-redux';
import TableRowComponent from './TableRowComponent';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Maindashboard=()=>{
  const [allFildData,setAllFildData]=useState([]);
  let checkedData=[];

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllfileds())
    },[])

    const { dashboardFilds }=useSelector((state)=>state);

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

      const deleteSelectedData = () => {
        if (checkedData.length == 0) {
          alert("Select data first");
        } else {
          dispatch(deleteSelecteData(checkedData));
        }
      };

     const handleSelectAllClick=(value)=>{
      checkedData=value;
    }

    return (
      <div>
        <input style={{width:"98%",height:"30px",margin:'10px'}} onKeyUp={handleInputChange} placeholder="Search by name, email or role"/>
        <TableRowComponent dashboardFilds={allFildData} handleSelectAllClick={handleSelectAllClick} />
        <div style={{display:'flex',width:'60%',justifyContent:'space-between'}}>
          <button style={{border:'1px solid red',backgroundColor:'#FF5171',padding:'10px',borderRadius:'15px',margin:'3px 0px 0px 10px',cursor:'pointer'}} onClick={deleteSelectedData}>Delete Selected</button>
          <div>
            <Stack spacing={2}>
              <Pagination count={Math.round(dashboardFilds.nextfild.length?dashboardFilds.nextfild.length/10:dashboardFilds.fild.length/10)} showFirstButton showLastButton color="primary" onChange={handlePagenation} />
            </Stack>
          </div>
        </div>
      </div>
    );
}
export default Maindashboard;