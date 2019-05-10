import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home/Home';
import Dashboard from './screens/Dashboard/Dashboard';

const HomeNavigator = createStackNavigator({
    Home,
    Dashboard
}, {
        initialRouteName: "Home",
        headerMode: "none"
    });

export default createAppContainer(HomeNavigator);


