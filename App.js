import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
{
	/* <script src="http://localhost:19002" />; */
}

export default function App() {
	const [ courseGoals, setCourseGoals ] = useState([]);
	const [ addGoalModal, setAddGoalModal ] = useState(false);

	const addGoalHandler = (goalTitle) => {
		setCourseGoals((currentGoals) => [ ...currentGoals, { id: Math.random().toString(), value: goalTitle } ]);
		setAddGoalModal(false);
	};

	const removeGoalHandler = (goalId) => {
		// console.log('TO BE DELETED - ' + goalId);
		// console.log(courseGoals);
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
		// console.log(courseGoals);
	};

	const cancelAddGoal = () => {
		setAddGoalModal(false);
	};

	return (
		<View style={styles.screen}>
			<Button style={styles.buttonStyle} title="Add New Goal" onPress={() => setAddGoalModal(true)} />
			<GoalInput visible={addGoalModal} onAddGoal={addGoalHandler} onCancel={cancelAddGoal} />

			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 70
	},
	buttonStyle: {
		minWidth: 100,
		margin: 20
	}
});
