import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/action";
import { useSelector } from "react-redux";
const ProductDetails=()=>{
    const dispatch=useDispatch(); 
   const [productDetails,setProductDetails]=useState([]);
   const {id,price}=useParams();
   const {cartData}=useSelector((state)=>state.BookData)
   useEffect(()=>{
    getproductDetails();
   },[])
   const getproductDetails= async()=>{
        let data=await fetch(`https://example-data.draftbit.com/books/${id}`)
        data=await data.json();
        setProductDetails({...data,price,quantity:1})
   }
   const handleAddProduct=()=>{
    let dummy=false;
        if(cartData.length===0){
            alert("Product Added In Cart");
            dispatch(addToCart(productDetails))
        }
        else{
            for(let i=0;i<cartData.length;i++){
                if(cartData[i].id==productDetails.id){
                    dummy=true;
                }
            }
            if(dummy==true){
                alert("Product Already In Cart")
            }
            else{
                alert("Product Added In Cart");
                dispatch(addToCart(productDetails)) 
            }
        }
   }
   const handleWatchList=()=>{
    console.log("yes")
   }
    return(
        <>
            <div style={{display:'flex',width:'100%',padding:'15px 0px'}}>
                <div style={{width:'15%',height:'300px',border:'1px solid red',marginLeft:'20px'}}><img src={productDetails.image_url} style={{width:'100%',height:'100%'}}></img></div>
                <div style={{width:'70%',height:'300px',marginLeft:'50px'}}>
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
                        <button style={{backgroundColor:'#FF9F00',padding:'10px',color:'white',marginRight:'15px',border:'1px solid white',cursor:'pointer'}} onClick={handleAddProduct}>Add To Cart</button>
                        <button style={{backgroundColor:'#FB641B',padding:'10px',color:'white',border:'1px solid white',cursor:'pointer'}} onClick={handleWatchList}>Add To Wichlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;