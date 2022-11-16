import Header from "./components/Layout/Header";
import { Fragment, useState } from 'react';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartisShown] = useState(false);

  const showCartHandler = () => {
    setCartisShown(true);
  };

  const hideCartHandler = () => {
    setCartisShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      <main>
        <Menu />
      </main>
    </CartProvider>
  );
}

export default App;
