import { screen } from '@testing-library/react'
import { Counter } from './Counter'
import { renderForTest } from '~/shared/lib/tests/renderForTest/renderForTest';
import { userEvent } from '@storybook/test';

describe('Counter Tests', () => {

  test('Load and displays Counter', async () => {
    renderForTest(<Counter />);
  
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  })

  test('Counter have initial value', async () => {
    const initialState = {
      counter: {
        value: 200,
      }
    };
    renderForTest(<Counter />, { initialState });
  
    expect(screen.getByTestId('counter')).toHaveTextContent('200');
  })

  test('Increase counter value and update state', async () => {
    const initialState = {
      counter: {
        value: 200,
      }
    };
    renderForTest(<Counter />, { initialState });
    const increaseButton = screen.getByTestId('counter-increase-button');
    await userEvent.click(increaseButton);
    expect(screen.getByTestId('counter')).toHaveTextContent('201');
  })
})
