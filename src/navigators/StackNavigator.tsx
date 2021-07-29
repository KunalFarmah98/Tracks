import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import TrackListScreen from "../screens/TrackListScreen";



const SigninStack = createStackNavigator();
const SignupStack = createStackNavigator();
const TrackStack = createStackNavigator();
// const TrackListStack = createStackNavigator();
// const TrackDetailStack = createStackNavigator();
// const TrackCreateStack = createStackNavigator();
// const AccountStack = createStackNavigator();

// const SigninStackScreen = ({ navigation }) => {
//     return (
//         <SigninStack.Navigator initialRouteName='SignIn'>
//             <SigninStack.Screen
//                 name='SignIn'
//                 component={SigninScreen}
//                 options={({ route }) => ({
//                     headerShown: false,
//                 })}
//             />
//             <SigninStack.Screen
//                 name='SignUp'
//                 component={SignupScreen}
//                 options={({ route }) => ({
//                     headerShown: false,
//                 })}
//             />

//         </SigninStack.Navigator>
//     );

// };

// const SignupStackScreen = ({ navigation }) => {

//     return (
//         <SignupStack.Navigator initialRouteName='SignUp'>

//             <SignupStack.Screen
//                 name='SignUp'
//                 component={SignupScreen}
//                 options={({ route }) => ({
//                     headerShown: false,
//                 })}
//             />

//             <SignupStack.Screen
//                 name='SignIn'
//                 component={SigninScreen}
//                 options={({ route }) => ({
//                     headerShown: false,
//                 })}
//             />

//         </SignupStack.Navigator>
//     );

// };
const TrackStackScreen = () => {
    return (
        <TrackStack.Navigator>
            <TrackStack.Screen
                name='TrackList'
                component={TrackListScreen}
                options={({ route }) => ({
                    headerTitle: 'Tracks List',
                })} />
            <TrackStack.Screen
                name='Trackdetails'
                component={TrackDetailScreen}
                options={({ route }) => ({
                    headerTitle: `${route.params.name} details`,
                })} />
        </TrackStack.Navigator>
    );
};



export { TrackStackScreen}; //, SigninStackScreen, SignupStackScreen };