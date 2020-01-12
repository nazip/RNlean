import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
import FlatListScreen from './src/screens/FlatListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    SecondScreen: SecondScreen,
    FlatListScreen: FlatListScreen
  },
  {
    initialRouteName: 'FlatListScreen',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
