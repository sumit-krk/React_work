import { useDispatch } from "react-redux"
import { gatAllBookData } from "../Redux/action";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import Header from "./Header";
import Filter from "./Filter";
import { Link } from "react-router-dom";
const Product=()=>{
    const dispatch=useDispatch();
    const {currentBookData} = useSelector((state)=> state.BookData);
    console.log(currentBookData)
    useEffect(()=>{
        dispatch(gatAllBookData())
    },[])

    return (
      <>
        <Header />
        <div style={{display:'flex'}}>
          <Filter />
          <div style={{ display: "flex", flexWrap: "wrap",width:'85%',justifyContent:'space-around' }}>
            {currentBookData.map((e) => {
              return (
                <Link to={`/productdetails/${e.id}/${e.price}`}>
                    <div
                  style={{
                    width: "200px",
                    height: "350px",
                    border: "1px solid gray",
                    marginBottom:"15px"
                  }}
                >
                  <img
                    src={e.image_url}
                    style={{ width: "100%", height: "250px" }}
                  />
                  <div>{e.title.split(" ").slice(0,4).join(" ")}</div>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <div style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BiRupee /></span><span>{e.price}</span></div>
                    <div style={{display:'flex',alignItems:'center',backgroundColor:'green',borderRadius:'3px',padding:'0px 5px'}}>
                        <span>{e.rating.toFixed(1)}</span><span style={{display:'flex',color:'white'}}><AiFillStar /></span>
                    </div>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
}
export default Product;