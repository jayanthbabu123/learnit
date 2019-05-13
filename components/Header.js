import React, { Component } from 'react'
import { View, StyleSheet, Platform, Button,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderComponent extends Component {
    handleClick = () => {
        console.log(this.props)
        this.props.navigation.toggleDrawer();
    }
    render() {
        console.log(this.props)
        return (
            <View style={{marginTop:-20}}>
                <Header
                    leftComponent={<LeftComponent handleClick={this.handleClick} />}
                    centerComponent={{ text: 'LearnIT', style: { color: '#fff', fontSize: 18 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>

        )
    }
}

export const LeftComponent = (props) => {
    return (
        <TouchableOpacity onPress={props.handleClick}>
            <Icon size={20} name={'bars'} color='#fff' />
        </TouchableOpacity>
    )
}