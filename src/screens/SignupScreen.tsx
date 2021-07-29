import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthForm from '../components/FormComponent';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {

    const { state, signUp, clearErrorMessage} = useContext(AuthContext);

    return (
        <View>
            {/* <NavigationEvents onWillFocus = {clearErrorMessage}/> */}
            <AuthForm header = "Sign Up for Tracks" authAction = {signUp}  buttonText='SignUp' errorMessage = {state.errorMessage}/>
            <TouchableOpacity onPress={() => navigation.replace('SignIn')} >
                <Text style={[styles.signup, { marginTop: 50 }]}>Already have an account? Sign In</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
signup: {
    color: 'blue',
    fontSize: 16,
    alignSelf: 'center',
    margin: 10
    }
});
export default SignupScreen;