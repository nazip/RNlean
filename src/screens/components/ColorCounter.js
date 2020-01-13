import React from 'react';
import { Button, View } from 'react-native';


export default ({ SetRed, SetGreen, SetBlue, red, green, blue }) => {
    return (
        <View>
            <Button title="increase Red"   onPress={SetRed}/>
            <Button title="decrease Red"   onPress={SetRed}/>
            <Button title="increase Green" onPress={SetGreen}/>
            <Button title="decrease Green" onPress={SetGreen}/>
            <Button title="increase Blue"  onPress={SetBlue}/>
            <Button title="decrease Blue"  onPress={SetBlue}/>
            <View style={{width: 100, height: 100, backgroundColor: `rgb(${red}.${green}.${blue})`}}/>
        </View>
    )
}