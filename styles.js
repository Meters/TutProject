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
	}
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