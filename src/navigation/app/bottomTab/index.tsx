import {memo} from 'react';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import routes from '../../routes';

import AppBottomTab from './AppBottomTab';
import Likes from '../../../screens/app/likes';
import Home from '../../../screens/app/home';

const Tab = createBottomTabNavigator();

const bottomTabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
};

const BottomTab = () => {
  const tabBar = (props: BottomTabBarProps) => <AppBottomTab {...props} />;
  return (
    <Tab.Navigator
      tabBar={tabBar}
      screenOptions={bottomTabScreenOptions}
      initialRouteName={routes.app.home}>
      <Tab.Screen name={routes.app.home} component={Home} />
      <Tab.Screen name={routes.app.likes} component={Likes} />
    </Tab.Navigator>
  );
};

export default memo(BottomTab);
