import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './app';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
