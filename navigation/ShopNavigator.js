import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen from '../screens/shop/CartScreen';
// import HeaderButton from '../components/ui/HeaderButton';

const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Products" component={ProductOverviewScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart Screen" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default ProductNavigator;
