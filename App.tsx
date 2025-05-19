import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import AddDishScreen from './screens/AddDishScreen';

export type RootTabParamList = {
  Welcome: undefined;
  Home: undefined;
  Checkout: undefined;
  AddDish: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            switch (route.name) {
              case 'Welcome':
                iconName = 'happy';
                break;
              case 'Home':
                iconName = 'home';
                break;
              case 'Checkout':
                iconName = 'cart';
                break;
              case 'AddDish':
                iconName = 'add-circle';
                break;
              default:
                iconName = 'ellipse';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Checkout" component={CheckoutScreen} />
        <Tab.Screen name="AddDish" component={AddDishScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
