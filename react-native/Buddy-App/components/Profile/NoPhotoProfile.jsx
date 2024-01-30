import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NoPhotoProfile = ( {focused, size = 25, color, factor}) => {
    return <View style={styles[factor]}>
        <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color}/>
    </View>
}

const styles = StyleSheet.create({
    //   container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    //   title: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     marginBottom: 20,
    //   },
    //   content: {
    //     fontSize: 16,
    //     marginBottom: 20,
    //   },
    //   menuButton: {
    //     backgroundColor: 'blue',
    //     padding: 10,
    //     borderRadius: 5,
    //     marginTop: 20,
    //   },
    //   buttonText: {
    //     color: 'white',
    //     textAlign: 'center',
    //     fontSize: 16,
    //   },
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
    });

export default NoPhotoProfile;