import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import HeaderComponent from '../../components/Header';
import Carousel from 'react-native-looped-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
const { width, height } = Dimensions.get('window');
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: { width, height },
        };
    }
    handleLogin = () => {
        this.props.navigation.navigate('Dashboard')
    }
    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>

                <Carousel
                    style={this.state.size}
                    bullets
                    autoplay={false}
                    bulletStyle={styles.bulletStyle}
                    chosenBulletStyle={styles.chosenBulletStyle}
                    onAnimateNextPage={(p) => console.log(p)}
                >

                    <View style={[{
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }, this.state.size]}>
                        <Text style={styles.description}>Welcome to <Text style={styles.headingText}>LearnIT</Text> </Text>
                        <Image
                            style={{ width: 200, height: 200, borderRadius: 100, marginTop: 20, marginBottom: 20 }}
                            source={require('../../images/training.png')}
                        />
                        <Text style={styles.descriptionTitle}>Training</Text>
                        <Text style={styles.description}>Take the world's best courses online from
                        top universities and industry partners</Text>
                        <Button
                            type="outline"
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={15}
                                    color={'#4285F4'}
                                    style={{ paddingLeft: 10 }}
                                />
                            }
                            iconRight
                            buttonStyle={{ justifyContent: 'center', width: 150 }}
                            title="Login"
                            onPress={() => this.handleLogin()}
                        />
                    </View>

                    <View style={[{
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }, this.state.size]}>
                        <Text style={styles.description}>Welcome to <Text style={styles.headingText}>LearnIT</Text> </Text>
                        <Image
                            style={{ width: 200, height: 200, borderRadius: 100, marginTop: 20, marginBottom: 20 }}
                            source={require('../../images/todo-list.png')}
                        />
                        <Text style={styles.descriptionTitle}>Task Schedule</Text>
                        <Text style={styles.description}>Everyday scheduled tasks in your dashboard
                        to make your coding skills improve</Text>
                        <Button
                            type="outline"
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={15}
                                    color={'#4285F4'}
                                    style={{ paddingLeft: 10 }}
                                />
                            }
                            iconRight
                            buttonStyle={{ justifyContent: 'center', width: 150 }}
                            title="Login"
                            onPress={() => this.handleLogin()}
                        />
                    </View>
                    <View style={[{
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }, this.state.size]}>
                        <Text style={styles.description}>Welcome to
                        <Text style={styles.headingText}> LearnIT</Text> </Text>
                        <Image
                            style={{ width: 200, height: 200, borderRadius: 100, marginTop: 20, marginBottom: 20 }}
                            source={require('../../images/code-review.png')}
                        />
                        <Text style={styles.descriptionTitle}>Code Review</Text>
                        <Text style={styles.description}>Code reviews with highly experienced professionals
                        for assigned scheduled tasks </Text>
                        <Button
                            type="outline"
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={15}
                                    color={'#4285F4'}
                                    style={{ paddingLeft: 10 }}
                                />
                            }
                            iconRight
                            buttonStyle={{ justifyContent: 'center', width: 150 }}
                            title="Login"
                            onPress={() => this.handleLogin()}
                        />
                    </View>
                    <View style={[{
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }, this.state.size]}>
                        <Text style={styles.description}>Welcome to <Text style={styles.headingText}> LearnIT</Text> </Text>
                        <Image
                            style={{ width: 200, height: 200, borderRadius: 100, marginTop: 20, marginBottom: 20 }}
                            source={require('../../images/position.png')}
                        />
                        <Text style={styles.descriptionTitle}>Position</Text>
                        <Text style={styles.description}>Finally we make you in the position
                        to rule the world software industry</Text>
                        <Button
                            type="outline"
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={15}
                                    color={'#4285F4'}
                                    style={{ paddingLeft: 10 }}
                                />
                            }
                            iconRight
                            buttonStyle={{ justifyContent: 'center', width: 150 }}
                            title="Login"
                            onPress={() => this.handleLogin()}
                        />

                    </View>

                </Carousel>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 100,
        justifyContent: 'center'
    },
    descriptionTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    description: {
        textAlign: 'center',
        padding: 20,
        lineHeight: 25,
    },
    welcomeText: {
        textAlign: 'center',
        padding: 20,
        fontSize: 16,
        color: 'black'
    },
    headingText: {
        fontSize: 16,
        color: '#4285F4',
        fontWeight: 'bold',
        letterSpacing: 4,
        paddingLeft: 15
    },
    bulletStyle: {
        color: 'blue',
        backgroundColor: 'grey'
    },
    chosenBulletStyle: {
        color: '#4285F4',
        backgroundColor: '#4285F4'
    }
})
