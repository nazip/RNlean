import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default ({image, title, score}) => {

  return (
    <View>
        <Text>{title}</Text>
        <Text>score {score}</Text>
        <Image source={image} />
    </View>);
};

const styles = StyleSheet.create({});

