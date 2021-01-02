import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

export default function GoalInput(props) {
	const [ enteredGoal, setEnteredGoal ] = useState('');
	const goalnputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal('');
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInputContainer}
					placeholder="Enter a Goal for this Course"
					onChangeText={goalnputHandler}
					value={enteredGoal}
				/>
				<View style={styles.sb}>
					<View style={styles.buttonStyle}>
						<Button title="ADD" onPress={addGoalHandler} />
					</View>
					<View style={styles.buttonStyle}>
						<Button title="CANCEL" color="red" onPress={props.onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textInputContainer: {
		borderColor: '#177c77',
		borderWidth: 1,
		padding: 10,
		width: '80%',
		marginBottom: 10
	},
	buttonStyle: {
		width: '40%',
		padding: 10,
		margin: 10,
		flex: 1
	},
	sb: {
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
});
