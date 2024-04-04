import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';



const Host = () => {
    return (
        <View style={styles.cardContainer}>
            <Swiper
                loop={false}
                activeDotColor="red"
                style={styles.swiperStyles}
            >
            <View style={[styles.page, { backgroundColor: 'skyblue' }]}>
                <Text>Page 1</Text>
            </View>
            <View style={[styles.page, { backgroundColor: 'lightgreen' }]}>
                <Text>Page 2</Text>
            </View>
            <View style={[styles.page, { backgroundColor: 'salmon' }]}>
                <Text>Page 3</Text>
            </View>
            </Swiper>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      page: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      swiperStyles: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        },
        cardContainer: {
            position: 'relative',
            width: '100%',
            height: '30%',
        },
    });

export default Host;