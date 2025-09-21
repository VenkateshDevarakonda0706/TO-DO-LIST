import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <View style={styles.container}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{totalTasks}</Text>
        <Text style={styles.statLabel}>Total</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.statItem}>
        <Text style={[styles.statNumber, styles.pendingNumber]}>{pendingTasks}</Text>
        <Text style={styles.statLabel}>Pending</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.statItem}>
        <Text style={[styles.statNumber, styles.completedNumber]}>{completedTasks}</Text>
        <Text style={styles.statLabel}>Completed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  pendingNumber: {
    color: '#FF9500',
  },
  completedNumber: {
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  separator: {
    width: 1,
    height: 30,
    backgroundColor: '#e0e0e0',
  },
});

export default TaskStats;