import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomTabNavigator from "../navigators/BottomTabNavigator";

const AppComponent = () => {
    return <NavigationContainer>
        <BottomTabNavigator />
    </NavigationContainer>
};

export default AppComponent;

