import React from 'react';
import { useState } from 'react';
import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const signUp = () => {

    }

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
                value={pass}
                onChangeText={setPass}
                secureTextEntry
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false} />

            <Button title="Sign Up" onPress={signUp} style={{ marginTop: 40, marginHorizontal: 20 }} />

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
    }
});
export default SignupScreen;