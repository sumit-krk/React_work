import { ADD_TO_CART, INCREASE_QUENTITY } from "./constant";
const initialState={
  currentCartData:[],
  price:0
}
export const cartData = (data = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condition", action);
      return {...data,currentCartData:[...data.currentCartData,action.data]};
    case INCREASE_QUENTITY:
      return {...data,currentCartData:[...incrementCartProduct(data.currentCartData,action.id)]}
    default:
      return data;
  }
};

function incrementCartProduct(data,id){
   let newData=data.map((e)=> e.id==id?{...e,currentQuentity:e.currentQuentity+1}:e);
   return newData
}
