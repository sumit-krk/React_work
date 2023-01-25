import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrementProduct, increaseProduct } from "../../Redux/cartAction";
const CartPage=()=>{
    const [totalPrice,setTotlPrice]=useState(0);
    let data=useSelector((state)=> state.cartData.currentCartData);
    let Total_Price=useSelector((state)=> state.cartData.Totalprice);
    let dispatch=useDispatch();
    console.log("cartData",data)
    const totalInitialPrice=(data)=>{
        let price=0;
        for(let i=0;i<data.length;i++){
            price=price+data[i].price;
        }
        setTotlPrice(price);
    }
    useEffect(()=>{
        totalInitialPrice(data);
    },[])
    return (
      <>
        <h1>Cart Data</h1>
        <div style={{}}>
          {data.map((e) => {
            return (
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid red",
                  width: "400px",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <img height={150} width={150} src={e.imageURL} />
                <div>
                  <div>{e.price}</div>
                  <div>{e.name}</div>
                </div>
                <div>
                  <div>
                    <button onClick={()=> dispatch(increaseProduct(e.id,e.InitialPrice))}>+</button>
                  </div>
                  <div>{e.currentQuentity}</div>
                  <div>
                    <button onClick={()=> dispatch(decrementProduct(e.id))}>-</button>
                  </div>
                </div>
                <div>
                  <button>Remove</button>
                </div>
              </div>
            );
          })}
        </div>

        <div>Total Price:{Total_Price!=0?Total_Price:totalPrice}</div>
      </>
    );
}
export default CartPage;