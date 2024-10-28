import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get('window');

export const style = StyleSheet.create({

    header: {
        backgroundColor: 'white',
        elevation: 1,
        flexDirection: "row",
        height: height * .10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerOptions: {
        margin: 10,
        height: 28,
        width: 28
    },
    bookCard: {
        borderWidth: 1,
        height: height * .36,
        width: width * .44,
        margin: width * .028,
        backgroundColor: 'white',
        alignContent: 'center'
    },
    priceText: {
        color: 'grey',
        textDecorationLine: 'line-through'
    },
    img: {
        backgroundColor: '#d1d1d1',
        height: '56%',
        width: '84%',
        margin: '6%',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 165,
        resizeMode: 'cover',
    },
    favoriteAndAddToCartView: {
        margin: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '12%'
    },
    addToCart: {
        backgroundColor: '#911c35',
        width: '72%',
        height: '100%',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#911c35'
    },
    booksCount: {
        fontSize: 12,
        color: 'grey'
    }
})
