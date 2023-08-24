import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://randomuser.me/api/?results=5';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('unable to get users.');
  }
});

const initialState = {results: []}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => action.payload)
      .addCase(fetchUsers.pending, (state, action) => console.log('loading...'))
      .addCase(fetchUsers.rejected, (state, action) => console.log(action.payload))
  }
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;