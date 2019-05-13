import {
    createSwitchNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createAppContainer
}
    from 'react-navigation';
import Drawer from './drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import Home from './screens/Home/Home';
import Profile from './screens/Profile/Profile';
import Dashboard from './screens/Dashboard/Dashboard';
import Courses from './screens/Courses/Courses';
import HeaderComponent from './components/Header';

const TabNavigation = createBottomTabNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: <Icon size={20} name={'user'} />
        },
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            tabBarIcon: <Icon size={20} name={'comments'} />
        }
    },
    Courses: {
        screen: Courses,
        navigationOptions: {
            tabBarIcon: <Icon size={20} name={'book'} />,
        }
    }
});
const Navigation = createSwitchNavigator({
    Page: {
        screen: Home,
    },
    Tab: {
        screen: TabNavigation,
    },


},);
const RootNavigation = createDrawerNavigator({
    Page: {
        screen: Navigation,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <HeaderComponent navigate={navigation.navigate} />,
          }),
    },
}, {
        contentComponent: props => <Drawer {...props} />
    });

export default createAppContainer(RootNavigation);