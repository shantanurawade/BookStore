import { View, Text, Pressable, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import { style } from '../../styles/globalStyles';
import { SERVER_URL } from '../../Constants/constant';

const SignUp = (props: any) => {
    const [registerData, setRegisterData] = useState({ email: '', password: '', firstName: '', lastName: '' });
    const [isChecked, setChecked] = useState(false);


    const handleSignUp = (registerData: any) => {
        axios.post(`${SERVER_URL}/user/register`, registerData).then((res) => {
            ToastAndroid.show("User Registered successfully", ToastAndroid.SHORT);
            setRegisterData({ email: '', password: '', firstName: '', lastName: '' });
            props.navigation.navigate("Login");
        }).catch((err) => {
            console.warn(err);
        })
    }

    return (

        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Sign Up</Text>
            <TextInput
                value={registerData.firstName}
                onChangeText={(value) => { setRegisterData({ ...registerData, firstName: value }); }}
                label={'First name'}
                mode="outlined"
                style={style.textFiledsCredentials} />

            <TextInput
                value={registerData.lastName}
                onChangeText={(value) => { setRegisterData({ ...registerData, lastName: value }); }}
                label={'Last name'}
                mode="outlined"
                style={style.textFiledsCredentials} />

            <TextInput
                value={registerData.email}
                onChangeText={(value) => { setRegisterData({ ...registerData, email: value }); }}
                label={'Email'}
                mode="outlined"
                style={style.textFiledsCredentials} />

            <TextInput
                value={registerData.password}
                secureTextEntry={!isChecked}
                onChangeText={(value) => { setRegisterData({ ...registerData, password: value }); }}
                label={'Password'}
                mode="outlined"
                style={style.textFiledsCredentials} />

            <Pressable style={[{ width: 200, flexDirection: 'row', alignSelf: 'flex-start' }]}
                onPress={() => {
                    setChecked(!isChecked);
                }}>

                <Text style={[style.showPassword, { backgroundColor: isChecked ? '#2596be' : 'white' }]}>✓</Text>

                <Text style={{ flex: 1 }}>  Show password</Text>

            </Pressable>

            <TextInput
                secureTextEntry={!isChecked}
                onChangeText={(value) => { setRegisterData({ ...registerData, password: value }); }}
                label={'Comfirm Password'}
                mode="outlined"
                style={style.textFiledsCredentials} />
            <Pressable
                onPress={() => { handleSignUp(registerData); }}
                style={{ margin: 20, backgroundColor: 'grey', height: 40, width: 96, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ fontSize: 20 }}>Register</Text>

            </Pressable>

            <Pressable onPress={() => { props.navigation.navigate("Login"); }} >
                <Text style={{ fontSize: 16, color: '#2596be' }}>Login</Text>
            </Pressable>
        </View>
    )
}

export default SignUp;