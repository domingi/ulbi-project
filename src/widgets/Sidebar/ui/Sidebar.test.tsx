import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderForTest } from '~/shared/lib/tests/renderForTest/renderForTest';

describe('Sidebar Tests', () => {

  test('Load and displays Sidebar', async () => {
    renderForTest(<Sidebar />)
  
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  })

  test('Uncollapse sidebar', async () => {
    renderForTest(<Sidebar />)
  
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    const toggle = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  })
})
