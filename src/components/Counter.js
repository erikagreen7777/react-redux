import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
/*
there's a useStore custom hook from the redux team as well that gives you direct access to The Store
but useSelector is a bit more convenient to use because you can automatically select 
a part of the state managed by the store. If we were using a class based component, there's also
connect function as a wrapper around class component to The Store
*/
import { useSelector, useDispatch } from "react-redux";

//class based components with redux: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600172#content

const Counter = () => {
  //auatomatically manages subscription for youto store
  const counter = useSelector((state) => state.counter.counter);
  const showCounterToggle = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: UNIQUEID, payload: <whaever you pass>}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounterToggle && counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
