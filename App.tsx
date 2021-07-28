import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useState } from 'react';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import { SigninStackScreen, SignupStackScreen } from './src/navigators/StackNavigator';

const App = () => {

  const [isSignedIn, setSignedIn] = useState(false);

  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>

      <MainStack.Navigator>
        {isSignedIn == false ? (
          <>
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
          </>
        ) :
          (
            <MainStack.Screen
              name='Tabs'
              component={BottomTabNavigator} />
          )
        }
      </MainStack.Navigator>

    </NavigationContainer>
  );
};

export default App;
