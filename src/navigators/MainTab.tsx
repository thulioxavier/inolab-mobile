import React, { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

import { StyleSheet, View } from 'react-native';

import { Login, Home, Register, Podium } from '../pages/index';
import { COLORS } from "../utils";

export default () => {

    return (
        <Fragment>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: COLORS.yellow,
                    inactiveTintColor: '#525252',
                    showLabel: false,
                    keyboardHidesTabBar: true,
                }}
                screenOptions={({ route }) => ({
                    tabBarStyle:{
                        backgroundColor: '#fafafa',
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
                        < View style={[styles.top, !focused ? styles.topFocus : null ]} >
                            <Icon name="home" size={26} color={ !focused ? '#fafafa' :'#525252'} />
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
        backgroundColor: '#525252',
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
        backgroundColor: COLORS.yellow,
    }
})