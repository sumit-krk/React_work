import styles from './Header.module.css'
const Header=()=>{
    return (
      <div className={styles.header}>
        <div>TeeRex Store</div>
        <div>
          <i
            class="fa fa-shopping-cart"
            aria-hidden="true"
            style={{ fontSize: "35px", cursor: "pointer" }}
          >
            <span id="cart_item_count"></span>
          </i>
        </div>
      </div>
    );
}
export default Header