import {GET_BOOK_DATA, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUENTITY, DECRISE_QUENTITY, FILTER_PRODUCT, SEARCH_DATA} from './constant'

export const gatAllBookData=()=>{
    return {
        type:GET_BOOK_DATA,
    }
}

export const addToCart=(data)=>{
    console.log(data)
    return {
        type:ADD_TO_CART,
        data
    }
}

export const removeFromCart=(data)=>{
    console.log(data)
    return{
        type:REMOVE_FROM_CART,
        data,
    }
}

export const increaseQuantity=(data)=>{
    return{
        type:INCREASE_QUENTITY,
        data
    }
}

export const decriseQuantity=(data)=>{
    return{
        type:DECRISE_QUENTITY,
        data
    }
}

export const filterProduct=(data)=>{
    return{
        type:FILTER_PRODUCT,
        data
    }
}

export const searchData=(text)=>{
    return{
        type:SEARCH_DATA,
        text
    }
}
