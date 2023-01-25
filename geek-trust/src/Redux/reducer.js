import { ADD_TO_CART, DECREASE_QUENTITY, INCREASE_QUENTITY } from "./constant";
const initialState={
  currentCartData:[],
  price:0
}
export const cartData = (data = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...data,currentCartData:[...data.currentCartData,action.data]};
    case INCREASE_QUENTITY:
      return {...data,currentCartData:[...incrementCartProduct(data.currentCartData,action.id)]};
    case DECREASE_QUENTITY:
      return {...data,currentCartData:[...decrementCartProduct(data.currentCartData,action.id)]};
    default:
      return data;
  }
};

function incrementCartProduct(data,id){
   let newData=data.map((e)=> e.id==id?{...e,price:calculatePrice(e.InitialPrice,e.currentQuentity+1),currentQuentity:e.currentQuentity+1}:e);
   return newData
}
function decrementCartProduct(data,id){
  let newData=data.map((e)=> e.id==id?{...e,currentQuentity:e.currentQuentity-1,price:calculatePrice(e.InitialPrice,e.currentQuentity-1)}:e);
  return newData
}

function calculatePrice(InitialPrice,quentity){
  return InitialPrice*quentity;
}
