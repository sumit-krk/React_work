import { ALL_FILED } from "./constant"

const initialFilds={
    fild:[]
}
export const dashboardFilds=(state=initialFilds,action)=>{
    switch(action.type){
        case ALL_FILED:{
            return {fild:[...state.fild,action.data]}
        }
        default:
            return state
    }
}