import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Context as AuthContext} from '../context/AuthContext';

const AccountScreen = ()=>{
    const {state, signOut} = useContext(AuthContext);
    return(
        <View>
            <TouchableOpacity onPress = {signOut}>
                <Text> Sign Out </Text>
            </TouchableOpacity>
        </View>
    );
}

export default AccountScreen;