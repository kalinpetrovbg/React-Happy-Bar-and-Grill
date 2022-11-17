import { useRef, useState } from 'react';

import classes from './MenuItemForm.module.css';
import Input from '../UI/Input'

const MenuItemForm = (props) => {
  const [validAmount, setValidAmount] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountValue = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountValue < 1 || enteredAmountValue > 5
    ) {
      setValidAmount(false);
      return;
    }

    props.onAddToCart(enteredAmountValue);
  };


  return <form className={classes.form} onSubmit={submitHandler}>
    <Input
      ref={amountInputRef}
      label="Amount"
      input={{
        id: "amount_" + props.id,
        type: "number",
        min: "1",
        max: "10",
        step: "1",
        defaultValue: "1",
      }}
    />
    <button>+ Add</button>
    {!validAmount && <p>Please enter a valid amount(1-5)</p>}
  </form>

};

export default MenuItemForm;