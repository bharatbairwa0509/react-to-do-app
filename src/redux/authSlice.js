import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: !!localStorage.getItem('user'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem('user', 'loggedIn');
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;