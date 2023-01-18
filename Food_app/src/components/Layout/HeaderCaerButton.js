import React from "react";
import CartIcon from "../Cart/CartIcon";
import Classes from './HeaderCartButton.module.css'
const HeaderCartButton=(props)=>{
    return <button className={Classes.button}>
        <span className={Classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your cart
        </span>
        <span className={Classes.badge}>3</span>
    </button>
}
export default HeaderCartButton;