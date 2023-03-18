import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound component', () => {
  it('should render Navbar1 and a message indicating a 404 error', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(getByText('404 - Page Not Found')).toBeInTheDocument();
    expect(getByText('The page you are looking for could not be found.')).toBeInTheDocument();
  });
});
