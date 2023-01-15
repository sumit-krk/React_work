import styles from './Header.module.css'
import {useSelector} from 'react-redux'
const Header=()=>{
  let data = useSelector((state)=>state.cartData);
    return (
      <div className={styles.header}>
        <div>TeeRex Store</div>
        <div>
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{ fontSize: "35px", cursor: "pointer" }}
          >
            <span id="cart_item_count"></span>
            <span style={{position:'absolute',top:'0px'}}>{data.length}</span>
          </i>
        </div>
      </div>
    );
}
export default Header