import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from '../../styles/globalStyles'
import axios from 'axios'
import { AddressCart, CartTotal } from './CartUtils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SERVER_URL } from '../../Constants/constant'
import PaymentSuccess from '../PaymentSuccess'


const Cart = (props: any) => {
    const [cartData, setCartData] = useState<any[]>([]);
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);
    const [orderPlaced, placeOrder] = useState(false);

    useEffect(() => {
        // It will act like temperary array to store array in setCartData as useState in asynchronous and may cause unexpected effect.
        var cartDataArray: any = [];
        ; (async () => {
            try {
                const userToken = await AsyncStorage.getItem("userToken");
                const data = await (axios.get(`${SERVER_URL}/user/get`,
                    { headers: { Authorization: `Bearer ${userToken}` } }));
                const cartItems: [] = data.data.cart.items;
                await Promise.all(
                    cartItems.map(async (items: any) => {
                        const getBook = items.bookId;
                        const book = await axios.get(`${SERVER_URL}/book/getById/${getBook}`);
                        const cart = book.data.data;
                        const quantity = items.quantity
                        cartDataArray.push({ ...cart, quantity });
                    }))
                setCartData(cartDataArray);
                setCount(cartDataArray.length);
                setAmount(data.data.cart.totalAmount);
                console.log(cartData.length)
            } catch (error) {
                console.warn(error);
            }
        })();
    }, []);
    return (
        <>
            {
                orderPlaced ?
                    <PaymentSuccess setCart={props.setCart} /> : < View style={{ marginTop: 8, marginBottom: 140 }
                    }>
                        {
                            cartData.length >= 1 ? <>
                                <Text style={{ fontSize: 16 }}>Books
                                    <Text style={style.booksCount}>({count})</Text>
                                </Text>
                                <FlatList
                                    data={cartData}
                                    ListFooterComponent={<View>
                                        <AddressCart />
                                        <CartTotal amount={amount} placeOrder={placeOrder} />
                                    </View>}
                                    contentContainerStyle={{ paddingBottom: 150 }}
                                    keyExtractor={(item) => item._id.toString()}
                                    renderItem={({ item }) => (
                                        <View style={style.bookCardCart}>
                                            <View style={{ flexDirection: 'row' }}>

                                                <Image style={[style.image, { margin: 20 }]} source={{ uri: `${item.img}` }} />

                                                <View style={{ marginTop: 20 }}>

                                                    <Text numberOfLines={2} style={{ fontSize: 20, width: 200 }}>{item.title}</Text>
                                                    <Text style={{ color: 'grey' }}>~ By {item.author}</Text>
                                                    <Text style={[style.priceText, { marginTop: 20 }]}>Rs.{item.discountedPrice}
                                                        <Text style={style.priceTextDiscounted}>Rs.{item.price}</Text>
                                                    </Text>

                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                                        <Pressable>
                                                            <Text style={style.roundButtonMarron}>-</Text>
                                                        </Pressable>

                                                        <Text style={{ textAlign: 'center', marginHorizontal: 10 }}>{item.quantity}</Text>

                                                        <Pressable>
                                                            <Text style={style.roundButtonMarron}>+</Text>
                                                        </Pressable>
                                                    </View>

                                                </View>
                                                <Pressable style={{ position: 'absolute', right: 25, top: 15 }}>
                                                    <Text style={{ fontSize: 20 }}>X</Text>
                                                </Pressable>

                                            </View>
                                        </View>
                                    )} /> </> :
                                <View style={{ alignItems: 'center' }}>
                                    <Image style={{ height: 200, width: 200 }} source={require('../../assests/images/empty-cart.png')} />
                                    <Text style={{ fontSize: 50, textAlign: 'center' }}>Cart is empty</Text>
                                </View>
                        }
                    </View >
            }</>
    )
}

export default Cart;