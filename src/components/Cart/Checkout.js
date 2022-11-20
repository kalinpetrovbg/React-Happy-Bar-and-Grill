import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === ''

const Checkout = () => {

  const [validForm, setValidForm] = useState(true);

  const nameInput = useRef();
  const emailInput = useRef();
  const addressInput = useRef();
  const phoneInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    setValidForm(false);

    const enteredData = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      address: addressInput.current.value,
      phone: phoneInput.current.value
    }


    if (!isEmpty(enteredData.name)
      && !isEmpty(enteredData.email)
      && !isEmpty(enteredData.address)
      && !isEmpty(enteredData.phone)) {
      setValidForm(true)
    }

  };


  return <form onSubmit={submitHandler}>
    <div className={classes.control}>
      <label htmlFor="name">Your name</label>
      <input type="text" id="name" ref={nameInput} />

    </div>
    <div className={classes.control}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" ref={emailInput} />
    </div>
    <div className={classes.control}>
      <label htmlFor="address">Address</label>
      <input type="text" id="address" ref={addressInput} />
    </div>
    <div className={classes.control}>
      <label htmlFor="city">Phone</label>
      <input type="tel" minLength="10" maxLength="10" id="phone" ref={phoneInput} />
    </div>

    {!validForm && <p className={classes.invalid}>Please enter a valid data!</p>}

    <div className={classes.actions}>
      <button className={classes.submit}>Place Order</button>
    </div>


  </form>
}

export default Checkout;