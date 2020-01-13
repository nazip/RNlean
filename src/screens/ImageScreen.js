import React from 'react';
import { View } from 'react-native';
import ImageDetails from './components/ImageDetails';

export default () => {
    return (
        <View>
            <ImageDetails image={require('../../assets/beach.jpg')} title="beach" score={1} /> 
            <ImageDetails image={require('../../assets/forest.jpg')} title="forest" score={1}/> 
            <ImageDetails image={require('../../assets/mountain.jpg')} title="mountain" score={1}/> 
        </View>
    );
}