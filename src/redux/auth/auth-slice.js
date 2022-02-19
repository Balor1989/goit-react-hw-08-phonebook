import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './auth-operations';

const initState = {
  token: null,
  isLoggedIn: false,
  user: { name: null, email: null },
};

const authSlice = createSlice({
  name: 'auth',
  initState,
  extraReducers: {
    [signUp.fulfilled](state, action) {},
  },
});

export default authSlice.reducer;
