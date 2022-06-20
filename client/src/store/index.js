import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import rootReducer from '../reducer';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    // }).concat(logger),
    })
});

export const persistor = persistStore(store);
