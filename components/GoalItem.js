import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GoalItem(props) {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={props.onDelete.bind(this, props.id)}>
			<View on style={styles.listItem}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: '#177c77',
		borderWidth: 1
	}
});
