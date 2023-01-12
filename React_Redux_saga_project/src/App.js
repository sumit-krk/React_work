// import './App.css';
import { useDispatch } from 'react-redux';
import { addToCart, getListOfProduct } from './Redux/action';
import Header from './component/Header';
import CartCount from './component/CartCount';
import { ALL_PRODUCT_LIST } from './Redux/constant';
import { useEffect } from 'react';
import ShowProductInUi from './component/ShowProductInUi';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(addToCart())
  },[])
  return (
    <div className="App">
      {/* <CartCount /> */}
      {/* <button onClick={()=>dispatch(addToCart())}>Add To Cart</button> */}
      {/* <button onClick={()=>dispatch({type:ALL_PRODUCT_LIST})}>Get product list</button> */}
      <Header />
      <ShowProductInUi />
    </div>
  );
}

export default App;
