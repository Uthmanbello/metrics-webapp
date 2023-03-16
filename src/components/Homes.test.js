import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit/dist';
import Homes from './Homes';
import { fetchCities } from '../redux/home/homeSlice';
import homeReducer from '../redux/home/homeSlice';

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: (selector) => mockSelector(selector),
}));

jest.mock('../redux/home/homeSlice', () => ({
  fetchCities: jest.fn(),
}));

const mockState = {
  home: {
    data: {
      coord: { lat: 9.0765, lon: 7.3986 },
      main: { temp: 28, feels_like: 29, pressure: 1011 },
      sys: { country: 'NG', sunrise: 1647294242, sunset: 1647337819 },
      timezone: 3600,
      weather: [{
        id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d',
      }],
      wind: { speed: 3.09, deg: 58, gust: 3.62 },
    },
    status: 'succeeded',
    error: null,
  },
};

describe('Homes', () => {
  beforeEach(() => {
    mockSelector.mockClear();
    mockDispatch.mockClear();
    fetchCities.mockClear();
  });

  test('renders loading state if data is not available', () => {
    mockSelector.mockReturnValue({ data: null, status: 'loading', error: null });

    render(
      <Provider store={configureStore(() => mockState)}>
        <Homes />
      </Provider>,
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  //   test('renders error message if data could not be fetched', () => {
  //     mockSelector.mockReturnValue({ data: null, status: 'failed',
  //     error: 'Failed to fetch data' });

  //     render(
  //       <Provider store={createStore(() => mockState)}>
  //         <Homes />
  //       </Provider>
  //     );

  //     expect(screen.getByText(/Error/i)).toBeInTheDocument();
  //     expect(screen.getByText(/Failed to fetch data/i)).toBeInTheDocument();
  //   });

  //   test('dispatches fetchCities action on mount', () => {
  //     mockSelector.mockReturnValue({ ...mockState.home, data: null });

  //     render(
  //       <Provider store={createStore(() => mockState)}>
  //         <Homes />
  //       </Provider>
  //     );

  //     expect(mockDispatch).toHaveBeenCalledTimes(1);
  //     expect(fetchCities).toHaveBeenCalledTimes(1);
  //   });

  //   test('renders homes component with data', () => {
  //     mockSelector.mockReturnValue(mockState.home);

  //     render(
  //       <Provider store={configureStore(() => mockState)}>
  //         <Homes />
  //       </Provider>
  //     );

//     expect(screen.getByText(/Abuja, Nigeria/i)).toBeInTheDocument();
//     expect(screen.getByText(/Coordinates/i)).toBeInTheDocument();
//     expect(screen.getByText(/Weather/i)).toBeInTheDocument();
//     expect(screen.getByText(/Temperature/i)).toBeInTheDocument();
//     expect(screen.getByText(/Wind/i)).toBeInTheDocument();
//     expect(screen.getByText(/System/i)).toBeInTheDocument();
//   });
});
