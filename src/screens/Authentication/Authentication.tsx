import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import SignUp from './SignUp';


const Stack = createNativeStackNavigator();

const Authentication = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen component={Login} name="Login" options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen component={SignUp} name="SignUp" options={{ headerShown: false }}></Stack.Screen>

        </Stack.Navigator>
    )
}

export default Authentication