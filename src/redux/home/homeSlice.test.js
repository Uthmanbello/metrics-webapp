import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Homes from '../../components/Homes';
import configureStore from 'redux-mock-store';
import { fetchCities } from './homeSlice';

jest.mock('./homeSlice');

const mockStore = configureStore([]);

describe('Homes component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      home: {
        data: {
          coord: {
            lat: 25.21490645,
            lon: 55.174787069501136,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 298.15,
            feels_like: 296.14,
            temp_min: 298.15,
            temp_max: 298.15,
            pressure: 1016,
            humidity: 42,
          },
          wind: {
            speed: 1.54,
            deg: 189,
          },
          sys: {
            type: 1,
            id: 7576,
            country: 'AE',
            sunrise: 1647834492,
            sunset: 1647878417,
          },
        },
        status: 'succeeded',
        error: null,
      },
    });
  });

  test('renders Homes component with data', async () => {
    render(
      <Provider store={store}>
        <Homes />
      </Provider>
    );

    // Wait for fetchCities to complete
    await waitFor(() => {
      expect(fetchCities).toHaveBeenCalled();
    });

    expect(screen.getByText('Abuja, Nigeria')).toBeInTheDocument();
    expect(screen.getByText('5 Categories')).toBeInTheDocument();
    expect(screen.getByText('STATS BY CATEGORY')).toBeInTheDocument();

    // Check if all links are present
    expect(screen.getByText('Coordinates')).toBeInTheDocument();
    expect(screen.getByText('Weather')).toBeInTheDocument();
    expect(screen.getByText('Temperature')).toBeInTheDocument();
    expect(screen.getByText('Wind')).toBeInTheDocument();
    expect(screen.getByText('System')).toBeInTheDocument();

    // Check if all items have the correct number of sub-items
    expect(screen.getByText('Coordinates 2 items')).toBeInTheDocument();
    expect(screen.getByText('Weather 4 items')).toBeInTheDocument();
    expect(screen.getByText('Temperature 6 items')).toBeInTheDocument();
    expect(screen.getByText('Wind 2 items')).toBeInTheDocument();
    expect(screen.getByText('System 5 items')).toBeInTheDocument();
  });

  test('renders Homes component with loading state', () => {
    store = mockStore({
      home: {
        data: [],
        status: 'loading',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Homes />
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders Homes component with error state', () => {
    store = mockStore({
      home: {
        data: [],
        status: 'failed',
        error: 'Unable to fetch cities',
      },
    });

    render(
      <Provider store={store}>
        <Homes />
      </Provider>
    );

    expect(screen.getByText('Error: Unable to fetch cities')).toBeInTheDocument();
  });
});
