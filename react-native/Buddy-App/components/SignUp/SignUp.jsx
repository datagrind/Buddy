
import Onboarding1 from "../Onboarding/Onboarding1"
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Text } from "native-base";
import { useState, useEffect } from "react";
import LoadingScreen from "../Loading/LoadingScreen";
import { signUp } from "aws-amplify/auth";
import { useNavigation } from "@react-navigation/native";
import Verify from "./Verify";



const SignUp = ( { login } ) => {

    const [isSignedUp, setIsSignedUp] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const errorSignUp = () => {
        return console.log("Required info not fulfilled")
    }
  
    const handleLogin = () => {
        setIsLoading((prev) => prev = true)
        if (firstname.length > 0 && lastname.length > 0 && password.length > 0 && password === confirmPassword){
            handleSignUp(password, email, phoneNumber, firstname, lastname )
        } else {
            setIsLoading((prev) => prev = false)
            return errorSignUp()
        }
        // login({ firstname, lastname })   
    }

    async function handleSignUp(password, email, phone_number, given_name, family_name ) {
        try {
          const { isSignUpComplete, userId, nextStep } = await signUp({
            username: email,
            password: password,
            options: {
              userAttributes: {
                email: email,
                phone_number: phone_number, // E.164 number convention
                given_name: given_name,
                family_name: family_name,
              },
              // optional
              autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
            }
        });
        console.log("userId",userId);
        setUsername((prev) => prev = userId)
          setIsSignedUp((prev) => prev = true)
        } catch (error) {
          setIsLoading((prev) => prev = false)
          setIsSignedUp((prev) => prev = false)
          console.log('error signing up:', error);
        }
      }
    // console.log(firstname)
  
    useEffect(() => {
        // Simulate some asynchronous operation (e.g., fetching data)
        setTimeout(() => {
          setIsLoading((prev) => prev = false); // Set loading to false after the operation is complete
        //   setIsSignedUp(false)
        }, 4000); // Simulating a 4-second loading time
      }, [isLoading === true]);
  
    return (<>
        { !isSignedUp ?<Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }} fontWeight="semibold">
                Welcome
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                color: "warmGray.200"
            }} fontWeight="medium" size="xs">
                Sign up to continue!
                </Heading>
                <Text>(* Required)</Text>
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email *</FormControl.Label>
                    <Input type='email' onChangeText={(text) => setEmail(text)}/>
                </FormControl>
                {/* <FormControl>
                    <FormControl.Label>Username *</FormControl.Label>
                    <Input type='username' onChangeText={(text) => setUsername(text)}/>
                </FormControl> */}
                <FormControl>
                    <FormControl.Label>Phone Number *</FormControl.Label>
                    <Input placeholder="+19991234567" type='phonenumber' onChangeText={(text) => setPhoneNumber(text)}/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Firstname *</FormControl.Label>
                    <Input type='firstname' onChangeText={(text) => setFirstname(text)}/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Lastname *</FormControl.Label>
                    <Input type='lastname' onChangeText={(text) => setLastname(text)}/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password *</FormControl.Label>
                    <Input type="password" onChangeText={(text) => setPassword(text)}/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Confirm Password *</FormControl.Label>
                    <Input type="password" onChangeText={(text) => setConfirmPassword(text)}/>
                </FormControl>
                <Button onPress={handleLogin} mt="2" colorScheme="red">
                    Sign up
                </Button>
                </VStack>
            </Box>
        </Center>
        : isLoading ?
        <LoadingScreen signup={isSignedUp}/>
        :<Verify username={username} password={password} login={login} name={[firstname, lastname]}/>
        }
        </>)

}

export default SignUp