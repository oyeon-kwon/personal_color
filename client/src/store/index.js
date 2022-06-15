import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import selfCameraImgReducer from '../reducer/cameraReducer';
import rootReducer from '../reducer';
// import dd from '../reducer/authReducer';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage
};

// const rootReducer = combineReducers({
//   selfCamera: selfCameraImgReducer
// });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    // }).concat(logger),
  }),
});

export const persistor = persistStore(store);