import {valuePacker} from 'react-native-reanimated';
// import 'react-native-reanimated';
import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

// Packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Constants
import theme from '../constants/theme';

// Screens
import BottomTabNavigator from './BottomTabNavigator';
import HealthArticle from '../screens/HealthArticles';

const Stack = createStackNavigator();

// App navigator
const AppNavigator = () => {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor={theme.backgroundColor.white} barStyle="dark-content" />
      <Stack.Navigator >
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabNavigator}
          options={{ title: '', headerShown: false }}
        />
         <Stack.Screen
          name="HealthArticle"
          component={HealthArticle}
          options={{ title: '', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
