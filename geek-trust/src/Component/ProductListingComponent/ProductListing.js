import Filter from "../Filter&Product Component/Filter";
import Product from "../Filter&Product Component/Product";

const ProductListing=()=>{
    return <div style={{display:'flex',justifyContent:'space-around',width:'80%',margin:'auto',padding:'2% 0%'}}>
        <Filter />
        <Product />
    </div>
}
 export default ProductListing;