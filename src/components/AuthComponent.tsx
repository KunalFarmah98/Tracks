import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";


const AuthComponent = () => {

    const MainStack = createStackNavigator();

    return (

        <NavigationContainer>

            <MainStack.Navigator initialRouteName = 'SignUp'>

                <MainStack.Screen
                    name='SignUp'
                    component={SignupScreen}
                    options={({ route }) => ({
                        headerShown: false,
                    })} />

                <MainStack.Screen
                    name='SignIn'
                    component={SigninScreen}
                    options={({ route }) => ({
                        headerShown: false,
                    })} />

            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default AuthComponent;