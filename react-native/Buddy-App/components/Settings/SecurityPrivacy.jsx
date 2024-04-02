import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Spacer } from 'native-base';
import { useNavigation } from '@react-navigation/native';


const SecurityPrivacy = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Spacer height={125} />
            <Text style={styles.title}>Security & Privacy</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.sectionTitle}>Data Protection</Text>
                <Text style={styles.paragraph}>
                    At Buddy, we take the security and privacy of your personal information
                    seriously. We employ industry-standard measures to protect your data
                    from unauthorized access, disclosure, alteration, or destruction.
                </Text>
                <Text style={styles.sectionTitle}>User Authentication</Text>
                <Text style={styles.paragraph}>
                    We utilize secure authentication methods to verify the identity of our
                    users and prevent unauthorized access to accounts.
                </Text>
                <Text style={styles.sectionTitle}>Data Encryption</Text>
                <Text style={styles.paragraph}>
                    All data transmitted between your device and our servers is encrypted
                    using state-of-the-art encryption protocols to ensure the privacy and
                    integrity of your information.
                </Text>
                <Text style={styles.sectionTitle}>Third-party Services</Text>
                <Text style={styles.paragraph}>
                    We may use third-party services to enhance the functionality of the
                    Buddy App. These services are carefully vetted to ensure they comply
                    with our strict security and privacy standards.
                </Text>
                <Text style={styles.sectionTitle}>Privacy Policy</Text>
                <Text style={styles.paragraph}>
                    For detailed information about how we collect, use, and disclose your
                    personal information, please refer to our 
                      <TouchableOpacity  onPress={() => navigation.navigate('PrivacyPolicy')}>
                        <Text style={styles.link}>  Privacy Policy</Text>
                      </TouchableOpacity>
                </Text>
                <Spacer height={125} />
            </ScrollView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
      },
      paragraph: {
        fontSize: 16,
        // marginBottom: 15,
      },
      link: {
        fontSize: 16,
        color: 'blue', // Change color as needed
        // textDecorationLine: 'underline',
      },
    });

export default SecurityPrivacy