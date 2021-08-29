import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions'

function App() {
  // useSelector lets us to access to all the states
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  // dispatch lets us dispatch the actions
  const dispatch = useDispatch();
  

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>+</button>
      {isLogged ? <h3>Valuable information I should not see</h3> : ''}
    </div>
  );
}

export default App;
