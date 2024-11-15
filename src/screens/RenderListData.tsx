import { View, Text, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from '../styles/globalStyles';
import { ModalForDescription } from './Modals/ModalForBookDescription';
import { book } from './MainScreen';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RenderListData = (props: any) => {

    const addToWishList = async (data: any) => {
        const dataUser = await AsyncStorage.getItem("currentUser");
        let user;
        if (dataUser) { user = JSON.parse(dataUser); }
        const details = { "bookId": data }
        console.log('====================================');
        console.log(details);
        console.log('====================================');
        console.log('====================================');
        console.log(user._id);
        console.log('====================================');
        axios.patch(`http://10.0.2.2:8000/api/v1/user/addToWishlist/${user._id}`, details).then(res => { console.warn('res'); }).catch(error => {
            console.warn(error);
        });
    }
    const addToCart = async (data: any, price: any) => {
        const dataUser = await AsyncStorage.getItem("currentUser");
        let user;
        if (dataUser) { user = JSON.parse(dataUser); }
        const details = { "bookId": data, "price": price }
        axios.patch(`http://10.0.2.2:8000/api/v1/user/addToCart/${user._id}`, details).then(res => { console.warn('res'); }).catch(error => {
            console.warn(error);
        });
    }

    const [isModalOpenForDescription, setModalOpenForDescription] = useState(false);
    const [currentBook, setCurrentBook] = useState<book[]>([])
    const item = props.item;

    return (
        <Pressable onPress={() => {
            setModalOpenForDescription(true);
            setCurrentBook(item);
        }} style={style.bookCard}>

            <View style={style.img}>
                <Image style={style.image} source={{ uri: `${item.img}` }} />
            </View>

            <View style={{ marginStart: 6 }}>
                <Text numberOfLines={1} style={{ fontSize: 20 }}>{item.title}</Text>
                <Text numberOfLines={1} style={{ color: 'grey' }}>{item.description}</Text>
                <Text>Rs.{item.discountedPrice}
                    <Text style={style.priceTextDiscounted}>Rs.{item.price}</Text>
                </Text>
            </View>
            <ModalForDescription
                isModalOpenForDescription={isModalOpenForDescription}
                setModalOpenForDescription={setModalOpenForDescription}
                book={currentBook}
            />

            <View style={style.favoriteAndAddToCartView}>
                <Pressable style={{ height: '100%', width: '24%', borderWidth: 1 }} onPress={() => { addToWishList(item._id) }}>
                    {
                        item.isFavorite ?
                            <Image source={require('../assests/images/heartRed.png')} style={{ height: 32, width: 32, alignSelf: 'center' }} />
                            :
                            <Image source={require('../assests/images/heart.png')} style={{ height: 32, width: 32, alignSelf: 'center' }} />
                    }

                </Pressable>
                <Pressable style={[item.inCart ? style.goToCart : style.addToCart]} onPress={() => {
                    console.warn("added to cart");
                    if (item.inCart) { props.setCart(true) }
                    else addToCart(item._id, item.discountedPrice);
                }}>
                    {item.inCart ?
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Go to cart</Text> : <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Add to cart</Text>}

                </Pressable>
            </View>

        </Pressable>
    )
}

export default RenderListData