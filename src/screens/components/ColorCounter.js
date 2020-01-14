import React from 'react';
import { Button, View } from 'react-native';


export default ({ color, increaseColor, decreaseColor}) => {
    return (
        <View>
            <Button title={`increase ${color}`}   onPress={increaseColor}/>
            <Button title={`decrease ${color}`}   onPress={decreaseColor}/>
        </View>
    )
}