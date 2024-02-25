import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoginLoad = () => {
  return (
    <View style={styles.container}>
      <LottieView 
        source={require('../../assets/Animation - welcome.json')}
        autoPlay
        style={{width: "100%", height: "100%"}}
      />
    </View>
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

export default LoginLoad;
