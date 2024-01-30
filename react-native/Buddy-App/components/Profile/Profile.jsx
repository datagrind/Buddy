import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { useState } from 'react'
import NoPhotoProfile from "./NoPhotoProfile";
import { AntDesign } from '@expo/vector-icons';

const Profile = () => {
    const [profileImage, setProfileImage] = useState();
    const profileData = [
        {
            title: 'About Me',
            description: 'ad;flkajdfl;akjdflkasdj asdfl;kajdfkaljdflkasjfdk j al;djflkasjdflakjflasdjflk'
        },
        {
            title: 'Profile Photos',
            photos: []
        },
        {
            title: 'Interests',
            description: ''
        },
        {
            title: 'Life Style',
            types:  [
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

    const handlePhotoUpload = () => {
      // Implement logic for photo upload here
      // This could involve using libraries like react-native-image-picker or react-native-camera
      // For simplicity, we are using a default image in this example
    };


    return (
        <>
            <ScrollView contentContainerStyle={styles.container } maintainVisibleContentPosition={{ auto: 'never' }}>
                <View style={styles.item}>
                    <NoPhotoProfile factor='bigCircle' size={150} style={styles.subItem}>
                        <Image source={profileImage} style={styles.profileImage} />
                    </NoPhotoProfile>
                    <TouchableOpacity onPress={handlePhotoUpload} style={[styles.flexContainer, styles.element]}>
                        <Text style={[styles.subItem, styles.underline]}>Upload Profile Photo(s)</Text>
                        <AntDesign name="upload" size={20} color="black" />
                    </TouchableOpacity>
                    <Text style={[styles.subItem, styles.textLarge]}> Firstname Lastname</Text>
                </View>

                {/* Name */}
                <Text style={styles.name}>Your Name</Text>

                {/* About Me Section */}
                <Text style={styles.sectionHeading}>About Me</Text>
                <Text style={styles.description}>
                    Hi there! I'm a passionate individual with a keen interest in various fields. I believe in making a positive impact on the world and constantly learning new things.
                </Text>

                {/* Other Sections */}
                {/* (Add similar structures for Interests, Sex, Pronouns, etc.) */}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1, // Allows the container to take up the full available space
        padding: 16,
    },
    item: {
        padding: 0,
        marginBottom: 0,
        alignItems: 'center',
    },
    subItem: {
        padding: 8,
        margin: 8,
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
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
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
    flexContainer: {
        flexDirection: 'row', // Horizontal layout
        justifyContent: 'space-between', // Space between elements
        padding: 'none',
        margin: 'none',
    },
    element: {
        flex: 1, // Equal flex for both elements
        backgroundColor: 'lightblue',
        padding: 5,
        marginHorizontal: 1,
        alignItems: 'center',
    },
})

export default Profile;