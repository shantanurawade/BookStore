import { View, Text, Pressable, Image, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import RenderListData from './RenderListData';
import axios from 'axios';
import { book } from './MainScreen';
import { style } from '../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WishList = (props: any) => {
    const [book, setBook] = useState<book[]>([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        var wishlistDataArray: any = [];
        try {
            (async () => {

                const dataUser = await AsyncStorage.getItem("currentUser");
                let user;
                if (dataUser) { user = JSON.parse(dataUser); }
                const data = await (axios.get(`http://10.0.2.2:8000/api/v1/user/get/${user._id}`));
                const wishlistItems: [] = data.data.wishlist.items;
                console.log('====================================');
                console.log(wishlistItems);
                console.log('====================================');
                const book = (await axios.get('http://10.0.2.2:8000/api/v1/book/get')).data;
                await Promise.all(
                    wishlistItems.map(async (items: any) => {
                        const getBook = items.bookId;
                        const book = await axios.get(`http://10.0.2.2:8000/api/v1/book/getById/${getBook}`);
                        console.log('====================================');
                        console.log(book.data);
                        console.log('====================================');
                        wishlistDataArray.push(book.data.data)
                    }));
                console.log('====================================');
                console.log(wishlistDataArray);
                console.log('====================================');
                setBook(wishlistDataArray);
                setCount(wishlistDataArray.length);
            })()

        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }

    }, [])

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'white', elevation: 5, height: '6%', marginTop: '2%', alignItems: 'center', flexDirection: 'row' }}>
                <Pressable style={{ width: '12%', justifyContent: 'center' }} onPress={() => props.setFavorite(false)}>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>{'<'}</Text>
                </Pressable>
                <Text style={{ fontSize: 30 }}>Wishlist</Text>
                <Text style={style.booksCount}> ({count} {count === 1 ? 'item' : 'items'})</Text>
            </View>
            <FlatList
                data={book}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 300 }}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({ item }) => (
                    <RenderListData item={item} />
                )} />

        </SafeAreaView>
    )
}

export default WishList