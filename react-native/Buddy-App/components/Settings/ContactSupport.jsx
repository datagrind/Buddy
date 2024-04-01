import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Spacer } from 'native-base';


const ContactSupport = () => {
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
  
    const handleMessageChange = (text) => {
      setMessage(text);
    };
  
    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
      };
    
    const handleEmailChange = (text) => {
    setEmail(text);
    };
  
    const handleSubmit = () => {
      // Here you can implement the logic to send the message to the support team
      console.log('Message:', message);
      console.log('Phone Number:', phoneNumber);
      console.log('Email:', email);
      // Reset input fields after submitting
      setMessage('');
      setPhoneNumber('');
      setEmail('');
      // Hide keyboard after submitting
      Keyboard.dismiss();
    };
  
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Contact Support</Text>
                <Text style={styles.text}>Please leave a message and we will get back to you as soon as possible</Text>
                <TextInput
                style={styles.input}
                placeholder="Enter your message"
                value={message}
                onChangeText={handleMessageChange}
                multiline={true}
                />
                <TextInput
                style={styles.inputContact}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
                keyboardType="phone-pad"
                />
                <TextInput
                style={styles.inputContact}
                placeholder="Email"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>

    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    text: {
        margin: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      width: '100%',
      minHeight: 100, // Adjust height as needed for the message input
    },
    inputContact: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      width: '100%',
      minHeight: 50, // Adjust height as needed for the message input
    },
    button: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default ContactSupport