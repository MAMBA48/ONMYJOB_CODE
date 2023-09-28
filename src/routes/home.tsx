import { useState } from 'react';
import Card from '../components/card';

const Home = () => {
  const [style, setStyle] = useState('container');
  const changeStyle = () => {
    setStyle(style === 'container' ? 'container-red' : 'container');
  };

  return (
    <main className={style}>
      <h2 align="center">Home page</h2>
      <h3 align="center">welcome</h3>
      <section>
        <h2>About Us</h2>
        <Card />
        <aside>
          <button onClick={changeStyle}>Change</button>
        </aside>
      </section>
    </main>
  );
};
export default Home;
