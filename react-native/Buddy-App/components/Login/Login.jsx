import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center } from "native-base";


const LoginScreen = ({ login, signup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    login(username)
    console.log('Logging in with:', { username, password });
  };

  const handleSignUp = () => {
    signup(true)
    console.log('Signing up...');
  };

  return (
    // <View style={styles.container}>
    //   <Image
    //     source={require('../../assets/logo_white_background.jpg')}
    //     style={{ width: 150, height: 200 }} // Adjust the width and height as needed
    //   />
    //   <Text style={styles.title}>Login</Text>

    //   <TextInput
    //     style={styles.input}
    //     placeholder="Username"
    //     value={username}
    //     onChangeText={(text) => setUsername(text)}
    //   />

    //   <TextInput
    //     style={styles.input}
    //     placeholder="Password"
    //     secureTextEntry
    //     value={password}
    //     onChangeText={(text) => setPassword(text)}
    //   />

    //   <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
    //     <Text style={styles.buttonText}>Login</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
    //     <Text style={styles.buttonText}>Sign Up</Text>
    //   </TouchableOpacity>
    // </View>
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        {/* <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading> */}
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
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "red.600"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="red">
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
