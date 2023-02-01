import React from 'react'
import { useDispatch } from "react-redux";
import { getAllfileds } from "../redux/action";
import { useSelector } from 'react-redux';
const Maindashboard=()=>{
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(getAllfileds())
    }
    const {dashboardFilds}=useSelector((state)=>state);
    console.log(dashboardFilds.fild);
    return <div>
        <button onClick={handleClick}>Click</button>
    </div>
}
export default Maindashboard;