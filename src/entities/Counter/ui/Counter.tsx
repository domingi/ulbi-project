import { useDispatch, useSelector } from "react-redux";
import { Button } from "~/shared/ui/Button";
import { ButtonTheme } from "~/shared/ui/Button/ui/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid="counter">
      <h1>{value}</h1>
      <Button data-testid="counter-increase-button" onClick={increment} theme={ButtonTheme.OUTLINE}>increment</Button>
      <Button onClick={decrement} theme={ButtonTheme.OUTLINE}>decrement</Button>
    </div>
  );
};