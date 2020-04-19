import React from 'react';
import { Platform, SafeAreaView, Button, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/colors';

const HomeScreen = () => {
  return (
    <View>
      <Text>Hello HomeScreen Rukee Ojibo</Text>
    </View>
  );
};

const DetailsScreen = () => {
  return (
    <View>
      <Text>Hello DetailsScreen</Text>
    </View>
  );
};
const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default ProductNavigator