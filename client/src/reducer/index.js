import { createSlice } from '@reduxjs/toolkit'

const initialState = {
// TODO: 기본 아바타 이미지 삽입
  selfCameraImg: ''
}

export const selfCameraImgSlice = createSlice({
    name: 'selfCameraImg',
    initialState,
    reducers: {
      setSelfCameraImg: (state, action) => {
        state.selfCameraImg = action.payload
      },
    },
  })

export const { setSelfCameraImg } = selfCameraImgSlice.actions

export default selfCameraImgSlice.reducer