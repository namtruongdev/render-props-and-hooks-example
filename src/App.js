import React, { useState } from 'react';
import List from './List';
import useCounter from './hooks';
import './App.css';

const App = () => {
  const [data, setData] = useState(['Anh', 'Linh', 'Dao']);

  const [count, Increment, Decrement] = useCounter(); // dùng hook

  //  Dùng render props
  return (
    <div className="App">
      <List
        data={data}
        render={(item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        )}
      />

      {/* Tái sử dụng logic */}
      <List
        data={data}
        render={(item, index) => (
          <ul key={index}>
            <li>Người yêu cũ: {item}</li>
          </ul>
        )}
      />

      {/* Chuyển render props sang dùng hook */}
      <div>
        <p>{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
