import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import routes from '../routes';
import BottomTab from './bottomTab';
import Details from '../../screens/app/details';

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={routes.app.tab}>
      <Stack.Screen name={routes.app.tab} component={BottomTab} />
      <Stack.Screen name={routes.app.details} component={Details} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
