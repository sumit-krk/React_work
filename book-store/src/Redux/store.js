import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare=createSagaMiddleware();
const store=configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleWare]
})

sagaMiddleWare.run(productSaga);
export default store;