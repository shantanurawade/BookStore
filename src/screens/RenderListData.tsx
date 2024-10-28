import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { style } from '../styles/globalStyles';
import { ModalForDescription } from './Modals/ModalForBookDescription';

const RenderListData = (props: any) => {
    const setModalOpenForDescription = props.setModalOpenForDescription;
    const setCurrentBook = props.setCurrentBook;
    const item = props.item;
    const isModalOpenForDescription = props.isModalOpenForDescription;
    const currentBook = props.currentBook;
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
                    <Text style={style.priceText}>Rs.{item.price}</Text>
                </Text>
            </View>
            <ModalForDescription
                isModalOpenForDescription={isModalOpenForDescription}
                setModalOpenForDescription={setModalOpenForDescription}
                book={currentBook}
            />

            <View style={style.favoriteAndAddToCartView}>
                <Pressable style={{ height: '100%', width: '24%', borderWidth: 1 }}>
                    {
                        item.isFavorite ?
                            <Image source={require('../assests/images/heartRed.png')} style={{ height: 32, width: 32, alignSelf: 'center' }} />
                            :
                            <Image source={require('../assests/images/heart.png')} style={{ height: 32, width: 32, alignSelf: 'center' }} />
                    }

                </Pressable>
                <Pressable style={[style.addToCart]}>

                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Add to cart</Text>

                </Pressable>
            </View>

        </Pressable>
    )
}

export default RenderListData