import { View, Text, Pressable, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { style } from '../../styles/globalStyles';
import { useDispatch } from 'react-redux'
import { authToggle } from '../../redux/Action';
import { SERVER_URL } from '../../Constants/constant';


const Login = (props: any) => {
    const [userCredential, setUserCredential] = useState({ email: '', password: '' });
    const [credentialErr, setCredentialErr] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const [isLogging, setLogging] = useState(false);

    // Funtion to communicate with backend for verifying credentials.
    const handleLogin = async (userCredential: any) => {
        setLogging(true)
        await axios.post(`${SERVER_URL}/user/login`, userCredential).then((res) => {
            const token = res.data.token;
            ; (async () => {
                try {
                    // Setting user to async storage for user persistence.  
                    await AsyncStorage.setItem("userToken", token);
                } catch (error) {
                    console.warn(error);
                }
            }
            )();
            ToastAndroid.show("Login Successful...", ToastAndroid.SHORT);
            setLogging(false);
            dispatch(authToggle());

        }).catch((err) => {
            if (err.status === 400) setCredentialErr(true);
            setLogging(false);
        })
    }

    return (

        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontSize: 32 }}>Login</Text>
            <TextInput
                onChangeText={(value) => {
                    setUserCredential({ ...userCredential, email: value });
                    setCredentialErr(false);
                }}
                label={'Email'} mode="outlined"
                style={style.textFiledsCredentials} />

            <TextInput
                secureTextEntry={!isChecked}
                onChangeText={(value) => {
                    setUserCredential({ ...userCredential, password: value });
                    setCredentialErr(false);
                }}
                label={'Password'}
                mode="outlined"
                style={style.textFiledsCredentials} />

            <Pressable
                style={[{ marginTop: 6, width: 200, flexDirection: 'row', alignSelf: 'flex-start' }]}
                onPress={() => { setChecked(!isChecked); }}>


                <Text style={[style.showPassword, { backgroundColor: isChecked ? '#2596be' : 'white' }]}>✓</Text>

                <Text style={{ flex: 1 }}>  Show password</Text>

            </Pressable>

            {credentialErr ? <Text style={{ color: 'red' }}>Check username or password</Text> : null}

            <Pressable
                disabled={isLogging}
                onPress={() => { handleLogin(userCredential); }}
                style={{ margin: 20, backgroundColor: 'grey', height: 36, width: 90, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                {isLogging ? <ActivityIndicator /> : <Text style={{ fontSize: 20 }}>Login</Text>}
            </Pressable>

            <Pressable onPress={() => { props.navigation.navigate("SignUp"); }} >
                <Text style={{ fontSize: 16, color: '#2596be' }}>Sign Up</Text>
            </Pressable>
        </View>
    )
}

export default Login;