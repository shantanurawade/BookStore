import { Image, Modal, Text, View, TouchableWithoutFeedback, Pressable } from "react-native";
import { style } from "../../styles/globalStyles";

export const ModalForDescription = (props: any) => {

    const book = props.book;
    return (
        <Modal transparent={true}
            animationType='none'
            visible={props.isModalOpenForDescription}>

            <View style={style.modalView}>

                <Pressable style={{ alignItems: 'center' }} onPress={() => { props.setModalOpenForDescription(false) }} >
                    <Text style={style.closeModal}>X</Text>
                </Pressable>
                <View style={style.bookDescriptionModal}>
                    <View style={style.contentBookModal}>
                        <Image source={{ uri: `${book.img}` }} style={[style.image, { margin: 20 }]} />
                        <View>
                            <Text style={style.titleModal}> {book.title}</Text>
                            <Text style={{ color: 'grey' }}>~ By {book.author}</Text>
                        </View>
                    </View>
                    <Text style={style.descriptionModal}> {book.description} </Text>
                </View>
            </View>

        </Modal >
    )
}