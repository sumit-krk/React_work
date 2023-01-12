import {takeEvery, put} from 'redux-saga/effects'
import { ALL_PRODUCT_LIST } from "./constant";
function* getProductApi(){
    let productData=yield fetch('https://fakestoreapi.com/products');
    productData=yield productData.json();
    yield put({type:ALL_PRODUCT_LIST, productData})
    console.log("product api called",productData)
}
function* productSaga(){
    yield takeEvery('ADD_TO_CART', getProductApi);
    // yield takeEvery('REMOVE_PRODUCT', removeProduct);
}
export default productSaga;