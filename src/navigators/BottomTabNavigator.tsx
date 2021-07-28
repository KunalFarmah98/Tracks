import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountScreen from "../screens/AccountScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import { TrackStackScreen } from "./StackNavigator";

const BottomTabNavigator = () => {

    const BottomTabs = createBottomTabNavigator();

    return (

        <BottomTabs.Navigator>
            <BottomTabs.Screen
                name='Tracks'
                component={TrackStackScreen}
                options={({ route }) => ({
                    tabBarLabel: 'Home',
                    title: 'Tracks',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={25} />
                    ),
                })} />

            <BottomTabs.Screen
                name='TrackCreate'
                component={TrackCreateScreen}
                options={({ route }) => ({
                    tabBarLabel: 'Create',
                    title: 'Create Tracks',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={25} />
                    ),
                })} />



            <BottomTabs.Screen
                name='Account'
                component={AccountScreen}
                options={({ route }) => ({
                    tabBarLabel: 'Account',
                    title: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={25} />
                    ),
                })} />


        </BottomTabs.Navigator>
    );
}

export default BottomTabNavigator;