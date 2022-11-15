import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {

  const cartitems = <ul className={classes['cart-items']}>
    {[{ id: 'c1', name: 'Sushi', amount: 100, price: 99 },
    ].map(item => <li>{item.name}</li>)}</ul>;

  return <Modal>
    {cartitems}
    <div className={classes.Total}>
      <span>Total Amount</span>
      <span>33.33</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
  </Modal>
};


export default Cart;