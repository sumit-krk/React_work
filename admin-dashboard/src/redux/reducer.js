import { GET_ALL_FILED } from "./constant"

const initialFilds={
    fild:[]
}
export const dashboardFilds=(state=initialFilds,action)=>{
    switch(action.type){
        case GET_ALL_FILED:{
            return {}
        }
        default:
            return state
    }
}