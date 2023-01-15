import Header from "./Header";
import ProductListing from "./ProductListingComponent/ProductListing";
import Search from "./SearchComponent/Search";
const AppLayout=()=>{
    return <>
        <Header />
        <Search />
        <ProductListing />
    </>
}
 export default AppLayout;