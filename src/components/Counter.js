import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const increaseHandler = (amount) => {
    dispatch({ type: 'INCREASE', amount });
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE_COUNTER' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* {showCounter && <div className={classes.value}>{counter}</div>} */}
      <div
        style={{ visibility: showCounter ? 'visible' : 'hidden' }}
        className={classes.value}
      >
        {counter}
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => increaseHandler(10)}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
