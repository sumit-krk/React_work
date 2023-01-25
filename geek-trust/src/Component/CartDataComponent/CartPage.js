import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrementProduct, increaseProduct } from "../../Redux/cartAction";
const CartPage=()=>{
    let data=useSelector((state)=> state.cartData.currentCartData);
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
                    <button onClick={()=> dispatch(increaseProduct(e.id))}>+</button>
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
      </>
    );
}
export default CartPage;