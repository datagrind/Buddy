import { View, StyleSheet,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { getUser } from "../../logic/getUser";


const NoPhotoProfile = ( {focused, size = 25, color, factor}) => {
  const [userImage, setUserImage] = useState()

  const fetchData = async () => {
    try {
        const userData = await getUser();
        // setUserImage(userData.results[0].picture.large)
        console.log('Received data:', userData);
    } catch (error) {
        console.error('Error:', error);
    }
  };  

  useEffect(() => {
    fetchData()
  }, []);
  // console.log("NOPHOTOPROFILE :", userImage)
  return <View style={!userImage && styles[factor+"Circle"]}>
        {!userImage && <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color}/>}
        {userImage && <Image source={{uri: userImage} || userImage} style={styles[factor+"Circle"]} />}
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
    });

export default NoPhotoProfile;