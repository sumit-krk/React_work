import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchData } from '../../Redux/productAction';
import styles from './search.module.css'
const Search=()=>{
    const dispatch=useDispatch();
    const [text,setText]=useState("")
    const HandleChange=(e)=>{
        setText(e.target.value)
    }
    const HandleClick=()=>{
        dispatch(searchData(text)) 
    }
    return <div className={styles.searchDiv}>
        <input onChange={HandleChange} placeholder='Search for products...' style={{width:'300px', height:'30px', outline:'none'}}/>
        <span onClick={HandleClick}>
            <i className="fa fa-search" aria-hidden="true" style={{ fontSize: "35px", cursor:"pointer"}}></i>
         </span>
    </div>
}
export default Search;