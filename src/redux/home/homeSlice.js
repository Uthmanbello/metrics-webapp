import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=25.21490645&lon=55.174787069501136&appid=ae7d13e04687fe4d2aa4951eff32b8bd`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error('Unable to fetch cities');
    }
  }
);


const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const HomeSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default HomeSlice.reducer;
