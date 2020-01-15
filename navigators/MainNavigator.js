import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer } from 'react-navigation';

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const MainNavigator = createAnimatedSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator
  },
  {}
);

export default createAppContainer(MainNavigator);
