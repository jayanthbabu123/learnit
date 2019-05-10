import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native';
import { Header } from 'react-native-elements'

export default class HeaderComponent extends Component {
    render() {
        return (
            <View >
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'LearnIT', style: { color: '#fff', fontSize: 18 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>

        )
    }
}
const styles = StyleSheet.create({

});