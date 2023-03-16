import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Homes from '../components/Homes';
import store from '../redux/store';

jest.mock('../redux/home/homeSlice', () => ({
  fetchCities: jest.fn(),
}));

describe('Homes component', () => {
  test('should render the loading state initially', async () => {
    render(
      <Provider store={store}>
        <Homes />
      </Provider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  test('should render the error state if data fetching fails', async () => {
    const errorMessage = 'Unable to fetch data';
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const fetchCitiesMock = jest.fn(() => Promise.reject(new Error(errorMessage)));
    require('../redux/home/homeSlice').fetchCities = fetchCitiesMock;

    render(
      <Provider store={store}>
        <Homes />
      </Provider>
    );

    await waitFor(() => expect(screen.queryByText(/error/i)).toBeInTheDocument());
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();

    console.error.mockRestore();
  });

  test('should render the data after successful fetching', async () => {
    const data = {
      timezone: 7200,
      coord: { lon: 55.17, lat: 25.21 },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      main: { temp: 301.15, feels_like: 303.85, temp_min: 301.15, temp_max: 301.15, pressure: 1012, humidity: 23 },
      wind: { speed: 1.34, deg: 0 },
      sys: { type: 1, id: 7585, country: 'AE', sunrise: 1642934019, sunset: 1642974634 },
    };

    const fetchCitiesMock = jest.fn(() => Promise.resolve(data));
    require('../redux/home/homeSlice').fetchCities = fetchCitiesMock;

    render(
      <Provider store={store}>
        <Homes />
      </Provider>
    );

    await waitFor(() => expect(screen.queryByText(/Abuja, Nigeria/i)).toBeInTheDocument());
    expect(screen.getByText(/Coordinates/i)).toBeInTheDocument();
    expect(screen.getByText(/Weather/i)).toBeInTheDocument();
    expect(screen.getByText(/Temperature/i)).toBeInTheDocument();
    expect(screen.getByText(/Wind/i)).toBeInTheDocument();
    expect(screen.getByText(/System/i)).toBeInTheDocument();
  });
});
