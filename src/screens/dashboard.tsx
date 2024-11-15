import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { style } from '../styles/globalStyles';
import { book } from './MainScreen';
import RenderListData from './RenderListData';

const Dashboard = (props: any) => {


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

  const renderFooter = () => (
    <View style={{ backgroundColor: '#911c35', height: '20%', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center' }}>Copyright {'\u00A9'} 2024, Shantanu Rawade. All rights reserved.</Text>
    </View>
  );
  const conunt = data.length;

  return (


    <View style={{ marginTop: 8, paddingBottom: 112 }}>

      <Text style={{ fontSize: 16 }}>Books
        <Text style={style.booksCount}>({conunt})</Text>
      </Text>

      <View style={{}}>

        <FlatList
          data={data}
          numColumns={2}
          ListFooterComponent={renderFooter}
          contentContainerStyle={{ paddingBottom: 150 }}
          keyExtractor={(item) => item.bookId.toString()}
          renderItem={({ item }) => (
            <RenderListData setModalOpenForDescription={setModalOpenForDescription} setCurrentBook={setCurrentBook} item={item} isModalOpenForDescription={isModalOpenForDescription} currentBook={currentBook} />
          )} />

      </View>
    </View>
  )
}


export default Dashboard;