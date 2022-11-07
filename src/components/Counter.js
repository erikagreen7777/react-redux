import classes from "./Counter.module.css";
/*
there's a useStore custom hook from the redux team as well that gives you direct access to The Store
but useSelector is a bit more convenient to use because you can automatically select 
a part of the state managed by the store. If we were using a class based component, there's also
connect function as a wrapper around class component to The Store
*/
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //auatomatically manages subscription for youto store
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
