import { ALL_FILED, NEXT_PAGE, SEARCH_DATA } from "./constant"

const initialFilds={
    fild:[],
    nextfild:[],
}
export const dashboardFilds=(state=initialFilds,action)=>{
    switch(action.type){
        case ALL_FILED:{
            return {...state,fild:[...action.data]}
        }
        case NEXT_PAGE:{
            return {...state,nextfild:[...state.fild.slice((action.data-1)*10,action.data*10)]}
        }
        case SEARCH_DATA:{
            return {...state,nextfild:[...searchAllData(state.fild,action.data)]}
        }
        default:
            return state
    }
}

function searchAllData(data,text){
    let result=data.filter((e)=>{
        return e.name.toLowerCase().includes(text.length && text.toLowerCase()) || e.email.toLowerCase().includes(text.length && text.toLowerCase()) || e.role.toLowerCase().includes(text.length && text.toLowerCase())
    })
    console.log("result",result)
    return result;
}