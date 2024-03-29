import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from "react-native"
import NoPhotoProfile from "./NoPhotoProfile";
import { AntDesign } from '@expo/vector-icons';
import { upload } from "../../logic/upload";
import { Input } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const Profile = ({ route }) => {
    const profileData = [
        {
            title: 'About Me',
            description: 'I like to go on long walks and go out for ice cream'
        },
        {
            title: 'Interests',
            description: ''
        },
        {
            title: 'Life Style',
            type:  [
                'Pets',
                'Drinking',
                'Smoking',
                'Exercise',
                'Diet',
                'Social Media',
            ]
        },
        {
            title: 'Gender',
            type: [ 'male', 'female' ]
        },
        {
            title: 'Sexual Orientation',
            type: [ 'gay', 'straight', 'bisexual']
        },
    ]
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri); // Accessing the URI directly
        }
    };
    

    const staticHeader = () =>{
        return <View style={styles.itemm}>
            <NoPhotoProfile factor='med' size={100} style={styles.subItem}/>    
            <Text style={[styles.subItem, styles.textLarge]}> { route.params.data[0] } { route.params.data[1] }</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={pickImage} style={[styles.flexRow]}>
                    <Text style={[styles.subItem, styles.underline]}>Upload Profile Photo(s)</Text>
                    <AntDesign name="upload" size={20} color="black" style={styles.subItem}/>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        </View>
    }

    return (
        <>
            <View style={styles.container}>        
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={profileData} 
                    renderItem={({item}) =>
                        <View style={styles.section}>
                            <View style={[styles.flexRow]} >
                                <Text style={styles.textMedium}>{item?.title}</Text>
                                <TouchableOpacity onPress={null} style={[styles.flexRow]}>
                                    <Text style={[styles.underline, {margin: 11}]}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                            <Text>{item?.description}</Text>
                            {
                                item.type && item.type.map((item2, index) => {
                                    return (
                                        <View key={index} style={styles.subItem}>
                                            <Text>{item2}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    } 
                    // keyExtractor={(item)=>(item.toString)+((Math.round()).toString())}
                    ListHeaderComponent={staticHeader}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        flexGrow: 1, // Allows the container to take up the full available space
        padding: 5,
        marginTop: 100
    },
    itemm: {
        padding: 0,
        margin: 20,
        alignItems: 'center',
    },
    subItem: {
        padding: 3,
        margin: 3,
    },
    textLarge: {
        fontSize: 30,
    },
    textMedium: {
        fontSize: 25,
    },
    textSmall: {
        fontSize: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    underline: {
        textDecorationLine: 'underline'
    },
    flexRow: {
        flexDirection: 'row', // Horizontal layout
        padding: 'none',
        margin: 'none',
    },
    element: {
        flex: 1, // Equal flex for both elements
        backgroundColor: 'lightblue',
        padding: 5,
        marginHorizontal: 1,
        // alignItems: 'center',
    },
    section: {
        textAlign: "left",
        margin: 5,
    }
})

export default Profile;