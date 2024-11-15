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
        elevation: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        height: height * .36,
        width: width * .44,
        margin: width * .028,
        backgroundColor: 'white',
        alignContent: 'center'
    },
    bookCardCart: {
        elevation: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        height: height * .24,
        width: width * .94,
        margin: width * .028,
        backgroundColor: 'white',
        alignContent: 'center'
    },
    priceTextDiscounted: {
        color: 'grey',
        textDecorationLine: 'line-through',
        fontSize: 15
    },
    priceText: {
        fontWeight: 700,
        fontSize: 20,
        margin: 5
    },
    img: {
        backgroundColor: '#d1d1d1',
        height: '60%',
        width: '100%',
        alignItems: 'center',
        borderTopStartRadius: 10,
        padding: 5
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
    goToCart: {
        backgroundColor: 'rgb(148,77,92)',
        opacity:5,
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
        fontSize: 16,
        color: 'grey'
    },
    modalView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'flex-end'
    },
    roundButtonMarron: {
        backgroundColor: '#911c35',
        textAlign: 'center',
        width: 25,
        color: 'white',
        borderRadius: 16,
        margin: 10,
        fontSize: 20
    },
    bookDescriptionModal: {
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 22
    },
    descriptionModal: {
        color: 'grey',
        width: '80%',
        alignSelf: 'center',
        marginTop: 10

    },
    contentBookModal: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'grey',
        marginHorizontal: 10
    },
    titleModal: {
        fontSize: 30,
        flexWrap: 'wrap',
        width: 250
    }
})
