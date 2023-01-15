import { SET_PRODUCT_LIST, SELECTED_DATA } from "./constant";
const initialState={
    fetchData:[],
    filterData:[]
}
export const productData = (data = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.warn("PRODUCT_LIST condition ", action);
      return {...data,fetchData:action.data};
    case SELECTED_DATA:
      return {...data, filterData:[filterHandler(data.fetchData, action.selectedData)]};
    default:
      return data;
  }
};
const filterHandler = (data, selectedValues) => {
  let result = data.filter((e) => {
    if (selectedValues.includes(e.color)) {
      return e;
    } else if (selectedValues.includes(e.gender)) {
      return e;
    } else if (selectedValues.includes(e.type)) {
      return e;
    } else if (selectedValues.includes("250")) {
      return e.price <= 250;
    } else if (selectedValues.includes("251")) {
      return e.price >= 251 && e.price <= 450;
    } else if (selectedValues.includes("450")) {
      return e.price >= 450;
    }
  });
  return result;
};
