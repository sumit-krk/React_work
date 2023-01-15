import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SELECTED_DATA } from "./constant"
export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}
export const removeToCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        data
    }
}
export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    }
}

export const product_filter=(selectedData)=>{
        return {
            type:SELECTED_DATA,
            selectedData
        }
}