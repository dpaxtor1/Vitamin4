import React, { useState, useEffect } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count < 0) {
      setCount(0);
      alert('Count cannot be negative');
    } else if (count > 5) {
      alert('You passed 5!');
    }
  }, [count]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Home;