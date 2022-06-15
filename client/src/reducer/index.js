import { combineReducers } from 'redux';

import selfCameraImgReducer from '../reducer/cameraReducer';

const rootReducer = combineReducers({
    selfCameraImgReducer
});

export default rootReducer;