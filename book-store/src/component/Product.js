import { useDispatch } from "react-redux"
import { gatAllBookData } from "../Redux/action";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import Filter from "./Filter";
import { Link } from "react-router-dom";
const Product=()=>{
    const dispatch=useDispatch();
    const {currentBookData,filterData,searchData} = useSelector((state)=> state.BookData);
    const [data,setData]=useState([]);
    const [allData,setAllData]=useState([]);
    const [count,setCount]=useState(1);
    useEffect(()=>{
          dispatch(gatAllBookData())
    },[])

    useEffect(()=>{
      setData([])
      if(searchData.length>0){
        setAllData(searchData);
      }
      else if(filterData.length>0){
        setAllData(filterData);
      }
      else{
        setAllData(currentBookData);
      }
  
    },[currentBookData,filterData,searchData])

    useEffect(()=>{
      setData([...data,...allData.slice((count-1)*10,(count*10)+10)])
    },[count,allData])

    const HandlePagination=()=>{
      setCount(count+1);
    }
    
    return (
      <>
        <div style={{display:'flex'}}>
        <Filter />
        <div style={{width:'85%',display: "flex", flexWrap: "wrap",justifyContent:'space-around'}}>
          <div style={{ display: "flex", flexWrap: "wrap",justifyContent:'space-around' }}>
            {data?.map((e) => {
              return (
                <Link to={`/productdetails/${e.id}/${e.price}`} style={{textDecoration:'none',color:'black'}}>
                    <div
                  style={{
                    width: "200px",
                    padding:'3px',
                    border: "1px solid gray",
                    marginBottom:"15px"
                  }}
                >
                  <img
                    src={e.image_url}
                    style={{ width: "100%", height: "250px" }}
                  />
                  <div>{e.title?.split(" ")?.slice(0,4)?.join(" ")}</div>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <div style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BiRupee /></span><span>{e.price}</span></div>
                    <div style={{display:'flex',alignItems:'center',backgroundColor:'green',borderRadius:'3px',padding:'0px 5px'}}>
                        <span style={{color:'white'}}>{e.rating.toFixed(1)}</span><span style={{display:'flex',color:'white'}}><AiFillStar /></span>
                    </div>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
          <div style={{backgroundColor:'black',color:'white',marginBottom:'5px',padding:'5px',borderRadius:'5px',cursor:'pointer'}} onClick={()=>HandlePagination(count)}>Load More..</div>
        </div>
        </div>
      </>
    );
}
export default Product;