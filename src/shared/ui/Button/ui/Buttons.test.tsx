import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button'

test('Load and displays Button', async () => {
  render(<Button>TEST</Button>)

  expect(await screen.findByText('TEST')).toBeInTheDocument();
})