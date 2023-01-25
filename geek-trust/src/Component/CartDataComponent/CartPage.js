import { useSelector } from "react-redux";

const CartPage=()=>{
    let data=useSelector((state)=> state.cartData);
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
                    <button>+</button>
                  </div>
                  <div>1</div>
                  <div>
                    <button>-</button>
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