import { DECREASE_QUENTITY, INCREASE_QUENTITY } from "./constant"

export const increaseProduct=(e)=>{
    console.log("cartAction",e)
    return {
        type:INCREASE_QUENTITY,
        id:e
    }
}

export const decrementProduct=(e)=>{
    return {
        type:DECREASE_QUENTITY,
        id:e
    }
}