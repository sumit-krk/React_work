import {ADD_TO_CART, SET_BOOK_DATA} from './constant'
const initialState={
    currentBookData:[],
    cartData:[]
}
export const BookData=(store=initialState,action)=>{
    switch(action.type){
        case SET_BOOK_DATA:
            return {...store,currentBookData:[...store.currentBookData,...SetPrice(action.data)]};
        case ADD_TO_CART:
            return {...store,cartData:[...store.cartData,action.data]}
        default:
            return store;
    }
}
const SetPrice=(data)=>{
    let array=[];
    for(let i=0;i<data.length;i++){
        array.push({...data[i],price:Math.floor(Math.random()*(999-100+1)+100)})
    }
    return array;
}