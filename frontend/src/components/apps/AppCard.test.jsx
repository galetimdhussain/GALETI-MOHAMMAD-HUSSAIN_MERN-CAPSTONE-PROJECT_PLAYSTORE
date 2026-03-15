import { ThemeProvider } from '@mui/material';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AppCard from './AppCard';
import theme from '../../styles/theme';

const app = {
  id: 'app-1',
  name: 'Galaxy Racers',
  description: 'Arcade space racing experience with tournaments and rewards.',
  version: '3.0.0',
  releaseDate: '2026-03-01T00:00:00.000Z',
  category: { name: 'Games' },
  genre: 'Arcade',
  rating: 4.8,
  visibility: 'public',
  iconUrl: 'https://example.com/image.png',
};

describe('AppCard', () => {
  it('renders application details and detail link', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <AppCard app={app} />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Galaxy Racers')).toBeInTheDocument();
    expect(screen.getByText('Arcade')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View Details' })).toHaveAttribute('href', '/apps/app-1');
  });
});
