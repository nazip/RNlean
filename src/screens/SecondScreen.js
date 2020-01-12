import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>second screen</Text>
            <Text style={styles.textStyle2}>second screen</Text>
        </View>
    ) 
} 

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 30
    },
    textStyle2: {
        fontSize: 40
    },
    viewStyle: {
        color: 'red'
    }
});