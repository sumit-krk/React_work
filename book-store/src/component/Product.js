import { useDispatch } from "react-redux"
import { gatAllBookData } from "../Redux/action";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { BiRupee } from "react-icons/bi";
const Product=()=>{
    const dispatch=useDispatch();
    const {currentBookData} = useSelector((state)=> state.BookData);
    console.log(currentBookData)
    useEffect(()=>{
        dispatch(gatAllBookData())
    },[])
    return (
      <>
        <div style={{display:'flex'}}>
          <div style={{borderRight:'1px solid black',width:'15%'}}>
            <h1>Filters</h1>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap",width:'85%',justifyContent:'space-around' }}>
            {currentBookData.map((e) => {
              return (
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
                  <div style={{display:'flex',alignItems:'center',border:'1px solid green'}}><span style={{display:'flex'}}><BiRupee /></span><span>{e.price}</span></div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}
export default Product;