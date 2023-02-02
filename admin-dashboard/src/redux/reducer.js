import { ALL_FILED, NEXT_PAGE, SEARCH_DATA } from "./constant"

const initialFilds={
    fild:[],
    nextfild:[],
    nexprevfild:[]
}
export const dashboardFilds=(state=initialFilds,action)=>{
    switch(action.type){
        case ALL_FILED:{
            return {...state,fild:[...action.data]}
        }
        case NEXT_PAGE:{
            if(state.nextfild.length>0){
                return {...state,nexprevfild:[...state.nextfild.slice((action.data-1)*10,action.data*10)]}
            }
            else{
                console.log("action.value",action.data)
                return {...state,nexprevfild:[...state.fild.slice((action.data-1)*10,action.data*10)]}
            }
        }
        case SEARCH_DATA:{
            if(action.data.length>0){
                console.log("true")
                return {...state,nextfild:[...searchAllData(state.fild,action.data)]}
            }
            else{
                console.log("false")
                return {...state,fild:[...state.fild]}
            }
        }
        default:
            return state;
    }
}

function searchAllData(data,text){
    let result=data.filter((e)=>{
        return e.name.toLowerCase().includes(text.length && text.toLowerCase()) || e.email.toLowerCase().includes(text.length && text.toLowerCase()) || e.role.toLowerCase().includes(text.length && text.toLowerCase())
    })
    console.log("result",result)
    return result;
}