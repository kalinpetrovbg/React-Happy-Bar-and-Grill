import { Fragment } from "react";
import classes from './Header.module.css';
import headerImage from '../../assets/header.png';

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>Happy Bar & Grill</h1>
      <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
      <img src={headerImage} alt="Website's header" />
    </div>
  </Fragment>

};

export default Header;