import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import ImageScreen from './src/screens/ImageScreen'; 
import CounterScreen from './src/screens/CounterScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    SecondScreen: SecondScreen,
    FlatListScreen: FlatListScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
