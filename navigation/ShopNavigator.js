import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import one from '../assets/dummyImageRn/one.png';
import two from '../assets/dummyImageRn/two.png';
import three from '../assets/dummyImageRn/three.png';
import four from '../assets/dummyImageRn/four.png';
import five from '../assets/dummyImageRn/five.png';
import six from '../assets/dummyImageRn/six.png';
import seven from '../assets/dummyImageRn/seven.png';
import eigth from '../assets/dummyImageRn/eight.png';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/colors';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CategoriesHeader from './components/CategoryHeader';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Competitions from '../screens/maudition/Competitions';
import Carousel from './components/Carousel';

const Stack = createStackNavigator();

const TestInput = () => {
  return (
    <TextInput
      placeholder="Search"
      placeholderTextColor="#666666"
      style={styles.input}
    />
  );
};

const ActualDummyComponent = () => {
  return (
    <View>
      <CategoriesHeader categoryName="Sports" />
      <Carousel images={[one, two, three, four, five, six, seven, eigth]} />
      <CategoriesHeader categoryName="Music" />
      <Carousel images={[five, six, seven, one, eigth]} />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();
const TabNavigationThing = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#333333',
        inactiveTintColor: 'gray',
        indicatorStyle: {
          borderBottomColor: 'red',
          borderBottomWidth: 2,
        },
      }}
    >
      <Tab.Screen
        name="Categories"
        component={ActualDummyComponent}
        options={{
          title: 'Categories',
          upperCaseLabel: false,
          style: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen name="Competitiions" component={Competitions} />
    </Tab.Navigator>
  );
};

const SameDummyViewWithTab = () => {
  return (
    <View style={{ marginTop: 40 }}>
      <View
        style={{
          height: 56,
          backgroundColor: 'white',
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          borderBottomColor: '#F8F8F8',
          borderBottomWidth: 1,
        }}
      >
        <TestInput />
      </View>
      <View style={{ height: '100%', backgroundColor: 'white' }}>
        <TabNavigationThing />
      </View>
    </View>
  );
};

const ProductNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Products" component={ProductOverviewScreen} />
      <Stack.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Test Input"
        component={SameDummyViewWithTab}
        options={() => ({
          navigationOptions: {
            header: null,
          },
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = {
  input: {
    borderColor: '#D3D3D3',
    borderRadius: 4,
    borderWidth: 1,
    height: 36,
    width: '95%',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 12,
  },
  tabSwitcher: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 47,
    // backgroundColor: '#fcfcfc',
    backgroundColor: '#ffffff',
  },
  tabSwitcherItems: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  tabSwitcherInactive: {
    borderBottomColor: '#999999',
    borderBottomWidth: 2,
  },
  tabSwitcherActive: {
    borderBottomColor: '#333333',
    borderBottomWidth: 2,
  },
  inactiveSwitchStateFont: {
    color: '#999999',
  },
};
// });

export default ProductNavigator;
