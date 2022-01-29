import React, { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

import { StyleSheet, View } from 'react-native';

import { Login, Home, Register, Podium } from '../pages/index';

import *as S from './styles';

export default () => {


    return (
        <Fragment>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: '#00C880',
                    inactiveTintColor: '#fafafa',
                    showLabel: false,
                    keyboardHidesTabBar: true,
                }}
                screenOptions={({ route }) => ({
                    tabBarStyle:{
                        backgroundColor: '#202020',
                        position: 'relative', 
                    },
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let icon = null;

                        switch (route.name) {
                            case 'ranking':
                                icon = 'award';
                                break;
                            case 'profile':
                                icon = 'user';
                                break;
                            default:
                                break;
                        }
                        return <Icon name={icon} size={size} color={color} />;
                    }
                })}

            >
                <Tab.Screen name="ranking" component={Podium} options={{ tabBarLabel: 'Ranking' }} />
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({focused}) => (
                        < View style={[styles.iconTabRound, focused ?styles.top : null]} >
                            <Icon name="home" size={26} color={ focused ? '#202020' :'#fafafa'} />
                        </View>
                    )
                }} />

                <Tab.Screen name="profile" component={Register} options={{ tabBarLabel: 'Profile' }} />
            </Tab.Navigator>
        </Fragment >
    );

}

const styles = StyleSheet.create({
    iconTabRound: {
        width: 45,
        height: 45,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    top: {
        marginBottom: 20,
        width: 50,
        height: 50,
        backgroundColor: '#00C880',
    }
})