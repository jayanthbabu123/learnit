import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderComponent from '../../components/Header';

export default class Profile extends Component {
    render() {
        return (
            <View>
                <HeaderComponent />
                <Text> Profile </Text>
            </View>
        )
    }
}
