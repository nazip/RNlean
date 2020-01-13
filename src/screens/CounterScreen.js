import React, {useReducer} from 'react';
import ColorCounter from './components/ColorCounter';
import { View } from 'react-native'; 

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_red':
            return {...state, red: state.red + action.payload}
        case 'change_green':
            return {...state, red: state.red + action.payload}
        case 'change_blue':
            return {...state, red: state.red + action.payload}
        default: 
            return state;    
    }
}
 
const CHANGE_VALUE = 15;

export default () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    return (
        <View>
            <ColorCounter 
                red={state.red} 
                green={state.green} 
                blue={state.blue} 
                setRed={() => dispatch({type: change_red, payload: CHANGE_VALUE})}
                setGreen={() => dispatch({type: change_green})}
                setBlue={() => dispatch({type: change_blue})}
            /> 
        </View>
        
    )
}