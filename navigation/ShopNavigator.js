import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../constants/colors';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen from '../screens/shop/CartScreen';
// import HeaderButton from '../components/ui/HeaderButton';
import OrdersScreen from '../screens/shop/OrdersScreen'
import { Platform } from 'react-native';

const defaultNavOptions = {
  headerStyle: {
    backgroundColour: Platform.OS === 'android' ? Colors.primary : '',
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  },
};

const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={ProductOverviewScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart Screen" component={CartScreen} />
    </Stack.Navigator>
  );
};

const OrdersScreenNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Orders Screen">
      <Stack.Screen name="Orders Screen" component={OrdersScreen} />
    </Stack.Navigator>
  );

}

const Drawer = createDrawerNavigator();


const ShopNavigator = () => {
  const { Navigator, Screen } = Drawer;

  return (
    <Navigator>
      <Screen name="Products" component={ProductNavigator} />
      <Screen name="Orders" component={OrdersScreenNavigator} />
    </Navigator>
  );
};

// export default ProductNavigator;
export default ShopNavigator ;
