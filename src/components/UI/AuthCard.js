import classes from './AuthCard.module.css';


const AuthCard = (props) => {
  return <div className={classes.input}>{props.children}</div>
};

export default AuthCard;