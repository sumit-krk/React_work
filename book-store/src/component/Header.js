import {FaRegUserCircle} from 'react-icons/fa';
import {RxDividerVertical} from 'react-icons/rx';
import {AiOutlineHeart} from 'react-icons/ai'
import { FaSearch } from "react-icons/fa";
import './Header.css';
import { Link } from 'react-router-dom';
const Header=()=>{
    return (
        <div className="header">
          <Link to='/'>
            <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" style={{padding:'0px 0px 0px 40px'}} />
          </Link>
          <div style={{display:'flex'}}>
            <input placeholder="Search by Title, Author, Publisher or ISBN" style={{width:'400px',height:'30px',border:'1px solid red'}}/>
            <FaSearch style={{backgroundColor:'red',color:'white',padding:'9px',display:'flex',cursor:'pointer'}} />
          </div>
          <div style={{display:'flex',alignItems:'center',padding:'0px 60px 0px 0px'}}>
            <FaRegUserCircle style={{color:'red',display:'flex',fontSize:'30px'}} />
            <p1 style={{padding:'0px 5px 0px 0px'}}> My Account</p1>
            <RxDividerVertical style={{color:'red',fontSize:'30px'}} />  
            <AiOutlineHeart style={{color:'red',fontSize:'30px'}} />      
          </div>
        </div>
    )
}
export default Header;