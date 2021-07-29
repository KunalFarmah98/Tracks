import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Context as AuthContext} from '../context/AuthContext';

const AccountScreen = ()=>{
    const {signOut} = useContext(AuthContext);
    return(
        <View>
            <TouchableOpacity onPress = {signOut}>
                <Text style = {{color: 'white', backgroundColor: 'red', margin: 20, alignSelf: 'center', borderRadius: 10, paddingHorizontal: 50, paddingVertical:10}}> Sign Out </Text>
            </TouchableOpacity>
        </View>
    );
}

export default AccountScreen;