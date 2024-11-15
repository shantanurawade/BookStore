import { View, Text, Image, SafeAreaView, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { style } from '../styles/globalStyles'
import Dashboard from './Dashboard'
import WishList from './WishList'
import Cart from './Cart/Cart'
import axios from 'axios'

export type book = {
    _id: number,
    img: string,
    title: string,
    description: string,
    author: string,
    discountedPrice: string,
    price: number,
    quantity: number
}


const MainScreen = () => {

    const [books, setBooks] = useState<book[]>();
    const [isFavorite, setFavorite] = useState(false);
    const [isCart, setCart] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        ; (async () => {
            const dataUser = await AsyncStorage.getItem("currentUser");
            let user;
            if (dataUser) { user = JSON.parse(dataUser); }

            const data = ((await axios.get('http://10.0.2.2:8000/api/v1/book/get')).data).data;
            const userData = (await (axios.get(`http://10.0.2.2:8000/api/v1/user/get/${user._id}`)));
            const cartItems: any = userData.data.cart.items;

            const updated: book[] = data.map((item: any) => {
                var inCart = false;
                cartItems.find((itemInCart: any) => { if (itemInCart.bookId == item._id) inCart = true; });
                return item = { ...item, inCart }
            });
            setBooks(updated);
            setCount(data.length);

        })();

    }, [])


    return (
        <SafeAreaView>
            <View style={style.header}>

                <Pressable onPress={() => { setCart(false); setFavorite(false) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Image source={require('../assests/images/book.png')} style={style.headerOptions}></Image>
                        <Text style={style.title}>Book Store</Text>
                    </View>

                </Pressable>

                <View style={{ flexDirection: 'row' }}>

                    <Image source={require('../assests/images/search.png')} style={style.headerOptions} />

                    <Pressable onPress={() => { setFavorite(true); setCart(false); }}>
                        {isFavorite ?
                            <Image source={require('../assests/images/heartRed.png')} style={style.headerOptions} />
                            :
                            <Image source={require('../assests/images/heart.png')} style={style.headerOptions} />
                        }
                    </Pressable>
                    <Pressable onPress={() => { setCart(!isCart); setFavorite(false); }}>
                        <Image source={require('../assests/images/cart.png')} style={style.headerOptions} />
                    </Pressable>

                </View>

            </View>
            {
                isCart ? <Cart /> : isFavorite ? <WishList setFavorite={setFavorite} /> : <Dashboard count={count} data={books} setCart={setCart} />

            }
        </SafeAreaView >
    )
}

export default MainScreen;