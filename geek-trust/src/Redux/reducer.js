import { ADD_TO_CART, EMPTY_CART } from "./constant";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condition ", action);
      return [action.data, ...data];
    case EMPTY_CART:
      console.warn("EMPTY CART condition ", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
