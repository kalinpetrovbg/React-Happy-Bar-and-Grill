import { Fragment } from "react";
import classes from './Header.module.css';
import headerImage from '../../assets/header.png';
import HeaderCartButton from "./HeaderCartButton";
import AddUser from "../../components/Auth/AddUser";



const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>Happy Bar & Grill</h1>
      <AddUser />
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={headerImage} alt="Website's header" />
    </div>

  </Fragment>

};

export default Header;