import React, {useReducer} from 'react';
import ColorCounter from './components/ColorCounter';
import { View, Text } from 'react-native'; 

const setColor = (color, payload) => {
   return color + payload > 255 || color + payload < 0 ? color : color + payload  
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_red':
            return {...state, red: setColor(state.red, action.payload)}
        case 'change_green':
            return {...state, green: setColor(state.green, action.payload)}
        case 'change_blue':
            return {...state, blue: setColor(state.blue, action.payload)}
        default: 
            return state;    
    }
}
 
const CHANGE_VALUE = 15;

export default () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    console.log('state=',state);
    // const [red, green, blue] = state;
    return (
        <View>
            <ColorCounter 
                color="Red" 
                increaseColor={() => dispatch({type: 'change_red', payload: CHANGE_VALUE})}
                decreaseColor={() => dispatch({type: 'change_red', payload: -1*CHANGE_VALUE})}
            /> 
            <ColorCounter 
                color="Green" 
                increaseColor={() => dispatch({type: 'change_green', payload: CHANGE_VALUE})}
                decreaseColor={() => dispatch({type: 'change_green', payload: -1*CHANGE_VALUE})}
            /> 
            <ColorCounter 
                color="Blue" 
                increaseColor={() => dispatch({type: 'change_blue', payload: CHANGE_VALUE})}
                decreaseColor={() => dispatch({type: 'change_blue', payload: -1*CHANGE_VALUE})}
            /> 
            <View 
                style={{
                    width: 100, 
                    height: 500, 
                    // backgroundColor: 'blue'
                    backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
                }}
            />
        </View>
    )
}