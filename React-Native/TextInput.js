import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export default function App() {
  const [name, setName] = useState("nikhil");
  const clickHandler = () => {
    setName('Nikhil Singh');
  }


  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='eg Nikhil'
        onChangeText={(val) => setName(val)}
        keyboardType='numeric'/>
      <Text>My name is {name}</Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200

  }
});
