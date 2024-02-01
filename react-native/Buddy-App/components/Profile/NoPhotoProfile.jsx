import { View, StyleSheet,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const NoPhotoProfile = ( {focused, size = 25, color, factor, hasImage}) => {

  return <View style={styles[factor]}>
        {!hasImage && <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color}/>}
        {hasImage && <Image source={hasImage} style={styles.profileImage} />}
      </View>
}

const styles = StyleSheet.create({
      smallCircle: {
        width: 50,
        height: 50,
        border: 10,
        borderColor: 'black',
        borderRadius: 25, // Half of the width and height to make it a circle
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        marginRight: 20,
      },
      bigCircle: {
        width: 300,
        height: 300,
        border: 10,
        borderColor: 'black',
        borderRadius: 150, // Half of the width and height to make it a circle
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        marginRight: 20,
      },
      medCircle: {
        width: 200,
        height: 200,
        border: 10,
        borderColor: 'black',
        borderRadius: 150, // Half of the width and height to make it a circle
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        marginRight: 20,
      },
      profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
      },
    });

export default NoPhotoProfile;