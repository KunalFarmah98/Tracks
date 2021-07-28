import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import { SigninStackScreen, SignupStackScreen } from './src/navigators/StackNavigator';
import { Context as AuthContext, Provider as AuthProvider } from './src/context/AuthContext';

const App = () => {

  const MainStack = createStackNavigator();
  return (
    <AuthContext.Consumer>

      {state => state.token == null ? (
        <NavigationContainer>

          <MainStack.Navigator>

            <MainStack.Screen
              name='SignUp'
              component={SignupStackScreen}
              options={({ route }) => ({
                headerShown: false,
              })} />

            <MainStack.Screen
              name='SignIn'
              component={SigninStackScreen}
              options={({ route }) => ({
                headerShown: false,
              })} />

          </MainStack.Navigator>
        </NavigationContainer>

      ) :
        (
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        )
      }
    </AuthContext.Consumer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
