import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ProductDetails from './component/ProductDetails';
import Product from './component/Product';
import Home from './component/Home';
import Cart from './component/Cart';
import ProductDone from './component/ProductDone';

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/product',
        element: <Product />
      },
      {
        path:'/productdetails/:id/:price',
        element: <ProductDetails />
      },
      {
        path:'/Cart',
        element: <Cart />
      },
      {
        path:'/payment',
        element: <ProductDone />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={appRouter}>
          <App />
        </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
