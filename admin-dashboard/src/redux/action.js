import { GET_ALL_FILED, NEXT_PAGE, SEARCH_DATA, DELETE_SELECTED_DATA, SINGLE_DELETE, EDIT_DATA } from "./constant"
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

export const deleteSingleData=(data)=>{
    return{
        type:SINGLE_DELETE,
        data
    }
}

export const editData=(data)=>{
    console.log(data);
    return {
        type:EDIT_DATA,
        data
    }
}