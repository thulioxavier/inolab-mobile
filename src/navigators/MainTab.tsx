import React, { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

import { StyleSheet, View } from 'react-native';

import { Login, Home, Register, Podium, Profiles } from '../pages/index';
import { COLORS } from "../utils";

export default () => {

    return (
        <Fragment>
            <Tab.Navigator

                initialRouteName="profile"

                screenOptions={({ route }) => ({

                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarInactiveTintColor: '#f6f6f6',
                    tabBarActiveTintColor: COLORS.primary,

                    tabBarStyle: {
                        backgroundColor: COLORS.black,
                        // position: 'absolute',
                        // borderTopRightRadius: 10,
                        // borderTopLeftRadius: 10,
                        // borderRadius: 10,
                        // bottom: 10,
                        // left: 5,
                        // right: 5,
                        ...styles.shadon

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
                        return (
                        <Animatable.View animation="swing"  useNativeDriver iterationCount={1}>
                            <Icon name={icon} size={size} color={color} />
                        </Animatable.View>
                        )
                    }
                })}

            >
                <Tab.Screen name="ranking" component={Podium} options={{ tabBarLabel: 'Ranking' }} />

                <Tab.Screen name="HomeToAPP" component={Home} options={{
                    tabBarLabel: 'HomeToAPP',
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => (
                        <Animatable.View animation="swing"  useNativeDriver iterationCount={1}>
                            < View style={[styles.top, !focused ? styles.topFocus : null]} >
                                <Icon name="home" size={26} color={focused ? '#202020' : '#fafafa'} />
                            </View>
                        </Animatable.View>
                    )
                }} />

                <Tab.Screen name="profile" component={Profiles} options={{ tabBarLabel: 'Profile' }} />
            </Tab.Navigator>
        </Fragment >
    );
}

const styles = StyleSheet.create({

    shadon: {
        shadowColor: '#0000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },

    iconTabRound: {
        width: 45,
        height: 45,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topFocus: {
        width: 50,
        height: 50,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: '#484848',
    },
    top: {
        width: 50,
        height: 50,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: COLORS.primary,
    }
})