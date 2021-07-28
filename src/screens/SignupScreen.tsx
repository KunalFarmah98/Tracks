import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {

    const { state, signUp } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <View style={styles.container}>
            <Text h3 style={styles.header}>Sign Up for Tracks</Text>

            <Input label="Email"
                value={email}
                autoCorrect={false}
                autoCapitalize="none"
                autoCompleteType="off"
                onChangeText={setEmail} />

            <Input label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false} />

            <Button title="Sign Up" onPress={() => signUp({ email, password })} style={{ marginTop: 40, marginHorizontal: 20 }} />

            {state.errorMessage != '' ? <Text style={styles.error}>{state.errorMessage}</Text> : null}

            <Text style={[styles.signin, { marginTop: 50 }]}>Already Have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
                <Text style={styles.signin}> SignIn </Text>
            </TouchableOpacity>


        </View>
    );

}


const styles = StyleSheet.create({

    input: {
        margin: 20
    },

    header: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    container: {
        margin: 20
    },
    signin: {
        color: 'blue',
        fontSize: 16,
        alignSelf: 'center',
        margin: 10
    },
    error: {
        alignSelf: 'center',
        marginTop: 30,
        color: 'red',
        fontSize: 16
    }
});
export default SignupScreen;