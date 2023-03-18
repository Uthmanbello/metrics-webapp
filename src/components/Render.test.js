import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

describe('About', () => {
  it('should render the about page with correct heading and text', () => {
    const { getByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    expect(getByText('About us')).toBeInTheDocument();
    expect(getByText(/Welcome to our weather app!/i)).toBeInTheDocument();
    expect(getByText(/Contact us/i)).toBeInTheDocument();
  });

  it('should render a link with a back arrow icon', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    const link = getByRole('link');
    expect(link).toHaveAttribute('href', '/');

    const icon = link.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('fa-chevron-left');
    expect(icon).toHaveStyle('font-size: 20px; margin-top: 10px; margin-left: 10px;');
  });
});
