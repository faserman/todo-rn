import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({todo, onRemove}) => {
  return(
    <TouchableOpacity
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.todo}>
        <Text style={styles.textTodo}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: '#333333'
  },
  textTodo: {
    color: '#fff'
  }
})