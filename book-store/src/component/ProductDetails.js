import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
const ProductDetails=()=>{
    const [productDetails,setProductDetails]=useState([]);
   const {id,price}=useParams();
   useEffect(()=>{
    getproductDetails();
   },[])
   const getproductDetails= async()=>{
        let data=await fetch(`https://example-data.draftbit.com/books/${id}`)
        data=await data.json();
        setProductDetails({...data,price})
   }
    return(
        <>
            <div style={{display:'flex',padding:'10px'}}>
                <div style={{width:'400px',height:'300px',border:'1px solid red'}}><img src={productDetails.image_url} style={{width:'100%',height:'100%'}}></img></div>
                <div style={{padding:'0px 30px'}}>
                    <div style={{fontWeight:'bold',fontSize:'30px'}}>{productDetails.title}</div>
                    <div style={{fontWeight:'bold',color:'gray'}}>Author:- {productDetails.authors}</div>
                    <div style={{color:'#351C75',marginTop:'10px'}}>{productDetails.description}</div>
                    <div style={{fontSize:'15px',display:'flex',alignItems:'center',marginTop:'5px'}}>
                        <div style={{backgroundColor:'green',display:'flex',alignItems:'center',borderRadius:'5px',padding:'0px 2px'}}>
                            <span style={{display:'flex',color:'white'}}><AiFillStar /></span><span>{productDetails?.rating?.toFixed(1)}</span>
                        </div>
                        <div style={{display:'flex',color:'gray',marginLeft:'5px'}}>
                            {productDetails.rating_count} Ratings & {productDetails.review_count} Reviews
                        </div>
                    </div>
                    <div style={{fontSize:'25px',fontWeight:'bold',marginTop:'10px',display:'flex',alignItems:'center'}}><span style={{display:'flex'}}><BiRupee /></span>{productDetails.price}</div>
                    <div>
                        <button style={{backgroundColor:'#FF9F00',padding:'10px',color:'white',marginRight:'15px',border:'1px solid white',cursor:'pointer'}}>Add To Cart</button>
                        <button style={{backgroundColor:'#FB641B',padding:'10px',color:'white',border:'1px solid white',cursor:'pointer'}}>Add To Wichlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;