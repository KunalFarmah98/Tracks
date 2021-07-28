import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

const SigninScreen = ({navigation})=>{

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const signIn = () => {

    }
    return(
        <View style = {styles.container}>
        <Text h3 style={styles.header}>Sign In</Text>

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

        <Button title="Sign Up" onPress={signIn} style = {{marginHorizontal:20, marginBottom:50}}/>

        <Text style={[styles.signup,{marginTop:50}]}>Don't Have an Account?</Text>
            <TouchableOpacity onPress = {()=>navigation.replace('SignUp')}>
                <Text style={styles.signup}> SignUp </Text>
            </TouchableOpacity>

    </View>
);

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
container:{
    margin: 20
},
signup: {
    color: 'blue',
    fontSize: 16,
    alignSelf: 'center',
    margin:10
}
});

export default SigninScreen;