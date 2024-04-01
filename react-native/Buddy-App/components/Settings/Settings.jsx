import { View, Text, FlatList, StyleSheet, Pressable } from "react-native"
import BackButton from "../UI/BackButton/BackButton"
import { useNavigation } from "@react-navigation/native"

const Settings = () => {

    const settingsData = [
        {
            sectionType: 'Account',
            component: 'Account'
        },
        {
            sectionType: 'Terms & Conditions',
            component: 'TermsConditions'
        },
        {
            sectionType: 'Contact Support',
            component: 'ContactSupport'
        },
        {
            sectionType: 'Security & Privacy',
            component: 'SecurityPrivacy'
        },
    ]

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>        
                <BackButton topPos={-150} padL={-30} />
                <FlatList  
                    data={settingsData} 
                    renderItem={({item}) =>
                        <View style={styles.section}>
                            <View style={[styles.flexRow]} >
                                <Pressable onPress={() => navigation.navigate(item.component)} >
                                    <Text style={styles.textMedium}>{item?.sectionType}</Text>
                                </Pressable>
                            </View>
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
        padding: 10,
        marginTop: 150,
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

export default Settings;