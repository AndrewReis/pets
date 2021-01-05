import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from './pages/Dashboard';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

function Routes() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} >
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;
