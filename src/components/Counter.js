import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterSliceActions } from '../store/counter-slice';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: 'INCREMENT' });
    dispatch(counterSliceActions.increment());
  };

  const increaseHandler = (amount) => {
    // dispatch({ type: 'INCREASE', amount });
    dispatch(counterSliceActions.increase(10)); // passing `payload` prop. by default
  };

  const decrementHandler = () => {
    // dispatch({ type: 'DECREMENT' });
    dispatch(counterSliceActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'TOGGLE_COUNTER' });
    dispatch(counterSliceActions.toggle());
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
