import { useEffect, useState } from 'react';

import Card from '../UI/Card'
import MenuItem from './MenuItem';
import classes from './AvailableMenu.module.css';


const AvailableMenu = () => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [requestError, setRequestError] = useState(false)

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch('https://happy-bar-and-grill-default-rdtdb.europe-west1.firebasedatabase.app/menu.json  ');


      if (!response.ok) {
        throw new Error('Blabla')
      }
      const responseData = await response.json();


      responseData.shift();  // remove first null element

      const loadedMenu = [];

      for (const key in responseData) {
        loadedMenu.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description
        });
      }
      setMenu(loadedMenu);
      setIsLoading(false);
    };

    fetchMenu().catch((error) => {
      setIsLoading(false);
      setRequestError(error.message);
    });
  }, []);

  if (isLoading) {
    return <p className={classes.loading}>Loading...</p>
  }

  if (requestError) {
    return <p className={classes.error}>{requestError}</p>
  }

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