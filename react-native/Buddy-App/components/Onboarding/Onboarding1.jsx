import { 
    Image, 
    Box,
} from "native-base"
import SwipeableCard from "./SwipeableCard"
import Swiper from "react-native-swiper";
import { StyleSheet } from "react-native";
import { useState } from "react";
import Welcome from "./Welcome";


const Onboarding1 = ({ login, name, username }) => {
    const [doneSwiep, setDoneSwipe] = useState(false)

    const handleSwipe = () => {
        setDoneSwipe(true)
    };

    return (
        !doneSwiep ?
        <Box h={'100%'} w={'100%'} borderWidth={0} flex={1} justifyContent={'center'} alignItems={'center'} padding={5} position="relative">
            <Box style={styles.cardContainer}>
                <Image style={styles.cardImage} source={require('../../assets/93-930424_bring-a-friend-day-march-31-2017-western.png')} alt={'cartoon people gathered'} />
                <Swiper
                    loop={false}
                    activeDotColor="red"
                    style={styles.swiperStyles}
                >
                    <SwipeableCard card={'card1'} />
                    <SwipeableCard card={'card2'} />
                    <SwipeableCard card={'card3'} doneSwipe={handleSwipe} name={name} username={username} />
                </Swiper>
            </Box>
        </Box> :
        <Welcome onContinue={login} />
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    swiperStyles: {
        top: 500,
        left: 0,
        right: 0,
        bottom: 0,
    },
    cardImage: {
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        height: 290,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
        padding: 5,
        marginTop: 45,
        zIndex: 0,
    },
});

export default Onboarding1;
