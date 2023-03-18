import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar1 from './Navbar1';

describe('Navbar1', () => {
  test('renders Navbar1 component', () => {
    render(
      <BrowserRouter>
        <Navbar1 />
      </BrowserRouter>,
    );

    const topElement = screen.getByText('details');
    expect(topElement).toBeInTheDocument();

    const backLink = screen.getByTestId('back-link');
    expect(backLink).toBeInTheDocument();

    const microphoneIcon = screen.getByTestId('microphone-icon');
    expect(microphoneIcon).toBeInTheDocument();

    const gearIcon = screen.getByTestId('gear-icon');
    expect(gearIcon).toBeInTheDocument();
  });
});
