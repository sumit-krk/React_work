import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrementProduct, increaseProduct, RemoveCartData } from "../../Redux/cartAction";
import { Link } from 'react-router-dom';
import styles from './CartPage.module.css';
const CartPage=()=>{
    let data=useSelector((state)=> state.cartData.currentCartData);
    let Total_Price=useSelector((state)=> state.cartData.Totalprice);
    let dispatch=useDispatch();
    console.log("cartData",data)
    return (
      <>
        <h3 className={styles.cart_page}>Shopping Cart</h3>
        <div className={styles.cart_product}>
          {data.map((e) => {
            return (
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid gray",
                  width: "400px",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <img height={150} width={150} src={e.imageURL} />
                <div>
                  <div>{e.name}</div>
                  <div>{e.price}</div>
                </div>
                <div style={{ display: "flex", width:'16%', justifyContent:'space-between' }}>
                  <div>
                    <button
                      onClick={() =>
                        dispatch(increaseProduct(e.id, e.InitialPrice))
                      }
                    >
                      +
                    </button>
                  </div>
                  <div>{e.currentQuentity}</div>
                  <div>
                    {e.currentQuentity > 1 ? (
                      <button
                        onClick={() =>
                          dispatch(decrementProduct(e.id, e.InitialPrice))
                        }
                      >
                        -
                      </button>
                    ) : (
                      <button disabled>-</button>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(RemoveCartData(e.id, e.price))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {
          data.length>0?<div className={styles.total_amount}>
          <div style={{fontWeight:'bold'}}>Total Amount </div> 
          <div>Rs {Total_Price}</div>
        </div>:<div>
          <h3>Opps!! No Any Product in cart</h3>
          <h3><Link to="/">Go To Product page</Link> </h3>
        </div>

        }
      </>
    );
}
export default CartPage;