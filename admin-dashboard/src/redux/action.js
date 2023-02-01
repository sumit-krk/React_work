import { GET_ALL_FILED, NEXT_PAGE } from "./constant"
export const getAllfileds=()=>{
    return {
        type:GET_ALL_FILED
    }
}

export const getNextFileds=(data)=>{
    console.log("actiondata",data)
    return{
        type:NEXT_PAGE,
        data
    }
}