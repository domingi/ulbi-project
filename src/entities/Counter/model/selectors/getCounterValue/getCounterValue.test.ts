import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from '~/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue Selector Test', () => {

  test('must return counter value', async () => {
    const state: DeepPartial<StoreScheme> = {
      counter: { value: 100 },
    }
  
    expect(getCounterValue(state as StoreScheme)).toBe(100);
  })
})
