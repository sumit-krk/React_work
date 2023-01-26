import styles from './Header.module.css'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
const Header=()=>{
  let data = useSelector((state)=>state.cartData.currentCartData);
    return (
      <div className={styles.header}>
        <div>TeeRex Store</div>
          <div style={{position:'relative'}}>
          <Link to="/CartPage">
            <i
              className="fa fa-shopping-cart"
              aria-hidden="true"
              style={{ fontSize: "35px", cursor: "pointer",color:'gray' }}
            >
              <span id="cart_item_count"></span>
              <span style={{ position: "absolute", top: "4px", fontSize:'15px', borderRadius:'50%',padding:'3px',backgroundColor:'gray',color:'white' }}>
                {data.length}
              </span>
            </i>
            </Link>
          </div>
      </div>
    );
}
export default Header