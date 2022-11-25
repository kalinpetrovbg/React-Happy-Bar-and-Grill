import classes from './AddUser.module.css';
import AuthCard from '../UI/AuthCard';
import { useRef } from 'react';

const AddUser = (props) => {

  const usernameField = useRef();
  const passwordField = useRef();


  const AddUserHandler = (event) => {
    event.preventDefault();
    const usernameValue = usernameField.current.value;
    const passwordValue = passwordField.current.value;

    console.log(usernameValue);
    console.log(passwordValue);

    event.target.reset()  // Perfect way of empty the input data.
  };


  return (
    <AuthCard className={classes.card}>
      <form className={classes.login} onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={usernameField} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordField} />
        <button type="submit">Add User</button>
      </form>
    </ AuthCard >
  )
};

export default AddUser;