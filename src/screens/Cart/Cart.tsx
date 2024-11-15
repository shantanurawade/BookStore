import { View, Text, FlatList, Pressable, Image, LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from '../../styles/globalStyles'
import axios from 'axios'
import { book } from '../MainScreen'
import { AddressCart, CartTotal } from './CartUtils'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Cart = () => {
    const [cartData, setCartData] = useState<any[]>([]);
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);


    useEffect(() => {
        var cartDataArray: any = [];
        ; (async () => {
            try {
                const dataUser = await AsyncStorage.getItem("currentUser");
                let user;
                if (dataUser) { user = JSON.parse(dataUser); }
                const data = await (axios.get(`http://10.0.2.2:8000/api/v1/user/get/${user._id}`));
                const cartItems: [] = data.data.cart.items;
                await Promise.all(
                    cartItems.map(async (items: any) => {
                        const getBook = items.bookId;
                        const book = await axios.get(`http://10.0.2.2:8000/api/v1/book/getById/${getBook}`);
                        const cart = book.data.data;
                        const quantity = items.quantity
                        cartDataArray.push({ ...cart, quantity });
                    }))
                setCartData(cartDataArray);
                setCount(cartDataArray.length);
                setAmount(data.data.cart.totalAmount);
            } catch (error) {
                console.warn(error);
            }
        })();


    }, []);
    return (
        <View style={{ marginTop: 8, marginBottom: 140 }}>
            <Text style={{ fontSize: 16 }}>Books
                <Text style={style.booksCount}>({count})</Text>
            </Text>
            {cartData.length > 0 ?
                <FlatList
                    data={cartData}
                    // numColumns={2}
                    ListFooterComponent={<View>
                        <AddressCart />
                        <CartTotal amount={amount} />
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
                    )} /> :
                <View style={{ flex: 1 }}>
                    <Text>Cart is empty.</Text>
                </View>}
        </View>
    )
}

export default Cart;