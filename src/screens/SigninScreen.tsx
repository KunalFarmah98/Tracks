import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AuthForm from '../components/FormComponent';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const SigninScreen = ({ navigation }) => {

    const { state, signIn, clearErrorMessage } = useContext(AuthContext);

    return (
        <View>
            {/* <NavigationEvents onWillFocus = {clearErrorMessage}/> */}
            <AuthForm header="Sign In" authAction={signIn} buttonText='SignIn' errorMessage={state.errorMessage} />
            <TouchableOpacity onPress={() => navigation.replace('SignUp')} >
                <Text style={[styles.signup, { marginTop: 50 }]}>Don't have an account? Sign Up</Text>
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




export default SigninScreen;