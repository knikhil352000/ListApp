import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Shankar', key: '1'},
    {name: 'Amit', key: '2'},
    {name: 'Sandharv', key: '3'},
    {name: 'Shinigami', key: '4'},
    {name: 'Naruto', key: '5'},
    {name: 'Rakesh', key: '6'},
    {name: 'Rakesh', key: '6'},
    {name: 'Rakesh', key: '6'},
    {name: 'Rakesh', key: '6'},
  ])


  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />


      <ScrollView>
      {
        people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View> 
          )
        })
      }
      </ScrollView>
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
    marginTop: 24,
    padding: 30,
    backgroundColor:'pink',
    fontSize:24
  }
});
