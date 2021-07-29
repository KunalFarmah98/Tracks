import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

const AuthForm = ({header,authAction,buttonText, errorMessage})=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
        <Text h3 style={styles.header}>{header}</Text>

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
            autoCompleteType="off"
            autoCorrect={false} />

        <Button title={buttonText} onPress={() => authAction({ email, password })} style={{ marginHorizontal: 20, marginBottom: 50 }} />

        {errorMessage != '' ? <Text style={styles.error}>{errorMessage}</Text> : null}

    </View>
    )

}

const styles = StyleSheet.create({

    input: {
        borderRadius: 3,
        borderWidth: 0.2,
        margin: 20
    },

    header: {
        alignSelf: 'center',
        margin: 10
    },
    container: {
        margin: 20
    },
    error: {
        alignSelf: 'center',
        marginTop: 30,
        color: 'red',
        fontSize: 16
    }
});

export default AuthForm;