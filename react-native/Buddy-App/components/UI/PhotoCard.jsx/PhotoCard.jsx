import { View, Image, StyleSheet } from "react-native";
import NoPhotoProfile from "../../Profile/NoPhotoProfile";

const PhotoCard = () => {

    return (
        <View style={styles.pageContainer}>
            <View style={styles.card}>
                <Image
                    source={null}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: '100%',
        height: "100%",
        borderRadius:'',
    },
    card: {
        width: '95%',
        height: '70%',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowColor: "#000",
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
})

export default PhotoCard;