import { Image, StyleSheet } from "react-native";



const Background = () => {
    return (
        <Image
            source={require('../../assets/gradientRedBackground.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
        />
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    },
  });

export default Background;