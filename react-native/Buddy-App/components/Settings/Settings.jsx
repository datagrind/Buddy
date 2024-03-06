import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"

const Settings = () => {

    const settingsData = [
        {
            title: 'Account',
            type: ['Delete Account',]
        },
        {
            title: 'Notification Settings',
            type: ['',]
        },
        {
            title: 'Purchases',
            type: ['',]
        },
        {
            title: 'Contact & FAQs',
            type: ['',]
        },
        {
            title: 'Security & Privacy',
            type: ['Report a Buddy',]
        },
    ]

    return (
        <>
            <View style={styles.container}>        
                <FlatList  
                    data={settingsData} 
                    renderItem={({item}) =>
                        <View style={styles.section}>
                            <View style={[styles.flexRow]} >
                                <Text style={styles.textMedium}>{item?.title}</Text>
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

export default Settings;