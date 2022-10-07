import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { productsReducer } from './Products/Products.reducer'; 

const rootReducer = combineReducers({
  products: productsReducer
});

const persistedReducer = persistReducer({
  key: 'alga-shopping@1.0.0',
  storage,
}, rootReducer);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);