import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';

class TopBarText extends React.Component {
	
	render(){
		return (
			<View style={styles.top}>
				<Text>{this.props.title}</Text>
			</View>
		);
	}
	
}

class AnswerButton extends React.Component {
	
	onPressLearnMore() {
		
		Alert.alert(
		  'Alert Title',
		  'My Alert Msg',
		  [
			{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'OK', onPress: () => console.log('OK Pressed')},
		  ],
		  { cancelable: false }
		)
		
	}
	
	render(){
		return (
			<Button 
					style={buttonStyles.answer}
					title={this.props.title} 
					onPress={this.onPressLearnMore}
					/>
		);
	}
	
}

export default class App extends React.Component {
	
	
	
	render() {
		return (
		<View style={styles.container}>
			<TopBarText title='Yes' />
			<View style={styles.main}>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
			</View>
			
			<View style={buttonStyles.container}>
			
				<AnswerButton 
					title='42'
					/>
					
				<AnswerButton 
					title='72'
					/>
				
				<AnswerButton 
					title='11'
					/>
					
				<AnswerButton 
					title='17'
					/>
			
			</View>
			<ScrollView horizontal={true}>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text>This is a test and stuff</Text>
			</ScrollView>
			
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
	top: {
		backgroundColor: '#ccc',
		alignItems: 'center',
	},
	main: {
		flex: 2,
		backgroundColor: '#e3e3e3',
		alignItems: 'center',
	}
});

const buttonStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: 16,
	},
	answer: {
		color: '#cfc'
	},
});
