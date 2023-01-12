import { ALL_PRODUCT_LIST } from "./constant";
const initialState = {
    data:[]
}
export const cartData=(state = initialState, action)=>{
    console.log("action", action)
    switch(action.type){
        case ALL_PRODUCT_LIST:
                return {data: [...action.productData]}
        default:
            return state

    }
}