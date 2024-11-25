import axios from "axios";
import { ActivityIndicator, Pressable, Text, View } from "react-native"
import { SERVER_URL } from "../../Constants/constant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export const CartTotal = (props: any) => {
    const amount = props.amount;
    const [proccessing, setProccessing] = useState(false);
    const placeOrder = () => {
        setProccessing(true);
        setTimeout(() => {
            ; (async () => {
                const userToken = await AsyncStorage.getItem('userToken');
                console.log(userToken);
                axios.patch(`${SERVER_URL}/user/placeOrder`, {}, { headers: { Authorization: `Bearer ${userToken}` } }).then((res) => {
                    console.log(res);
                    props.placeOrder(true);
                }).catch((err) => {
                    console.log('ff', err);
                })
            })();
            setProccessing(false);
        }, 3000)

    }
    return (
        <View style={{ paddingHorizontal: 16, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', height: '26%', flexDirection: 'row', marginTop: 20, width: '100%' }}>
            <View style={{ borderEndWidth: 1, width: 212, borderColor: 'grey' }}>
                <Text style={{ fontSize: 20 }}>Total</Text>
                <Text style={{ fontSize: 20, color: '#911c35' }}>Rs. {amount}</Text>
            </View>

            <Pressable onPress={() => { placeOrder() }} style={{ backgroundColor: '#911c35', height: 60, width: 150, borderRadius: 5, alignContent: 'center', justifyContent: 'center' }}>
                {
                    proccessing ? <ActivityIndicator size={'large'} /> : <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }} >
                        PLACE ORDER
                    </Text>
                }
            </Pressable>
        </View >
    )
}

export const AddressCart = () => {

    return (

        <View>
            <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', width: '94%', borderRadius: 10, alignItems: 'center', alignSelf: 'center', padding: 5 }}>

                <Text style={{ fontSize: 30, textAlign: 'center' }}>Add address</Text>
                <Text style={{ fontSize: 40, paddingEnd: 16 }}>+</Text>
            </View>

            <View style={{ marginTop: 15, backgroundColor: 'white', width: '94%', borderRadius: 10, alignSelf: 'center', padding: 15 }}>

                <Text style={{ fontSize: 15 }}>Shantanu Rawade</Text>
                <Text style={{ fontSize: 15 }}>7499039412</Text>
                <Text style={{ fontSize: 15 }}>Work</Text>
                <Text style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid illum rem, cum et vitae inventore quidem odio totam consectetur consequatur deleniti neque temporibus repellendus modi quia corporis iste autem!</Text>
                <Pressable style={{ borderWidth: 2, position: 'absolute', width: 20, height: 20, borderRadius: 20, right: 15, top: 10 }}>
                </Pressable>
            </View>
        </View>)
}