import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import LoginLoad from './LoginLoad'
import SignUpLoad from '../Loading/SignUpLoad'

const LoadingScreen = ({ login, signup }) => {
  return (
    <>
      {
        login ? <LoginLoad /> : 
        signup ? <SignUpLoad /> :
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo_white_background.jpg')}
            style={{ width: 150, height: 200 }} // Adjust the width and height as needed
          />
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginBottom: 10,
  },
});

export default LoadingScreen;
