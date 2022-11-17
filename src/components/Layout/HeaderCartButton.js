import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnIsActive ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsActive(true);

    const timer = setTimeout(() => {
      setBtnIsActive(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return <button className={btnClasses} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberItems}</span>
  </button>

};


export default HeaderCartButton;