import { ALL_FILED, NEXT_PAGE, SEARCH_DATA, DELETE_SELECTED_DATA, SINGLE_DELETE, EDIT_DATA } from "./constant"

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
                return {...state,nexprevfild:[...state.fild.slice((action.data-1)*10,action.data*10)],length:state.fild.length}
            }
        }
        case SEARCH_DATA:{
            if(action.data.length>0){
                return {...state,nextfild:[...searchAllData(state.fild,action.data)],length:state.nextfild.length<10?1:state.nextfild.length}
            }
            else{
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
        case SINGLE_DELETE:{
            if(state.nextfild.length>0){
                return {...state,nextfild:[...deleteSingleData(state.nextfild,action.data)],length:state.nextfild.length}
            }
           else{
                return {...state,fild:[...deleteSingleData(state.fild,action.data)],length:action.data.length}
           }
        }
        case EDIT_DATA:{
            if(state.nextfild.length>0){
                return {...state,nextfild:[...editData(state.nextfild,action.data)],length:state.nextfild.length}
            }
           else{
                return {...state,fild:[...editData(state.fild,action.data)],length:action.data.length}
           }
        }
        default:
            return state;
    }
}

function editData(alldata,data){
    let array=[];
    for(let i=0;i<alldata.length;i++){
        if(alldata[i].id==data.id){
            alldata[i].name=data.name
            alldata[i].email=data.mail
            alldata[i].role=data.role
        }
        array.push(alldata[i])
    }
    return array;
}

function deleteSingleData(allData,id){
    return allData.filter((e)=>e.id!=id);
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