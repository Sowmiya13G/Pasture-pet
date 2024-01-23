import React from 'react';
import { Image } from 'react-native';

// Packages
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

// Custom Styles
import CustomTab from './CustomTab';
import FloatingButton from './FloatingButton';
import { styles } from './styles';

// Screens
import Home from '../screens/HomeScreen';
import Shop from '../screens/ShopScreen';
import BookScreen from '../screens/BookScreen';
import {ProfileStack, BookStack} from './StackScreens';
import theme from '../constants/theme';
import commonImagePath from '../constants/images';

const BottomTabNavigator = () => {
  // Variables
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const tabs = [
    {
      name: 'HomeTab',
      component: Home,
      imageSource: commonImagePath.home,
      label: 'Home'
    },
    {
      name: 'ShopTab',
      component: Shop,
      imageSource: commonImagePath.shop,
      label: 'Shop'
    },
    {
      name: 'BookTab',
      component: BookStack,
      imageSource: commonImagePath.book,
      label: 'Book'
    },
    {
      name: 'ProfileTab',
      component: ProfileStack,
      imageSource: commonImagePath.profile,
      label: 'Profile'

    },
  ];
  return (
    <>
      <Tab.Navigator
        CustomTab={props => <CustomTab {...props} />}
        initialRouteName={'HomeTab'}
        screenOptions={{
          CustomTabActiveTintColor: theme.fontColors.secondaryOrange,
          CustomTabInactiveTintColor: theme.fontColors.black,
          activeTintColor: 'white',
          headerShown: false,
        }}>
        {tabs.map((tab, index) => (
          <Tab.Screen key={index} name={tab.name} component={tab.component} options={{
            title: '',
            headerShown: false,
            tabBarLabel: tab.label,
            tabBarActiveTintColor: theme.fontColors.orange,
            tabBarInactiveTintColor: theme.fontColors.black,
            tabBarIcon: ({ color }) => (
              <Image source={tab.imageSource} style={{ width: 25, height: 25, tintColor: color }} />
            ),
          }} />
        ))}
      </Tab.Navigator>
      <FloatingButton onPress={() => navigation.navigate('HealthArticle')} style={styles.floatingButton} />
    </>
  );
};



export default BottomTabNavigator;

