import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='coral'/>
                <Text style={{marginLeft: 10}}>{item.text}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth:1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row',
        
    }
})