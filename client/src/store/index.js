import { configureStore } from '@reduxjs/toolkit';
import selfCameraImgReducer from '../reducer/cameraReducer';

export const store = configureStore({
  reducer: {
    selfCameraImg: selfCameraImgReducer
  }
});
