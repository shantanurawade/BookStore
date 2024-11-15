import { View, Text, Pressable, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import axios from 'axios';

const SignUp = (props: any) => {
    const [registerData, setRegisterData] = useState({ email: '', password: '', firstName: '', lastName: '' })
    const [isChecked, setChecked] = useState(false);
    const handleSignUp = (registerData: any) => {
        axios.post("http://10.0.2.2:8000/api/v1/user/register", registerData).then((res) => {
            ToastAndroid.show("User Registered successfully", ToastAndroid.SHORT)
        }).catch((err) => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        })
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Sign Up</Text>
            <TextInput value={registerData.firstName} onChangeText={(value) => { setRegisterData({ ...registerData, firstName: value }); }}
                label={'First name'} mode="outlined" style={{ margin: 10, width: '66%' }} />
            <TextInput value={registerData.lastName} onChangeText={(value) => { setRegisterData({ ...registerData, lastName: value }); }}
                label={'Last name'} mode="outlined" style={{ margin: 10, width: '66%' }} />
            <TextInput value={registerData.email} onChangeText={(value) => { setRegisterData({ ...registerData, email: value }); }}
                label={'Email'} mode="outlined" style={{ margin: 10, width: '66%' }} />
            <TextInput value={registerData.password} secureTextEntry={!isChecked} onChangeText={(value) => { setRegisterData({ ...registerData, password: value }); }}
                label={'Password'} mode="outlined" style={{ margin: 10, width: '66%' }} />
            <Pressable style={[{ width: 200, flexDirection: 'row', alignSelf: 'flex-start' }]} onPress={() => {
                setChecked(!isChecked);
            }}>
                <Text style={{ marginStart: 70, width: 20, color: 'white', borderWidth: 1, textAlign: 'center', backgroundColor: isChecked ? '#2596be' : 'white' }}>✓</Text>
                <Text style={{ flex: 1 }}>  Show password</Text>

            </Pressable>

            <TextInput secureTextEntry={!isChecked} onChangeText={(value) => { setRegisterData({ ...registerData, password: value }); }}
                label={'Comfirm Password'} mode="outlined" style={{ margin: 10, width: '66%' }} />
            <Pressable onPress={() => { handleSignUp(registerData) }} style={{ margin: 20, backgroundColor: 'grey', height: 40, width: 96, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Register</Text>
            </Pressable>
            <Pressable onPress={() => { props.navigation.navigate("Login") }} >
                <Text style={{ fontSize: 16, color: '#2596be' }}>Login</Text>
            </Pressable>
        </View>
    )
}

export default SignUp;