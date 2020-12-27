import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on switch', key: '3' }
  ])

  const pressHandler = (key) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key)
      })
    } else {
      Alert.alert('Ooops', "Text Should Be More Than 3 Characters", [
        
      ])
    }

  }
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos]
    })
  }
  return (
    <View style={styles.container}>
      {/* header  */}
      <Header />
      <View style={styles.content}>
        {/* to form  */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )} />
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
