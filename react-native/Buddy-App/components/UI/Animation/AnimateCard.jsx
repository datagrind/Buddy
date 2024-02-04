import Animated, {useSharedValue, useAnimatedStyle} from 'react-native-reanimated';



const AnimatedCard = (prop) => {

    const sharedValue = useSharedValue(1)
    const cardStyle = useAnimatedStyle(() => ({
        opacity: sharedValue.value,
    }))

    return (
        <Animated.View style={[styles.animateCard, cardStyle]}>
            {prop}
        </Animated.View>
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