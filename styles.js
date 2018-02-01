import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
	},
	parent: {
		flex: 1,
	},
	modalContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	innerContainer: {
		backgroundColor: 'grey',
		padding: 8,
		margin: 16,
	},
	correct: {
		backgroundColor: '#0b6623',
	},
	wrong: {
		backgroundColor: '#c21807',
	},
	textWhite: {
		color: '#fff',
	},
	textTitle: {
		fontSize: 22,
	},
	textSubtitle: {
		fontSize: 16,
	},
});

export const buttonStyles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: 16,
	},
	answer: {
		color: '#cfc'
	},
});