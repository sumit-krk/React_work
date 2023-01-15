import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { addToCart, emptyCart, removeToCart } from '../../Redux/action';
import { productList } from '../../Redux/productAction';
import styles from './product.module.css'

function Product() {
  const dispatch = useDispatch();
  let {fetchData,filterData} = useSelector((state)=>state.productData);
  let mappingData=filterData[0]?.length?filterData[0]:fetchData

  useEffect(()=>{
    dispatch(productList())
  },[])

  

  return (
    <div style={{display:'grid', gridTemplateColumns:'4fr 4fr 4fr', gridGap:'20px'}}>
      {/* <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <div>
        <button onClick={() => dispatch(removeToCart(product.name))}>
          Remove from Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div> */}
       {mappingData.map((e,index)=>{ 
            return <div className={styles.card} key={index}>
                <div>{e?.name}</div>
                <img height={200} weigth={150} src={e?.imageURL} />
                <div style={{display:'flex',justifyContent:'space-around',padding:'5px',padding:'1px'}}>
                    <div>Rs {e?.price}</div>
                    <div><button onClick={() => dispatch(addToCart(e))}>Add to Cart</button></div>
                </div>
            </div>
       })}
    </div>
  );
}

export default Product;