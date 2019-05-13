import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from './navigationServiece';
import {config} from './utils';
const Drawer = (props) => {
    const route = props.navigation;
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.sideMenu}>
                    <View >
                        <TouchableOpacity style={[styles.menu, config.routeName ==='Dashboard' ?styles.active: '']}>
                            <Icon name='home' size={24} />
                            <Text style={styles.menuText} type='h5White'>Dashboard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.menu, config.routeName === 'Courses' ?styles.active: '']}>
                            <Icon name='book' size={24} />
                            <Text style={styles.menuText} type='h5White'>Courses</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.menu, config.routeName==='Settings' ?styles.active: '']}>
                            <Icon name='cog' size={24} />
                            <Text style={styles.menuText} type='h5White'>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.menu, config.routeName === 'Profile' ?styles.active: '']}>
                            <Icon name='user-o' size={24} />
                            <Text style={styles.menuText} type='h5White'>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.menu, config.routeName === 'Logout' ?styles.active: '']}>
                            <Icon name='sign-out' size={24} />
                            <Text style={styles.menuText} type='h5White'>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    active: {
        backgroundColor: 'lightgrey'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 20,
        justifyContent: 'flex-start',

    },
    sideMenuTitle: {
        marginLeft: 20,
        marginBottom: 30
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 30,
        paddingRight: 15,
        paddingVertical: 20
    },
    menuText: {
        marginLeft: 20,
        fontSize: 18
    },

})

export default Drawer;