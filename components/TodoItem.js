import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.key)}>
            <Text>{item.text}</Text>
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
        borderRadius: 10
    }
})