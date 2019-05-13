import React, { Component } from 'react'
import { Text, View } from 'react-native';
import HeaderComponent from '../../components/Header';
import { config } from '../../utils';

export default class Profile extends Component {
    render() {
        config.routeName = this.props.navigation.state.key;
        return (
            <View>
                <HeaderComponent {...this.props} />
                <Text> Profile </Text>
            </View>
        )
    }
}
