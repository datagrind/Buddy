import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import NoPhotoProfile from "./NoPhotoProfile";
import { AntDesign } from '@expo/vector-icons';

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

    const staticHeader = () =>{
        return <View style={styles.itemm}>
            <NoPhotoProfile factor='med' size={100} style={styles.subItem}/>    
            <TouchableOpacity onPress={handlePhotoUpload} style={[styles.flexRow]}>
                <Text style={[styles.subItem, styles.underline]}>Upload Profile Photo(s)</Text>
                <AntDesign name="upload" size={20} color="black" style={styles.subItem}/>
            </TouchableOpacity>
            <Text style={[styles.subItem, styles.textLarge]}> { route.params.name } </Text>
        </View>
    }

    const handlePhotoUpload = () => {
      // Implement logic for photo upload here
      // This could involve using libraries like react-native-image-picker or react-native-camera
      // For simplicity, we are using a default image in this example
    };

    return (
        <>
            <View style={styles.container}>        
                <FlatList 
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