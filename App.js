
// import React from 'react';
// import { Text } from 'react-native';
// import {
//   createSwitchNavigator,
//   createBottomTabNavigator,
//   createAppContainer
// } from 'react-navigation';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import FontIcon from 'react-native-vector-icons/FontAwesome';
// import Home from './screens/Home/Home';
// import Dashboard from './screens/Dashboard/Dashboard';
// import Courses from './screens/Courses/Courses';
// import Profile from './screens/Profile/Profile';

// // const HomeNavigator = createSwitchNavigator({
// //   Home: Home,
// //   Dashboard: Dashboard,
// // });

// const AppNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: ({ navigation }) => ({
//         header: null,
//         tabBarVisible: false,
//         headerMode: "none",
//       }),
//     },
//     Dashboard: {
//       screen: Dashboard,
//     },
//     Courses: {
//       screen: Courses
//     },
//     Profile: {
//       screen: Profile
//     }
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `home`;
//         } else if (routeName === 'Dashboard') {
//           iconName = `dashboard`;
//         } else if (routeName === 'Courses') {
//           iconName = 'book'
//         } else if (routeName === 'Profile') {
//           iconName = 'user'
//         }
//         return <FontIcon name={iconName} size={20} color={tintColor} />;
//       },
//       tabBarVisible: navigation.state !== 'Home',
//       initialRouteName: 'Home',
//     }),
//   },
//   {
//     initialRouteName: 'Home',
//     activeTintColor: '#F44336',
//   }
// );

// const InitialNavigator = createSwitchNavigator({
//   App: AppNavigator
// });

// const AppContainer = createAppContainer(InitialNavigator);

// class App extends React.Component {
//   render() {
//     return (
//       <AppContainer />
//     );
//   }
// }

// export default App;

import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import NavigationService from './navigationServiece'
import Navigation  from './routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <Navigation ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </View>
    );
  }
}


