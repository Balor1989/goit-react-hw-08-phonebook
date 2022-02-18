import { createSlice } from '@reduxjs/toolkit';

const initState = {
  token: null,
  isLoggedIn: false,
  user: { name: null, email: null },
};

const authSlice = createSlice({
  name: 'auth',
  initState,
  extraReducers: {},
});

export default authSlice.reducer;
