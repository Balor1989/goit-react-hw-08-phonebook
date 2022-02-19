import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = createAsyncThunk('auth/signUp', async values => {
  try {
    const { data } = await axios.post('/users/signup', values);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const signIn = createAsyncThunk('auth/signIn', async values => {
  try {
    const { data } = await axios.post('/users/login', values);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
  } catch (error) {
    console.log(error);
  }
});
