// ./src/routes.js
import React  from 'react';
import { StackNavigator } from 'react-navigation';
import ScreenWelcome from './screens/ScreenWelcome';
import ScreenQuestion from './screens/ScreenQuestion';

export const Router = StackNavigator({
	Home: { screen: ScreenWelcome },
    Question: { screen: ScreenQuestion },
});