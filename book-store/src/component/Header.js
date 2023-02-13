import {FaRegUserCircle} from 'react-icons/fa';
import {RxDividerVertical} from 'react-icons/rx';
import {AiOutlineHeart} from 'react-icons/ai'
import './Header.css';
const Header=()=>{
    return (
        <div className="header">
          <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" style={{padding:'0px 0px 0px 40px'}} />
          <input placeholder="Search by Title, Author, Publisher or ISBN" style={{width:'400px',height:'30px',border:'1px solid red'}}/>
          <div>
            <FaRegUserCircle />
            <p1 style={{padding:'0px 60px 0px 0px'}}>My Account</p1>
            <RxDividerVertical />  
            <AiOutlineHeart style={{color:'red'}} />      
          </div>
        </div>
    )
}
export default Header;