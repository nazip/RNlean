import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

export default () => {
    const items = [
       {name: 'q', age: 1}, 
       {name: 'a', age: 2}, 
       {name: 'z', age: 3}, 
    ];
    return (
        <FlatList
            data={items}
            renderItem={({ item }) => <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>}
            keyExtractor={item => item.name}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});