import { View, StyleSheet, ImageBackground } from "react-native";

const PhotoCard = (props) => {

    const {name, image, bio} = props;

    return (
            <View style={styles.card}>
                <ImageBackground
                    source={null}
                    style={styles.image}
                >
                    <View style={styles.cardInner}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.bio}>{bio}</Text>
                    </View>
                </ImageBackground>
            </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: "100%",
        borderRadius:10,
        overflow:'hidden',
        justifyContent: 'flex-end',
        padding: 20,
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
    name: {
        fontsize: 18,
        color: 'white',
        lineHeight: 25,
        marginHorizontal: 10,
    },
    cardInner: {
        padding: 10,
    },
    bio: {
        fontSize: 18,
        color: 'white',
        lineHeight: 25,
    },
})

export default PhotoCard;