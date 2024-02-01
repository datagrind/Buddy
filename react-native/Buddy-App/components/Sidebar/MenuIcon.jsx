import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const MenuIcon = ( {focused, size = 25, color, factor}) => {

  const navigation = useNavigation()

  return <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
      <View style={styles[factor]}>
        <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color}/>
      </View>
  </TouchableOpacity>
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
    });

export default MenuIcon;