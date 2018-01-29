import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';

import { styles, buttonStyles } from './styles';
import { Router } from './routes';
import ReactTimeout from 'react-timeout'

import configureStore from './store/configureStore';

const store = configureStore();


var question = 0;
/*
class TopBarText extends React.Component {
	
	render(){
		return (
			<View style={styles.top}>
				<Text>{this.props.title}</Text>
			</View>
		);
	}
	
}

class ScreenMain extends React.Component {
	
	static navigationOptions = {
		title: 'Welcome',
	};
	
	render() {
		
		var json = JSON.parse(response);
		var getQuestion = json[question];
		
		return (
		<View style={styles.container}>
			<TopBarText title='Yes' />
            
            <QuestionView question={getQuestion} />
			
			
			
		</View>
		);
	}
}
*/




export default App = () => {
    return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
};
