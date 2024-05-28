import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import BackButton from '../UI/BackButton/BackButton';

const PrivacyPolicy = () => {
  const iOS = Platform.OS === "ios"
  return (
    <View>
        {/* <BackButton topPos={iOS ? 10:0} padL={-20} /> */}
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.paragraph}>
                This Privacy Policy describes how Buddy ("we", "us", or "our") collects, uses, and shares your personal information when you use our mobile application (the "App") and the services provided through the App (collectively, the "Services").
            </Text>
            <Text style={styles.paragraph}>
                Information Collection and Use: We collect personal information you provide directly to us when you sign up for an account, use the Services, or communicate with us.
            </Text>
            <Text style={styles.paragraph}>
                Information Sharing: We may share your personal information with third-party service providers who perform services on our behalf.
            </Text>
            <Text style={styles.paragraph}>
                Data Retention: We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
            </Text>
            <Text style={styles.paragraph}>
                Changes to This Privacy Policy: We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by posting the new Privacy Policy on this page.
            </Text>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PrivacyPolicy;
