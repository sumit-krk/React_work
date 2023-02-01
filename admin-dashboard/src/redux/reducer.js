import { ALL_FILED, NEXT_PAGE } from "./constant"

const initialFilds={
    fild:[],
    nextfild:[]
}
export const dashboardFilds=(state=initialFilds,action)=>{
    switch(action.type){
        case ALL_FILED:{
            return {...state,fild:[...action.data]}
        }
        case NEXT_PAGE:{
            return {...state,nextfild:[state.fild.slice((action.data-1)*10,action.data*10)]}
        }
        default:
            return state
    }
}