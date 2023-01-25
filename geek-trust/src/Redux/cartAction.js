import { INCREASE_QUENTITY } from "./constant"

export const increaseProduct=(e)=>{
    console.log("cartAction",e)
    return {
        type:INCREASE_QUENTITY,
        id:e
    }
}