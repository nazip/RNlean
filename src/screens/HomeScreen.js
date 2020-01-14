import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Main screen</Text>
      <Button 
        title="to Image Screen"
        onPress={() => navigation.navigate('ImageScreen')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ImageScreen')}>
        <Text>
          to Image screen (TouchableOpacity)
        </Text>
      </TouchableOpacity>
      <Button 
        title="to Counter Screen"
        onPress={() => navigation.navigate('CounterScreen')}
      />
      <Button 
        title="to Text Screen"
        onPress={() => navigation.navigate('TextScreen')}
      />
      <Button 
        title="to Box Screen"
        onPress={() => navigation.navigate('BoxScreen')}
      />

    </View>
  );
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
