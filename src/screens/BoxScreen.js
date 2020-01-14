import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewStyle1}/>
            <View style={styles.viewStyle2}/>
            <View style={styles.viewStyle3}/>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        margin: 10,
        borderWidth: 3,
        borderColor: 'red',
        alignItems: 'center',
        flexDirection: 'column',
        // justifyContent: 'space-between'
    },
    viewStyle1: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
        margin: 3, 
        // borderWidth: 1,
        // borderColor: 'blue',
        alignSelf: 'flex-start'
    },
    viewStyle2: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        margin: 3, 
        // borderWidth: 1,
        // borderColor: 'blue',
        alignSelf: 'center'
    },
    viewStyle3: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        margin: 3, 
        // borderWidth: 1,
        // borderColor: 'blue',
        alignSelf: 'flex-end',
        position: 'absolute'
    }

});