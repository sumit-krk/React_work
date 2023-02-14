import { takeEvery, put } from 'redux-saga/effects'
import { GET_BOOK_DATA,SET_BOOK_DATA } from './constant';

function* getProducts() {
    let data = yield fetch('https://example-data.draftbit.com/books?_limit=50');
    data = yield data.json();
    yield put({type: SET_BOOK_DATA, data})
}

function* productSaga() {
    yield takeEvery(GET_BOOK_DATA, getProducts)
}

export default productSaga;
