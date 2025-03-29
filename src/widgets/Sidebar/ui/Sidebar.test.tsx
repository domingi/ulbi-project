import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslations } from '~/shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('Sidebar Tests', () => {

  test('Load and displays Sidebar', async () => {
    renderWithTranslations(<Sidebar />)
  
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  })

  test('Uncollapse sidebar', async () => {
    renderWithTranslations(<Sidebar />)
  
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    const toggle = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  })
})
