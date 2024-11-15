import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { style } from '../styles/globalStyles';
import RenderListData from './RenderListData';
import { book } from './MainScreen';
import axios from 'axios';

const Dashboard = (props: any) => {

  const data: book[] = props.data;
  const count = props.count;

  const renderFooter = () => (
    <View style={{ backgroundColor: '#911c35', height: '20%', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center' }}>Copyright {'\u00A9'} 2024, Shantanu Rawade. All rights reserved.</Text>
    </View>
  );

  return (
    <View style={{ marginTop: 8, paddingBottom: 112 }}>

      <Text style={{ fontSize: 16 }}>Books
        <Text style={style.booksCount}>({count})</Text>
      </Text>
      <View style={{}}>

        <FlatList
          data={data}
          numColumns={2}
          ListFooterComponent={renderFooter}
          contentContainerStyle={{ paddingBottom: 150 }}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <RenderListData item={item} setCart={props.setCart} />
          )} />

      </View>
    </View>
  )
}


export default Dashboard;