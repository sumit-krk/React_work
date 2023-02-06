import { ALL_FILED, NEXT_PAGE, SEARCH_DATA, DELETE_SELECTED_DATA } from "./constant"

const initialFilds={
    fild:[],
    nextfild:[],
    nexprevfild:[],
    length:0
}
export const dashboardFilds=(state=initialFilds,action)=>{
    switch(action.type){
        case ALL_FILED:{
            return {...state,fild:[...action.data],length:action.data.length}
        }
        case NEXT_PAGE:{
            if(state.nextfild.length>0){
                return {...state,nexprevfild:[...state.nextfild.slice((action.data-1)*10,action.data*10)],length:state.nextfild.length}
            }
            else{
                console.log("action.value",action.data)
                return {...state,nexprevfild:[...state.fild.slice((action.data-1)*10,action.data*10)],length:state.fild.length}
            }
        }
        case SEARCH_DATA:{
            if(action.data.length>0){
                console.log("true")
                return {...state,nextfild:[...searchAllData(state.fild,action.data)],length:state.nextfild.length<10?1:state.nextfild.length}
            }
            else{
                console.log("false")
                return {...state,fild:[...state.fild],nextfild:[],length:state.fild.length}
            }
        }
        case DELETE_SELECTED_DATA:{
            if(state.nextfild.length>0){
                return {...state,nextfild:[...deletedSelectedData(state.nextfild,action.data)],length:state.nextfild.length}
            }
           else{
                return {...state,fild:[...deletedSelectedData(state.fild,action.data)],length:action.data.length}
           }
        }
        default:
            return state;
    }
}

function deletedSelectedData(allData,data){
    let arr=[];
    for(let i=0;i<allData.length;i++){
        let demo=false;
        for(let j=0;j<data.length;j++){
            if(data[j].id==allData[i].id){
                demo=true;
            }
        }
        if(demo==false){
            arr.push(allData[i]);
        }
    }
    return arr;
}

function searchAllData(data,text){
    let result=data.filter((e)=>{
        return e.name.toLowerCase().includes(text.length && text.toLowerCase()) || e.email.toLowerCase().includes(text.length && text.toLowerCase()) || e.role.toLowerCase().includes(text.length && text.toLowerCase())
    })
    return result;
}