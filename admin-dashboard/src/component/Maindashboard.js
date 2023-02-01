import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getAllfileds } from "../redux/action";
import { useSelector } from 'react-redux';
import TableRowComponent from './TableRowComponent';
const Maindashboard=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getAllfileds())},[])
    const { dashboardFilds }=useSelector((state)=>state);
    return <div>
        <TableRowComponent dashboardFilds={dashboardFilds} />
    </div>
}
export default Maindashboard;