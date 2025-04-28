import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice Test', () => {

  test('must increase counter value', async () => {
    const state: CounterSchema = {
      value: 100,
    };
    const updatedState = counterReducer(state, counterActions.increment());
  
    expect(updatedState.value).toBe(101);
  })

  test('must decrease counter value', async () => {
    const state: CounterSchema = {
      value: 100,
    };
    const updatedState = counterReducer(state, counterActions.decrement());
  
    expect(updatedState.value).toBe(99);
  })

  test('should work with initial store', async () => {
    const updatedState = counterReducer(undefined, counterActions.increment());
  
    expect(updatedState.value).toBe(1);
  })
})
