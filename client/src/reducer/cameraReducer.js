import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

// 셀프카메라 사진
export const selfCameraImgSlice = createSlice({
  name: 'selfCameraImg',
  initialState,
  reducers: {
    setSelfCameraImg: (state, action) => {
      state.selfCameraImg = action.payload;
    }
  }
});

export const { setSelfCameraImg } = selfCameraImgSlice.actions;

export default selfCameraImgSlice.reducer;
