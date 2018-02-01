// ./src/routes.js
import React  from 'react';
import { StackNavigator } from 'react-navigation';
import ScreenWelcome from './screens/ScreenWelcome';
import ScreenQuestion from './screens/ScreenQuestion';
import ScreenTest from './screens/ScreenTest';

export const Router = StackNavigator({
	Home: { screen: ScreenWelcome },
    Question: { screen: ScreenQuestion },
    Test: { screen: ScreenTest },
});