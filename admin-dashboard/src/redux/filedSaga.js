import { takeEvery, put } from 'redux-saga/effects'
import { GET_ALL_FILED, ALL_FILED } from './constant';
function* getFildes() {
    let data = yield fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
    data = yield data.json();
    yield put({type: ALL_FILED, data})
}
function* dashboardFileds() {
    yield takeEvery(GET_ALL_FILED, getFildes)
}
export default dashboardFileds;