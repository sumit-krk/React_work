import { DECREASE_QUENTITY, INCREASE_QUENTITY } from "./constant"

export const increaseProduct=(e,InitialPrice)=>{
    console.log("cartAction",e)
    return {
        type:INCREASE_QUENTITY,
        id:e,
        InitialPrice
    }
}

export const decrementProduct=(e)=>{
    return {
        type:DECREASE_QUENTITY,
        id:e
    }
}