import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Pressable, Spacer } from "native-base";
import NoPhotoProfile from "./NoPhotoProfile";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import AboutMe from './Edit/AboutMe';
import Interests from "./Edit/Interests";

const Profile = ({ route }) => {

    const [aboutMe, setAboutMe] = useState(false)
    const [interests, setInterests] = useState(false)
    
    console.log("Profile.interests: ", interests)
    console.log("Profile.aboutMe: ", aboutMe)
    const profileData = [
        {
            sectionType: 'About Me',
            state: aboutMe,
            setState: setAboutMe,
            component: <AboutMe aboutMeEdit={aboutMe} setAboutMe={setAboutMe} />
        },
        {
            sectionType: 'Interests',
            state: interests,
            setState: setInterests,
            component: <Interests interestsEdit={interests} setInterests={setInterests} />
        },
    ];

    const [image, setImage] = useState(null);
    const navigation = useNavigation();

    const handleBackButtonPress = () => {
        navigation.goBack();
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const staticHeader = () => {
        return (
            <View style={styles.itemm}>
                <Text style={styles.title}>My Profile</Text>
                <NoPhotoProfile factor='med' size={100} style={styles.subItem} />
                <Text style={[styles.subItem, styles.textLarge]}> {route.params.data[0]} {route.params.data[1]}</Text>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={pickImage} style={[styles.flexRow]}>
                        <Text style={[styles.subItem, styles.underline]}>Upload Profile Photo(s)</Text>
                        <AntDesign name="upload" size={20} color="black" style={styles.subItem} />
                    </TouchableOpacity>
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            </View>
        );
    }

    const staticFooter = () => {
        return <Spacer height={1000} />
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={handleBackButtonPress} top={-90} left={-20} m={10} position={'absolute'} zIndex={2} w={50} h={50} borderRadius={25} bg={'red.600'} alignItems={'center'} justifyContent={'center'}>
                <Ionicons name="chevron-back" size={35} color="white" />
            </Pressable>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={profileData}
                renderItem={({ item }) =>
                    <View style={styles.section}>
                        <View style={[styles.flexRow]} >
                            <Text style={styles.textMedium}>{item?.sectionType}</Text>
                            <TouchableOpacity onPress={() => {item.setState(true), console.log(item.sectionType , item.state)}} style={[styles.flexRow]}>
                                <Text style={[styles.underline, { margin: 11 }]}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        {item?.component}
                    </View>
                }
                ListHeaderComponent={staticHeader}
                ListFooterComponent={staticFooter}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexGrow: 1,
        padding: 20,
        marginTop: 100,
    },
      scrollViewContent: {
    flexGrow: 1,
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
    underline: {
        textDecorationLine: 'underline'
    },
    flexRow: {
        flexDirection: 'row',
        padding: 'none',
        margin: 'none',
    },
    section: {
        textAlign: "left",
        margin: 5,
    },
    title: {
        fontSize: 30,
    }
});

export default Profile;
