import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

// 로그인 정보
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    }
  }
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
