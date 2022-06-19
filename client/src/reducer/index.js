import { combineReducers } from 'redux';

import selfCameraImgReducer from './cameraReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    selfCameraImgReducer,
    authReducer
});

export default rootReducer;