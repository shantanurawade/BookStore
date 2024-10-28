import { View, Text, Pressable, Image, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { book } from './MainScreen';
import RenderListData from './RenderListData';
import { style } from '../styles/globalStyles';

const WishList = (props: any) => {
    const data = props.data;
    const [isModalOpenForDescription, setModalOpenForDescription] = useState(false);
    const [currentBook, setCurrentBook] = useState<book>({
        bookId: 1,
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7qKbkpal1PPrH_DMQxYdMbXPIda58ILd_CdYhKIQ4_Gd62RR6y72ff0TVXfnIQsXHhlQ_-TwrwXPST1yBba8iSuxwN2FzmCK8Rx1QjdMk&usqp=CAE',
        author: 'unknown',
        title: 'It ends with us',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt adipisci nesciunt eos, autem amet. Reprehenderit, rerum voluptatem corporis maxime natus facere alias veniam eligendi. Delectus ducimus molestiae ipsam sint.',
        discountedPrice: '300',
        price: '345',
        isFavorite: true
    })
    const filteredData = data.filter((item: any) => item.isFavorite);
    const count = filteredData.length;
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'white', elevation: 5, height: '8%', alignItems: 'center', flexDirection: 'row' }}>
                <Pressable style={{ width: '12%', justifyContent:'center' }} onPress={() => props.setFavorite(false)}>
                    <Text style={{ fontSize: 30, textAlign:'center'}}>{'<'}</Text>
                </Pressable>
                <Text style={{ fontSize: 30 }}>Wishlist</Text>
                <Text style={style.booksCount}> ({count}item)</Text>
            </View>
            <FlatList
                data={filteredData}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 150 }}
                keyExtractor={(item) => item.bookId.toString()}
                renderItem={({ item }) => (
                    <RenderListData setModalOpenForDescription={setModalOpenForDescription} setCurrentBook={setCurrentBook} item={item} isModalOpenForDescription={isModalOpenForDescription} currentBook={currentBook} />
                )} />

        </SafeAreaView>
    )
}

export default WishList