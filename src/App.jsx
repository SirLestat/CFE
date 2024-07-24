import React, { useState } from 'react';
import Header from './components/Header';
import './styles/global.css';
import UpButton from './components/UpButton';

export default function App() {
  const [count, setCount] = useState(0);
  const [elements, setElements] = useState([]);

  const handleAddElementClick = () => {
    setElements([...elements, `Element ${elements.length + 1}`]);
  };

  return (
    <>
      <Header name="Counter" />
      <section>
        <strong>{count}</strong>
        <br />
        <button
          disabled={count < 1}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
        <UpButton count={count} changeCount={setCount} />
      </section>
      <section>
        <h2>Elements</h2>
        <ul>
          {elements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={handleAddElementClick}>Add element</button>
      </section>
    </>
  );
}
