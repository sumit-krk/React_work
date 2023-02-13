import { useDispatch } from "react-redux"
import { gatAllBookData } from "../Redux/action";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import Header from "./Header";
const Product=()=>{
    const dispatch=useDispatch();
    const {currentBookData} = useSelector((state)=> state.BookData);
    console.log(currentBookData)
    useEffect(()=>{
        dispatch(gatAllBookData())
    },[])

    const SelectFilter=(e)=>{
        const {checked,value}=e.target;
            //  if(checked){
            //   setSelectedCategory([...selectedCategory,value]);
              
            //  }
            //  else{
            //     setSelectedCategory([...selectedCategory?.filter((e)=>e!=value)])
            //  }
    }

    return (
      <>
        <Header />
        <div style={{display:'flex'}}>
          <div style={{borderRight:'1px solid black',width:'15%'}}>
            <h2 style={{display:'flex',justifyContent:'center',borderBottom:'1px solid black'}}>Filters</h2>
            {/* price filter box */}
            <div className="checkBoxDiv">
                <div>Price</div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <input type="checkbox" name="" onChange={SelectFilter} value={'250'} /><label htmlFor="" style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BiRupee /></span>100 - 300</label>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <input type="checkbox" name="" onChange={SelectFilter} value={"251"} /> <label htmlFor="" style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BiRupee /></span>301 - 600</label>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <input type="checkbox" name="" onChange={SelectFilter} value={'450'} /> <label htmlFor="" style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BiRupee /></span>601 - 1000</label>
                </div>
            </div>
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
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',border:'1px solid green'}}>
                    <div style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BiRupee /></span><span>{String(e.price).split(".")}</span></div>
                    <div style={{display:'flex',alignItems:'center',backgroundColor:'green'}}>
                        <span>{e.rating}</span><span style={{display:'flex',color:'white'}}><AiFillStar /></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}
export default Product;