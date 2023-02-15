import {ADD_TO_CART, DECRISE_QUENTITY, FILTER_PRODUCT, INCREASE_QUENTITY, REMOVE_FROM_CART, SET_BOOK_DATA} from './constant'
const initialState={
    currentBookData:[],
    cartData:[],
    filterData:[],
}
export const BookData=(store=initialState,action)=>{
    switch(action.type){
        case SET_BOOK_DATA:
            return {...store,currentBookData:[...store.currentBookData,...SetPrice(action.data)]};
        case ADD_TO_CART:
            return {...store,cartData:[...store.cartData,action.data]};
        case REMOVE_FROM_CART:
            return {...store,cartData:[...removeData(store.cartData,action.data)]};
        case INCREASE_QUENTITY:
            return {...store,cartData:[...manageQuentity(store.cartData,action.data,"inc")]};
        case DECRISE_QUENTITY:
            return {...store,cartData:[...manageQuentity(store.cartData,action.data,"dec")]};
        case FILTER_PRODUCT:
            return {...store,filterData:[...filterData(store.currentBookData,action.data)]};
        default:
            return store;
    }
}
const SetPrice=(data)=>{
    let array=[];
    for(let i=0;i<data.length;i++){
        array.push({...data[i],price:Math.floor(Math.random()*(999-100+1)+100),quantity:1})
    }
    return array;
}

//function for remove data from cart
const removeData=(alldata,data)=>{
    console.log("alldata",alldata,"data",data)
    let array=alldata.filter((e)=> e.id!=data.id)
    return array;
}

//increase quantity in cart
const manageQuentity=(alldata,data,type)=>{
    let array=[];
    for(let i=0;i<alldata.length;i++){
        if(alldata[i].id==data.id){
            if(type=='inc') {alldata[i].quantity+=1}
            else if(type=="dec") {alldata[i].quantity-=1}
        }
        array.push(alldata[i]);
    }
    console.log("array",array)
    return array;
}

// function for filter data
const filterData = (data, selectedValues) => {
    let result = data.filter((e) => {
      if (selectedValues.includes(e.format)) {
        return e;
      } else if (selectedValues.includes("300")) {
        return e.price >= 100 && e.price <= 300;
      } else if (selectedValues.includes("600")) {
        return e.price >= 301 && e.price <= 600;
      } else if (selectedValues.includes("1000")) {
        return e.price >= 601 && e.price<=1000;
      } else if(selectedValues.includes("3")){
        return e.rating >= 3;
      }  else if(selectedValues.includes("4")){
        return e.rating >= 4;
      } 
    });
    return result;
  };
  