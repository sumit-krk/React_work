import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decriseQuantity, increaseQuantity, removeFromCart } from "../Redux/action";
const Cart=()=>{
    const dispatch=useDispatch();
    const {cartData}=useSelector((state)=>state?.BookData)
    const [totalItem,setTotalItem]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const HandleRemove=(data)=>{
        dispatch(removeFromCart(data))
    }
    const handleQuentity=(data)=>{
        if(data.type=='inc'){ dispatch(increaseQuantity(data.e)) }
        if(data.type=="dec"){ dispatch(decriseQuantity(data.e)) }
    }
    const AddTotalItem=()=>{
        let item=0;
        for(let i=0;i<cartData.length;i++){
            item=item+cartData[i].quantity;
        }
        setTotalItem(item);
    }
    const AddTotalPrice=()=>{
        let price=0;
        for(let i=0;i<cartData.length;i++){
            price=price+Number(cartData[i].price*cartData[i].quantity);
        }
        setTotalPrice(price);
    }
    useEffect(()=>{
        AddTotalPrice();
        AddTotalItem();
    },[cartData])
    console.log(cartData)
    return (
        <div>
            <div style={{backgroundColor:'green',color:'white',padding:'5px',borderRadius:'5px',cursor:'pointer',width:'49%',display:'flex',justifyContent:'center',marginBottom:'10px'}}>Cart Data</div>
            <div style={{display:'flex'}}>
                <div style={{width:'50%',marginBottom:'20px'}}>
                {
                    cartData.map((e)=>{
                        return <div style={{border:'1px solid gray',display:'flex',marginBottom:'20px'}}>
                                <div style={{width:'20%',height:'170px'}}>
                                    <img src={e.image_url} style={{width:'100%',height:'100%'}}></img>
                                </div>
                                <div style={{marginLeft:'20px',fontWeight:'bold'}}>
                                    <div>{e.title}</div>
                                    <div>Price:- RS {e.quantity*e.price}</div>
                                    <div>
                                        <span>Quantity:- {e.quantity}</span>
                                        <button style={{color:'white',backgroundColor:'gray',padding:'0px 10px',marginLeft:'5px',cursor:'pointer'}} onClick={()=>handleQuentity({type:"inc",e})}>+</button>
                                        {e.quantity>1?<button style={{color:'white',backgroundColor:'gray',marginLeft:'10px',padding:'0px 10px',cursor:'pointer'}} onClick={()=>handleQuentity({type:"dec",e})}>-</button>:
                                        <button disabled style={{color:'white',backgroundColor:'gray',marginLeft:'10px',padding:'0px 10px',cursor:'not-allowed'}} onClick={()=>handleQuentity({type:"dec",e})}>-</button>
                                        }
                                    </div>
                                    <div style={{marginTop:'10px'}}>
                                        <button onClick={()=>HandleRemove(e)}>Remove From Cart</button>
                                    </div>
                                </div>
                            </div>
                    })
                }
                </div>
                <div style={{border:'1px solid red',marginLeft:'15%',alignItems:'center',height:'80px',padding:'10px',borderRadius:'10px'}}>
                    <div>Total Quantity Of Cart:- {totalItem}</div>
                    <div>Total Price:- {totalPrice}</div>
                    <Link to='/payment' style={{textDecoration:'none'}}>
                        <div style={{backgroundColor:'red',color:'white',padding:'5px',borderRadius:'5px',cursor:'pointer'}}>PAY AND COMPLETE YOUR ORDER</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Cart;