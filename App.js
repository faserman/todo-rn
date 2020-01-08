import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar/index.js';
import { AddTodo } from './src/AddTodo/index.js';
import { Todo } from './src/Todo/index.js'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = title => {
    setTodos(prev => [ 
      {
        id: Date.now().toString(),
        title
      },
      ...prev
    ]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#252526',
  },
});


export default App;