import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderComponent from '../../components/Header';

export default class Courses extends Component {
    render() {
        return (
            <View>
                <HeaderComponent />
                <Text> Courses </Text>
            </View>
        )
    }
}
