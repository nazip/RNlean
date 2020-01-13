import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import ImageScreen from './src/screens/ImageScreen'; 

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    SecondScreen: SecondScreen,
    FlatListScreen: FlatListScreen,
    ImageScreen: ImageScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
