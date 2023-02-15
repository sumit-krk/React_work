import { BiRupee } from "react-icons/bi";
import { BsPaperclip } from "react-icons/bs";
import { RiHardDrive2Fill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { filterProduct } from "../Redux/action";
import { useDispatch } from "react-redux";
const Filter=()=>{
    // console.log("bing",bringDataFromChild)
    const dispatch=useDispatch();
    const [selectedCategory,setSelectedCategory]=useState([]);
    const SelectFilter=(e)=>{
        const {checked,value}=e.target;
             if(checked){
              setSelectedCategory([...selectedCategory,value]);
              
             }
             else{
                setSelectedCategory([...selectedCategory?.filter((e)=>e!=value)])
             }  
    }

    useEffect(()=>{
        dispatch(filterProduct(selectedCategory))
     },[selectedCategory])
    console.log("print",selectedCategory);
    return (
        <div style={{borderRight:'1px solid black',width:'15%'}}>
            <h2 style={{display:'flex',justifyContent:'center',borderBottom:'1px solid black'}}>Filters</h2>

            {/* price filter box */}

            <div className="checkBoxDiv" style={{marginLeft:'20px'}}>
                <h4>Price</h4>
                <div style={{display:'flex',alignItems:'center'}}>
                    <input type="checkbox" name="" onChange={SelectFilter} value={'300'} /><label htmlFor="" style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BiRupee /></span>100 - 300</label>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <input type="checkbox" name="" onChange={SelectFilter} value={"600"} /> <label htmlFor="" style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BiRupee /></span>301 - 600</label>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <input type="checkbox" name="" onChange={SelectFilter} value={'1000'} /> <label htmlFor="" style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BiRupee /></span>601 - 1000</label>
                </div>
            </div>

             {/*filter by filter */}

            <div className="checkBoxDiv" style={{marginLeft:'20px'}}>
                <h4>Format</h4>
                <div style={{display:'flex',alignItems:'center'}}>
                    <input type="checkbox" name="" onChange={SelectFilter} value={'Hardcover'} /><label htmlFor="" style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><RiHardDrive2Fill /></span>Hardcover</label>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <input type="checkbox" name="" onChange={SelectFilter} value={"Paperback"} /> <label htmlFor="" style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BsPaperclip /></span>Paperback</label>
                </div>
            </div>

            {/*filter by Rating */}

            <div className="checkBoxDiv" style={{marginLeft:'20px'}}>
                <h4>Rating</h4>
                <div style={{display:'flex',alignItems:'center'}}>
                    <input type="checkbox" name="" onChange={SelectFilter} value={'3'} /><label htmlFor="" style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><AiFillStar /></span>3 & above</label>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                <input type="checkbox" name="" onChange={SelectFilter} value={"4"} /> <label htmlFor="" style={{display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><AiFillStar /></span>4 & above</label>
                </div>
            </div>
          </div>
    )
}
export default Filter;