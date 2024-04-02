import React from "react";
import { Text, View, ScrollView } from "react-native"; // Changed import statement
import { StyleSheet } from "react-native";
import { Spacer } from "native-base"; // Imported Spacer from native-base


const TermsConditions = () => {

    return (
        <View style={styles.container}>
            <Spacer height={125} />
            <Text style={styles.title}>Terms and Conditions for Buddy App:</Text>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <Text style={styles.text}>
                    Welcome to Buddy! Before using our platform, please carefully read and agree to the following terms and conditions:
                </Text>
                <Text style={styles.text}>
                    1. <Text style={styles.bold}>Acceptance of Terms:</Text> By accessing or using the Buddy app, you agree to be bound by these terms and conditions, our Privacy Policy, and any additional guidelines or rules posted on the app.
                </Text>
                <Text style={styles.text}>
                    2. <Text style={styles.bold}>Description of Service:</Text> Buddy provides a platform for connecting users seeking companionship with individuals offering companionship services. Users can browse profiles, chat with potential buddies, and arrange meetings.
                </Text>
                <Text style={styles.text}>
                    3. <Text style={styles.bold}>User Eligibility:</Text> You must be at least 18 years old to use the Buddy app. By using the app, you represent and warrant that you are of legal age and have the capacity to enter into this agreement.
                </Text>
                <Text style={styles.text}>
                    4. <Text style={styles.bold}>User Conduct:</Text> Users are solely responsible for their interactions with others on the Buddy app. You agree to conduct yourself in a respectful and lawful manner and to comply with all applicable laws and regulations.
                </Text>
                <Text style={styles.numberedText}>
                    4a. <Text style={styles.bold}>Respect and Dignity:</Text> Treat all users with respect, dignity, and kindness. Do not engage in behavior that is offensive, discriminatory, or harmful to others.
                </Text>
                <Text style={styles.numberedText}>
                    4b. <Text style={styles.bold}>Lawful Behavior:</Text> Comply with all applicable laws, regulations, and policies while using the Buddy app. Do not engage in any illegal activities or encourage others to do so.
                </Text>
                <Text style={styles.numberedText}>
                    4c. <Text style={styles.bold}>No Sexual Harassment:</Text> Sexual harassment or any behavior of a sexual nature is strictly prohibited on the Buddy app. This includes, but is not limited to, unwelcome advances, requests for sexual favors, or any other verbal, non-verbal, or physical conduct of a sexual nature.
                </Text>
                <Text style={styles.numberedText}>
                    4d. <Text style={styles.bold}>Consent and Boundaries:</Text> Respect personal boundaries and obtain explicit consent before engaging in any physical or intimate activities. Do not pressure or coerce others into any form of interaction against their will.
                </Text>
                <Text style={styles.numberedText}>
                    4e. <Text style={styles.bold}>Professionalism:</Text> If you are offering companion services on the Buddy app, maintain a professional demeanor at all times. Avoid engaging in personal or inappropriate discussions and focus on providing companionship in a respectful and courteous manner.
                </Text>
                <Text style={styles.numberedText}>
                    4f. <Text style={styles.bold}>Reporting Misconduct:</Text> If you encounter any behavior that violates these guidelines or makes you feel uncomfortable or unsafe, please report it to Buddy immediately. We take all reports of misconduct seriously and will take appropriate action to address the situation.
                </Text>
                <Text style={styles.text}>
                    5. <Text style={styles.bold}>Service Fees:</Text> Buddy may charge fees for certain services, such as premium features or bookings. By using these services, you agree to pay any applicable fees as described in the app.
                </Text>
                <Text style={styles.text}>
                    6. <Text style={styles.bold}>Booking and Payment:</Text> When booking a companion service through the app, users agree to the terms and conditions set by the companion provider, including rates, availability, and cancellation policies. Payment for services may be processed through the app.
                </Text>
                <Text style={styles.text}>
                    7. <Text style={styles.bold}>Safety and Security:</Text> While Buddy strives to provide a safe and secure platform, we cannot guarantee the actions or behavior of users. Users are encouraged to exercise caution and use common sense when meeting with companions arranged through the app.
                </Text>
                <Text style={styles.text}>
                    8. <Text style={styles.bold}>Intellectual Property:</Text> The Buddy app and its contents, including logos, graphics, and text, are protected by copyright and other intellectual property laws. Users may not copy, distribute, or modify any part of the app without prior written consent.
                </Text>
                <Text style={styles.text}>
                    9. <Text style={styles.bold}>Privacy:</Text> Buddy respects the privacy of its users and collects personal information only as described in our Privacy Policy. By using the app, you consent to the collection, use, and sharing of your information as outlined in the Privacy Policy.
                </Text>
                <Text style={styles.text}>
                    10. <Text style={styles.bold}>Termination:</Text> Buddy reserves the right to suspend or terminate your access to the app at any time, for any reason, without notice. You may also deactivate or delete your account at any time.
                </Text>
                <Text style={styles.text}>
                    11. <Text style={styles.bold}>Changes to Terms:</Text> Buddy may update or revise these terms and conditions from time to time. Any changes will be posted on the app, and continued use of the app constitutes acceptance of the revised terms.
                </Text>
                <Text style={styles.text}>
                    12. <Text style={styles.bold}>Governing Law:</Text> These terms and conditions are governed by the laws of [insert jurisdiction]. Any disputes arising out of or related to these terms shall be resolved through binding arbitration or in the courts of [insert jurisdiction].
                </Text>
                <Text style={styles.text}>
                    By using the Buddy app, you acknowledge that you have read, understood, and agree to these terms and conditions. If you do not agree with any part of these terms, you should not use the app. Thank you for choosing Buddy!
                </Text>
                <Spacer height={150} />
            </ScrollView> 
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      text: {
        marginBottom: 10,
      },
      bold: {
        fontWeight: 'bold',
      },
      numberedText: {
        marginLeft: 20,
        marginBottom: 10,
    },
    });

export default TermsConditions