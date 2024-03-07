
import Onboarding1 from "../Onboarding/Onboarding1"
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";
import { useState, useEffect } from "react";
import LoadingScreen from "../Loading/LoadingScreen";


const SignUp = ( { login }) => {

    const [isSignedUp, setIsSignedUp] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = () => {
        setIsSignedUp(true)
        setIsLoading(true)
        // login({ firstname, lastname })
    }

    console.log(firstname)

    useEffect(() => {
        // Simulate some asynchronous operation (e.g., fetching data)
        setTimeout(() => {
          setIsLoading(false); // Set loading to false after the operation is complete
        //   setIsSignedUp(false)
        }, 4000); // Simulating a 4-second loading time
      }, [handleLogin]);

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
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Firstname</FormControl.Label>
                    <Input type='firstname' onChangeText={(text) => setFirstname(text)}/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Lastname</FormControl.Label>
                    <Input type='lastname' onChangeText={(text) => setLastname(text)}/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" onChangeText={(text) => setPassword(text)}/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Confirm Password</FormControl.Label>
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
        :<Onboarding1 login={login} form={[firstname, lastname, password]}/>
        }
        </>)

}

export default SignUp