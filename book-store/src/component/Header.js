import {FaRegUserCircle} from 'react-icons/fa';
import {RxDividerVertical} from 'react-icons/rx';
import {AiOutlineHeart} from 'react-icons/ai'
import { BsMinecartLoaded } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchData } from '../Redux/action';
const Header=()=>{
  const dispatch=useDispatch();
  const [text,setText]=useState("")
  const HandleChange=(e)=>{
      setText(e.target.value)
    }
    const HandleClick=()=>{
      if(text.length===0){
        alert("Enter valid data");
      }
      else{
        dispatch(searchData(text))
        setText(""); 
      }
  }
      const {cartData}=useSelector((state)=>state.BookData)
      console.log(cartData)
     return (
        <div className="header">
          <Link to='/'>
            <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" style={{padding:'0px 0px 0px 40px'}} />
          </Link>
          <div style={{display:'flex'}}>
            <input onChange={HandleChange} placeholder="Search by Title, Author, Publisher or ISBN" style={{width:'400px',height:'30px',border:'1px solid red'}} value={text}/>
            <FaSearch onClick={HandleClick} style={{backgroundColor:'red',color:'white',padding:'9px',display:'flex',cursor:'pointer'}} />
          </div>
          <div style={{display:'flex',alignItems:'center',padding:'0px 80px 0px 0px'}}>
            <FaRegUserCircle style={{color:'red',display:'flex',fontSize:'35px'}} />
            <div style={{padding:'0px 5px 0px 0px'}}> My Account</div>
            <RxDividerVertical style={{color:'red',fontSize:'35px'}} />  
            <AiOutlineHeart style={{color:'red',fontSize:'35px'}} />
            <div style={{position:'relative',display:'flex',padding:'0px 0px 0px 20px'}}>
              <Link to="/cart">
                  <BsMinecartLoaded style={{color:'red',fontSize:'35px'}} />
              </Link>
              <div style={{position:'absolute',justifyContent:'center',alignItems:'center',top:'5px',left:'33px'}}>{cartData?.length}</div>  
            </div>    
          </div>
        </div>
    )
}
export default Header;