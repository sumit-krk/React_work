import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrementProduct, increaseProduct, RemoveCartData } from "../../Redux/cartAction";
const CartPage=()=>{
    let data=useSelector((state)=> state.cartData.currentCartData);
    let Total_Price=useSelector((state)=> state.cartData.Totalprice);
    let dispatch=useDispatch();
    console.log("cartData",data)
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
                    {
                        e.currentQuentity>1?<button onClick={()=> dispatch(decrementProduct(e.id,e.InitialPrice))} >-</button>:<button disabled>-</button>
                    }
                  </div>
                </div>
                <div>
                  <button onClick={()=> dispatch(RemoveCartData(e.id,e.price))}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>

        <div>Total Price:{Total_Price}</div>
      </>
    );
}
export default CartPage;