import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { Box, Heading } from 'native-base';
import TermsConditions from '../Settings/TermConditions'; // Make sure to import the component

const Welcome = ({ username, onContinue }) => {

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
     setModalVisible(!modalVisible);
  };

  const handleFinishWelcome = () => {
    onContinue("Friend", false)
  }

  return (
    <View style={styles.container}>
      <Box w={'100%'} h={'30%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Image
          source={require('../../assets/logo_white_background.jpg')}
          style={{ width: 150, height: 200 }} // Adjust the width and height as needed
          />
      </Box>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Text style={styles.subtitle}>Thank you for signing up!</Text>
      <View style={{marginBottom: 5}}>
        <Text style={styles.paragraph}>
            At Buddy, we believe in fostering meaningful connections.
        </Text>
        <Text style={styles.paragraph}>
            Before you get started, please take a moment to review our rules and conduct:
        </Text>
        <Heading style={styles.listHeading}>Be Nice</Heading>
        <Text style={styles.listItem}>Respect Buddy providers and their boundaries. Use appropriate language and behavior at all times.</Text>
        <Heading style={styles.listHeading}>Be Authentic</Heading>
        <Text style={styles.listItem}>Ensure that your age, photographs, and bio accurately represent your true self.</Text>
        <Heading style={styles.listHeading}>Be Safe</Heading>
        <Text style={styles.listItem}>Do not engage in any illegal or harmful activities.</Text>
        <Heading style={styles.listHeading}>Stay Proactive</Heading>
        <Text style={styles.listItem}>Report any inappropriate behavior to our support team immediately.</Text>
      </View>
      <Text style={styles.listItem}>
            By continuing, you agree to our <TouchableOpacity  onPress={toggleModal}><Text style={styles.link}>Terms and Condition</Text></TouchableOpacity> and confirm that you have reviewed them.
      </Text>    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <TouchableOpacity onPress={toggleModal}>
                    <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
                <TermsConditions /> 
            </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.button} onPress={handleFinishWelcome}>
          <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  listHeading: {
    fontSize: 18,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    // textDecorationLine: 'underline',
    fontSize: 14,
    // borderWidth: 2,
    // marginTop: 30,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        height: 800,
        maxHeight: '80%',
        overflow: 'auto',
    },
    closeButton: {
        marginTop: 10,
        alignSelf: 'flex-end',
        fontSize: 18,
        color: 'blue',
    },
});

export default Welcome;
