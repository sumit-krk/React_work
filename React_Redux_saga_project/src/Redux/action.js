import { ALL_PRODUCT_LIST } from "./constant";
export const addToCart=()=>{
    console.log("function Calling");
    return{
        type:'ADD_TO_CART',
    }
}

// export const getListOfProduct=()=>{
//     return{
//         type:ALL_PRODUCT_LIST,
//     }
// }