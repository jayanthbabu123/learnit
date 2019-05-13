import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import HeaderComponent from '../../components/Header';
import { config } from '../../utils';

export default class Dashboard extends Component {
    render() {
        config.routeName = this.props.navigation.state.key;
        return (
            <View style={styles.container}>
                <HeaderComponent {...this.props} />
                <ScrollView>
                    <View style={styles.profileContainer}>
                        <Image
                            style={{ width: 50, height: 50,marginTop:20,marginBottom:20 }}
                            source={require('../../images/meeting.png')}
                        />
                        <View>
                            <Text style={styles.titletext}>Welcome Jayanth babu</Text>
                        </View>
                    </View>


                    <View style={styles.innerContainer}>
                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('../../images/presentation.png')}
                            />
                            <Text style={styles.boxTitle}>Training</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('../../images/assigment.png')}
                            />
                            <Text style={styles.boxTitle}>Assignments</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.innerContainer}>
                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('../../images/library.png')}
                            />
                            <Text style={styles.boxTitle}>Courses</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require('../../images/meeting.png')}
                            />
                            <Text style={styles.boxTitle}>Interviews</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    profileContainer: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
        marginTop: 10,
        marginBottom:10
    },
    innerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    titletext: {
        color: '#4285F4',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
    },
    box: {
        flex: 1,
        height: 160,
        marginLeft:5,
        marginBottom:10,
        marginRight:5,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    boxTitle: {
        textAlign: 'center',
        fontSize: 17,
        paddingTop: 10,
    },
});
