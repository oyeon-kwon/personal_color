import { configureStore } from '@reduxjs/toolkit'
import selfCameraImgReducer from '../reducer/index'

export const store = configureStore({
  reducer: {
    selfCameraImg: selfCameraImgReducer
  },
})