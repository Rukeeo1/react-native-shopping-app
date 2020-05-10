import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ShopNavigator from './navigation/ShopNavigator';
import productsReducers from './store/reducers/products';
import { AppLoading } from 'expo';

const rootReducer = combineReducers({
  products: productsReducers,
});

const store = createStore(rootReducer);
const fetchFonts = async () => {

  return await Font.loadAsync({
    'open-sans': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
  });
};
export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => {
  //         setFontLoaded(true);
  //       }}
  //     />
  //   );
  // }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
