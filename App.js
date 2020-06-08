import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ShopNavigator from './navigation/ShopNavigator';
import productsReducers from './store/reducers/products';
import { AppLoading } from 'expo';
import {composeWithDevTools} from 'redux-devtools-extension'
import cartReducer from './store/reducers/cart'
import * as Font from 'expo-font'

const rootReducer = combineReducers({
  products: productsReducers,
  cart: cartReducer
});

//redux
const store = createStore(rootReducer, composeWithDevTools());

//font
const fetchFonts = async () => {
try {
  return await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  
} catch (error) {
  console.log(error)
}
};

//app
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <ShopNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
}

