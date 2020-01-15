import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import ReduxThunk from 'redux-thunk';

import MainNavigator from './navigators/MainNavigator';

import loadingReducer from './store/reducers/loading';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}
