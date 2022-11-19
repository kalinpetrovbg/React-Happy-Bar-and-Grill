import { useEffect, useState } from 'react';

import Card from '../UI/Card'
import MenuItem from './MenuItem';
import classes from './AvailableMenu.module.css';




const AvailableMenu = () => {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch('https://happy-bar-and-grill-default-rtdb.europe-west1.firebasedatabase.app/menu.json');
      const responseData = await response.json();

      const loadedMenu = [];

      for (const key in responseData) {
        loadedMenu.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].weight
        });
      }
      setMenu(loadedMenu);
      console.log(loadedMenu);
    };

    fetchMenu();
  }, []);


  const menuList = menu.map((item) => (
    <MenuItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return <section className={classes.meals}>
    <Card>
      <ul>
        {menuList}
      </ul>
    </Card>
  </section>
};


export default AvailableMenu;