import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Shankar', id: '1'},
    {name: 'Amit', id: '2'},
    {name: 'Sandharv', id: '3'},
    {name: 'Shinigami', id: '4'},
    {name: 'Naruto', id: '5'},
    {name: 'Rakesh', id: '6'},
    {name: 'Nikhil', id: '7'},
    {name: 'Intrinsic', id: '8'},
    {name: 'Honey', id: '9'},
  ])
  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => { 
      return prevPeople.filter(person => person.id != id);
    })
  }


  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    
    padding: 30,
    backgroundColor:'pink',
    fontSize:24,
    margin: 8,
    width:150
  }
});
