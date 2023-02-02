import { GET_ALL_FILED, NEXT_PAGE, SEARCH_DATA } from "./constant"
export const getAllfileds=()=>{
    return {
        type:GET_ALL_FILED
    }
}

export const getNextFileds=(data)=>{
    return{
        type:NEXT_PAGE,
        data
    }
}

export const getSearchData=(data)=>{
    return {
        type:SEARCH_DATA,
        data
    }
}