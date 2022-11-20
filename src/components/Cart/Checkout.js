import classes from './Checkout.module.css';


const Checkout = () => {
  return <form>
    <div className={classes.control}>
      <label htmlFor="name">Your name</label>
      <input type="text" id="name" />
    </div>
    <div className={classes.control}>
      <label htmlFor="street">Street</label>
      <input type="text" id="street" />
    </div>
    <div className={classes.control}>
      <label htmlFor="postcode">Post code</label>
      <input type="text" id="postcode" />
    </div>
    <div className={classes.control}>
      <label htmlFor="city">City</label>
      <input type="text" id="city" />
    </div>
    <button>Place Order</button>




  </form>
}


export default Checkout;