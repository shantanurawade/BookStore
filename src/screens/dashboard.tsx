import { View, Text, FlatList, SafeAreaView, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { style } from '../styles/globalStyles';
import { ModalForDescription } from './Modals/ModalForBookDescription';

const dashboard = () => {

  type book = {
    bookId: number,
    img: string,
    title: string,
    description: string,
    discountedPrice: string,
    author: string,
    price: string,
    isFavorite: boolean
  }
  const data: book[] = [{
    bookId: 1,
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7qKbkpal1PPrH_DMQxYdMbXPIda58ILd_CdYhKIQ4_Gd62RR6y72ff0TVXfnIQsXHhlQ_-TwrwXPST1yBba8iSuxwN2FzmCK8Rx1QjdMk&usqp=CAE',
    author: 'unknown',
    title: 'It ends with us',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt adipisci nesciunt eos, autem amet. Reprehenderit, rerum voluptatem corporis maxime natus facere alias veniam eligendi. Delectus ducimus molestiae ipsam sint.',
    discountedPrice: '300',
    price: '345',
    isFavorite: true,
  }, {
    bookId: 2,
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8zk1njIPCbf2ZYRo4DjFtO7Z8Rq1yBjMnZywZicZBUWjz2ZrHW0pZe4xINr19uogO19ZEmMxvfnvbNvur_ySYdfpxr1oZ1B34NCTeOn3yzNnOt7-7PjWOVg&usqp=CAE',
    title: 'Ikigai',
    author: 'unknown',
    description: 'The japnise scret of happy life',
    discountedPrice: '500',
    price: '680',
    isFavorite: false,
  }, {
    bookId: 3,
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnv5QYfKPluND1y_b6y--ErUtlazVbbK2IBc16AFv7ugrvA7KAMgrk_J_2IYeCXd8z3VFdHSQqJp0FFVEaBFxs4VZycndLCSGILVMPj1Uw&usqp=CAE',
    author: 'unknown',
    title: 'A good girls guide to murder',
    description: 'By Holly Jackson',
    discountedPrice: '700',
    price: '890',
    isFavorite: true,
  }, {
    bookId: 4,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJhiuF1s2UYyViN8dbufU77yL_GphYYe56DVEImKZNHzg3PEm1K5doZNdIcHDk0rTl1ddvPXXtZJQjJTCeQlyyu1MeS7GVPE_Xib9pCILwsxQ3TTAmiyJWPg&usqp=CAE',
    title: 'Deep work',
    author: 'unknown',
    description: 'Rule for focus and success',
    discountedPrice: '1050',
    price: '1500',
    isFavorite: false,
  }, {
    bookId: 5,
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrpu1c7aklZZPmts8608Afx2IUkmSmgmDN8hNaLMECa2UnHA1T-M6NJHeZoFYWa3gbmeuH5Ms4r_WbfGeMGm4R1Nn4EfX4-4UO-_gj_qqOmvLEt2aTJwSOGg&usqp=CAE',
    title: "Build Don'y talk",
    author: 'unknown',
    description: 'By Raj Shamani',
    discountedPrice: '480',
    price: '560',
    isFavorite: false,
  }, {
    bookId: 6,
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3iqBQqxTXYiUocWXGm2mT71rh7wH39QyKvJlpfAhKrZZOxCl8y_hv98hsLqAMDbWv6oFAJUzNSGulTLYRo_fdSc0HMLrnVQ5Rfuok-YQ&usqp=CAE',
    title: 'Verity',
    author: 'unknown',
    description: 'By Collen Hoover',
    discountedPrice: '300',
    price: '345',
    isFavorite: false,
  }, {
    bookId: 7,
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQc6HmjUsD2SmOv7ocVLdR-TBbz8PQNxm7BQXj5aIaMGciosmek8V93QjxO7R_56ia-4aklXIa7Ye6EL34uzltTWukYTr20MgUuoEoPmIpf&usqp=CAE',
    author: 'unknown',
    title: 'From blood and ash',
    description: 'By Jennifer L. Armentrout',
    discountedPrice: '300',
    price: '345',
    isFavorite: true,
  }]
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
    <View >
      <Text>Copy</Text>
    </View>
  );
  const conunt = data.length;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>

        <View style={style.header}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assests/images/book.png')} style={style.headerOptions}></Image>
            <Text style={style.title}>Book Store</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assests/images/search.png')} style={style.headerOptions} />
            <Image source={require('../assests/images/heart.png')} style={style.headerOptions} />
            <Image source={require('../assests/images/cart.png')} style={style.headerOptions} />
          </View>

        </View>

        <View style={{ marginTop: 8 }}>

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
              )} />


          </View>

        </View>
      </View>

    </SafeAreaView>
  )
}


export default dashboard