import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const signUp = createAsyncThunk('auth/signUp', async values => {
  try {
    const { data } = await axios.post('/users/signup', values);
  } catch (error) {
    console.log(error);
  }
});

const signIp = createAsyncThunk('auth/signIn', async values => {
  try {
    const { data } = await axios.post('/users/login', values);
  } catch (error) {
    console.log(error);
  }
});
