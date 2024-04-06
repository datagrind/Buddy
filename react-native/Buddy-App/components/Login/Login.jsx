import React, { useState } from 'react';
import {Alert, StyleSheet, Image } from 'react-native';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center } from "native-base";
import { signIn } from '@aws-amplify/auth';


const LoginScreen = ({ login, signup, userData }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    try {
      const { isSignedIn, nextStep } = await signIn({
        username, 
        password,   
        options: {
          authFlowType: 'USER_PASSWORD_AUTH',
          clientMetadata: {},
      }});
      if (isSignedIn) {
        console.log("signIn.isSignedIn: ", isSignedIn);
        login(userData?.payload?.given_name, true)
      }
    } catch (error) {
      error.message === 'There is already a signed in user.' ? (console.log("already signedin: ", error.message) , login(userData.payload?.given_name, true)) : (console.log('LoginScreen.signIn: error signing in:', error.message), Alert.alert(error.message));

    }
  }

  const handleSignUp = () => {
    signup(true)
    console.log('Signing up...');
  };

  const onLogin = () => {
    console.log("Logging in with username:", username, "and password:", password);
    handleSignIn(username, password);
  };
  

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Box w={'100%'} h={'30%'} flex={1} justifyContent={'center'} alignItems={'center'}>
          <Image
            source={require('../../assets/logo_white_background.jpg')}
            style={{ width: 150, height: 200 }} // Adjust the width and height as needed
          />
        </Box>
        <Heading mt="100" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={username} type="email" onChange={(e) => { e.persist(); setUsername( e.nativeEvent.text); console.log("Email:", e.nativeEvent.text);}}  />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input value={password} type="password" onChange={(e) => { e.persist(); setPassword(e.nativeEvent.text); console.log("Password:", e.nativeEvent.text);}} />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "red.600"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="red" onPress={handleSignIn}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "red.600",
            fontWeight: "medium",
            fontSize: "sm"
          }} href={null} onPress={handleSignUp}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    marginBottom: 20,
    padding: 10,
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    borderRadius: 40,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginScreen;
