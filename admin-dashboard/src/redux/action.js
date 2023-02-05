import { GET_ALL_FILED, NEXT_PAGE, SEARCH_DATA, DELETE_SELECTED_DATA } from "./constant"
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

export const deleteSelecteData=(data)=>{
    console.log("data",data);
    return{
        type:DELETE_SELECTED_DATA,
        data
    }
}