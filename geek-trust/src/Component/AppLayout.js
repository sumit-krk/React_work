import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import ProductListing from "./ProductListingComponent/ProductListing";
import Search from "./SearchComponent/Search";
const AppLayout=()=>{
    return <>
        <Header />
        <Outlet/>
        
    </>
}
 export default AppLayout;