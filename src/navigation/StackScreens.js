import React from 'react';

// Packages
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Profile from '../screens/ProfileScreen';
import ViewScreen from '../screens/ViewScreen';
import BookScreen from '../screens/BookScreen';
import VeterinairianScreen from '../screens/VeterinarianScreen';
import BookConsultation from '../screens/BookConsultation';
import BookAppointment from '../screens/BookAppointment';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
      <Stack.Navigator >
        <Stack.Screen
          name="HomeScreen"
          component={Profile}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="ViewScreen"
          component={ViewScreen}
          options={{ title: '', headerShown: false }}
        />
      </Stack.Navigator>
  );
};
const BookStack = () => {
  return (
      <Stack.Navigator >
        <Stack.Screen
          name="BookScreen"
          component={BookScreen}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="VeterinairianScreen"
          component={VeterinairianScreen}
          options={{ title: '', headerShown: false }}
        />
         <Stack.Screen
          name="BookConsultation"
          component={BookConsultation}
          options={{ title: '', headerShown: false }}
        />
          <Stack.Screen
          name="BookAppointment"
          component={BookAppointment}
          options={{ title: '', headerShown: false }}
        />
      </Stack.Navigator>
  );
};

export {ProfileStack, BookStack};
