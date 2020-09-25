import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    Home,
    Web,
    Login,
    Member,
    Learn,
    Score,
    ScorePlay,
    Pdf,
    ScoreT
} from '../screens';

import {
    CustomHeader
} from '../components';
import { secondaryColor } from '../config';

const Stack = createStackNavigator();


export default function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}
                    options={(route) => ({
                        headerStyle: {
                            backgroundColor: '#1583e8',
                        },
                        headerTitle: props => <CustomHeader {...route} />
                    })} />
                <Stack.Screen name="Web" component={Web}
                    options={{
                        title: ""
                    }} />
                <Stack.Screen name="Login" component={Login}
                    options={{
                        title: ""
                    }} />

                <Stack.Screen name="Member" component={Member}
                    options={{
                        title: "Invidia Voices",
                        headerStyle: {
                            backgroundColor: '#1583e8',
                        },
                        headerTintColor: '#fff',
                        headerLeft: null,
                    }} />
                <Stack.Screen name="Learn" component={Learn}
                    options={{
                        headerShown: null
                    }} />
                <Stack.Screen name="ScorePlay" component={ScorePlay}
                    options={{
                        headerStyle: {
                            backgroundColor: secondaryColor,
                        },
                        headerTintColor: '#fff',
                        title: "",
                    }} />
                <Stack.Screen name="Score" component={Score}
                    options={{
                        headerStyle: {
                            backgroundColor: secondaryColor,
                        },
                        headerTintColor: '#fff',
                    }} />
                <Stack.Screen name="ScoreT" component={ScoreT}
                    options={{
                        headerStyle: {
                            backgroundColor: secondaryColor,
                        },
                        title: "Score and Tracks",
                        headerTintColor: '#fff',
                    }} />
                <Stack.Screen name="Pdf" component={Pdf}
                    options={{
                        headerStyle: {
                            backgroundColor: secondaryColor,
                        },
                        headerTintColor: '#fff',
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}