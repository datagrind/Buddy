import { 
    Image, 
    Text, 
    Button, 
    Stack, 
    Box,
    ThreeDotsIcon, 
} from "native-base"
import SwipeableCard from "./SwipeableCard"
import Swiper from "react-native-swiper";
import { StyleSheet, View } from "react-native";


const Onboarding1 = ( { login, name, username } ) => {

    const handleSwipe = () => {
        console.log('Card swiped!');
        // Add your logic for what should happen when the card is swiped
    };

    return (
        <Box h={'100%'} w={'100%'} borderWidth={2} flex={1} justifyContent={'center'} alignItems={'center'} padding={20}>
            {/* <Stack h={'30%'} w={'100%'}>
                <Text> Onboarding1 </Text>
                <Image source={require('../../assets/93-930424_bring-a-friend-day-march-31-2017-western.png')} ></Image>
            </Stack>
            <Stack h={'30%'} w={'100%'} p={5}>
                <Box h={'25%'} w={'100%'}>
                    <Text> Discover Great Connections</Text>
                    <Text> Explore a diverse community of Buddys ready to offer unique experiences. </Text>
                    <Button onPress={() => console.log("hello world")}>Next</Button>
                </Box>
            </Stack> */}
            <Box flex={1} h={'75%'} w={'150%'} showsPagination={false} index={1} style={styles.swiperStyles}>
                <Swiper 
                    loop={false} 
                    borderWidth={0}
                    activeDotColor="red"
                    // showsButtons={true}
                    style={{flex: 1, marginTop: 100, position: 'absolute', zIndex: 3}}
                >
                    <SwipeableCard card={'card1'} />
                    <SwipeableCard card={'card2'} />
                    <SwipeableCard card={'card3'} login={login} name={name} username={username} />
                </Swiper>
            </Box>

            {/* <Box h={75} w={75} justifyContent={'center'} alignItems={'center'}>
                <ThreeDotsIcon size={10} />
            </Box> */}
      {/* <SwipeableCard title="Card 2" subtitle="Swipe me too!" onSwipe={handleSwipe} /> */}
        </Box>

    )

}

const styles = StyleSheet.create({
    swiperStyles: {
        flex: 1,
        borderWidth: 0,
    },
})
export default Onboarding1