import Animated, {useSharedValue, useAnimatedStyle} from 'react-native-reanimated';
import PhotoCard from '../PhotoCard.jsx/PhotoCard';
import { useEffect, useState } from 'react';
import { getUser } from '../../../logic/getUser';
import { View, Pressable, StyleSheet, Text } from 'react-native';


const AnimatedCard = () => {

    const [photo, setPhoto] = useState()
    const userData = {
        'name': "Firstname Lastname",
        'bio': "I like long walks and icecream",
    }

    const sharedValue = useSharedValue(1)
    const cardStyle = useAnimatedStyle(() => ({
        opacity: sharedValue.value,
    }))

    const fetchData = async () => {
        try {
            const userData = await getUser();
            setPhoto(userData.results[0].picture.large)
            console.log('Received data:', userData);
        } catch (error) {
            console.error('Error:', error);
        }
      };  
    
      useEffect(() => {
        fetchData()
      }, []);

    return (
        <View>
            <Animated.View style={[styles.animateCard, cardStyle]}>
                <PhotoCard photo={photo} userData={userData}/>
            </Animated.View>
            <Pressable onPress={() => (sharedValue.value = Math.random())}>
                <Text>Change value</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    animateCard: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default AnimatedCard;