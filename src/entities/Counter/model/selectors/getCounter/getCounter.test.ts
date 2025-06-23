import { StoreScheme } from '~/app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter Selector Test', () => {

  test('must return state', async () => {
    const state: DeepPartial<StoreScheme> = {
      counter: { value: 100 },
    }
  
    expect(getCounter(state as StoreScheme)).toEqual({ value: 100 });
  })
})
