import React, { Component } from 'react'
import { Text, View } from 'react-native';
import HeaderComponent from '../../components/Header';
import { config } from '../../utils'

export default class Courses extends Component {
    static navigationOptions = {
        title: 'Courses'
    };

    render() {
        console.log(this.props.navigation.state.key);
        config.routeName = this.props.navigation.state.key;
        return (
            <View>
                <HeaderComponent {...this.props} />
                <Text> Courses </Text>
            </View>
        )
    }
}
