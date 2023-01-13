import { useSelector } from "react-redux";
const CartCount=()=>{
    const allData = useSelector((state)=> state.cartData);
    console.log(allData.data)
    return <div>{allData.data.length}</div>
}

export default CartCount;