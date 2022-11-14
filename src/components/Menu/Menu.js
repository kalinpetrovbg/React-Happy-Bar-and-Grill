import AvailableMenu from './AvailableMenu';
import MenuSummary from './MenuSummary';
import { Fragment } from 'react';


const Menu = () => {
  return (
    <Fragment>
      <MenuSummary />
      <AvailableMenu />
    </Fragment>
  );
};


export default Menu;