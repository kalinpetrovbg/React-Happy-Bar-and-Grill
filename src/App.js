import Header from "./components/Layout/Header";
import { Fragment } from 'react';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Menu />
      </main>
    </Fragment>
  );
}

export default App;
