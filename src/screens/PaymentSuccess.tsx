import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const PaymentSuccess = (props: any) => {
    return (
        <View>
            <View style={{ alignItems: 'center', backgroundColor: 'white', height: '75%' }}>
                <Image style={{ height: 200, width: 200 }} source={require('../assests/images/done.png')} />
                <Text style={{ fontSize: 30, marginTop: 50 }}>Order placed successfully</Text>
                <Text style={{ fontSize: 20, textAlign: 'center', color: 'grey' }}>Hurray!!! your order is confirmed the order id is #12424 save the order id for further communication </Text>
                <Pressable onPress={() => { props.setCart(false) }} style={{ height: 50, width: 260, backgroundColor: '#911c35', justifyContent: 'center', borderRadius: 10, marginTop: 20 }}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>CONTINUE SHOPPING</Text>
                </Pressable>
            </View>
            <View style={{ marginTop: 20, margin: 8 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assests/images/email.png')} style={{ height: 20, width: 20, marginEnd: 8 }} />
                    <Text style={{ borderEndWidth: 1, width: 210 }}>rawadeshantanu@gmmail.com</Text>
                    <Image source={require('../assests/images/phone.png')} style={{ height: 20, width: 20, marginStart: 8 }} />
                    <Text>+91 7499039412</Text>
                </View>
                <View style={{ flexDirection: 'row' }}><Image style={{ height: 20, width: 20, marginEnd: 8 }} source={require('../assests/images/location.png')} />
                    <Text style={{ marginTop: 20 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis odio veniam maiores incidunt nobis ex qui perspiciatis possimus nulla optio, natus nisi doloremque repellat fuga, officia provident tenetur facere aliquid!</Text>
                </View>

            </View>
        </View>
    )
}

export default PaymentSuccess