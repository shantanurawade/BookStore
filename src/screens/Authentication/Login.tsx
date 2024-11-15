import { View, Text, Pressable, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props: any) => {
    const [userCredential, setUserCredential] = useState({ email: '', password: '' });
    const [credentialErr, setCredentialErr] = useState(false)
    const handleLogin = async (userCredential: any) => {

        await axios.post("http://10.0.2.2:8000/api/v1/user/login", userCredential).then((res) => {
            if (res.data.responce === 0) {
                setCredentialErr(true)
            };
            const user = res.data.data.user;
            ; (async () => {
                try {
                    await AsyncStorage.setItem("currentUser", JSON.stringify(user));
                } catch (error) {
                    console.log('====================================');
                    console.log(error);
                    console.log('====================================');
                }
                await AsyncStorage.getItem("currentUser");
            }
            )();
            ToastAndroid.show("Login Successful...", ToastAndroid.SHORT);
            props.navigation.navigate("Mainscreen");

        }).catch((err) => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        })
    }


    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontSize: 32 }}>Login</Text>
            <TextInput onChangeText={(value) => { setUserCredential({ ...userCredential, email: value }); setCredentialErr(false) }}
                label={'Email'} mode="outlined" style={{ margin: 20, width: '66%' }} />
            <TextInput onChangeText={(value) => { setUserCredential({ ...userCredential, password: value }); setCredentialErr(false) }}
                label={'Password'} mode="outlined" style={{ width: '66%' }} />
            {credentialErr ? <Text style={{ color: 'red' }}>Check username oor password</Text> : null}
            <Pressable onPress={() => { handleLogin(userCredential); }} style={{ margin: 20, backgroundColor: 'grey', height: 36, width: 90, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Login</Text>
            </Pressable>
            <Pressable onPress={() => { props.navigation.navigate("SignUp") }} >
                <Text style={{ fontSize: 16, color: '#2596be' }}>Sign Up</Text>
            </Pressable>
        </View>
    )
}

export default Login