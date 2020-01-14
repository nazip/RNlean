import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export default () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    return (
        <View>
            <Text style={styles.text}>Password</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={
                    (newValue) => {
                        newValue.length < 5 ? setError('Password length must be more than 5 chars') : setError('');
                        setName(newValue);
                    }    
                }
            />
            <Text>{name}</Text>
            <Text style={styles.error}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    error: {
        color: 'red',
        textAlign: 'center'
    },
    text: {
        textAlign: 'center'
    }
    
});