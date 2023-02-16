import { Link } from "react-router-dom";

const ProductDone=()=>{
    return <>
        <h1>Order Completed Thank you</h1>
        <Link to="/">
            <div>Click Here To Go Back</div>
        </Link>
    </>
}
export default ProductDone;