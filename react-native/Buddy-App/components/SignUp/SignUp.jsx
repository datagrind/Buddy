
import Onboarding1 from "../Onboarding/Onboarding1"
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Text } from "native-base";
import { Alert, StyleSheet } from "react-native";
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
    const [validationMessage, setValidationMessage] = useState('');
    const [confirmValidationMessage, setConfirmValidationMessage] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);


    const errorSignUp = () => {
        return console.log("Required info not fulfilled")
    }
  
    const handleLogin = () => {
        setIsLoading((prev) => prev = true)
        if (firstname.length > 0 && lastname.length > 0 && password.length > 0 && password === confirmPassword){
            validatePassword()
            validatePasswordsMatch()
            validateEmail()
            handlePhoneNumberChange()
            handleSignUp(password, email, `+1${phoneNumber}`, firstname, lastname )
        } else {
            setIsLoading((prev) => prev = false)
            return errorSignUp()
        }
    }

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(email));
        if (!emailRegex){
            Alert.alert('Invalid Email')
        }
      };

    const validatePassword = () => {
        const lengthRegex = /.{8,}/;
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numeralRegex = /\d/;
        const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    
        if (!lengthRegex.test(password)) {
          setValidationMessage('Password must be at least 8 characters long.');
          Alert.alert('Password must be at least 8 characters long.')
          return;
        }
    
        if (!lowercaseRegex.test(password)) {
          setValidationMessage('Password must contain at least one lowercase character.');
          Alert.alert('Password must contain at least one lowercase character.')
          return;
        }
    
        if (!uppercaseRegex.test(password)) {
          setValidationMessage('Password must contain at least one uppercase character.');
          Alert.alert('Password must contain at least one uppercase character.')
          return;
        }
    
        if (!numeralRegex.test(password)) {
          setValidationMessage('Password must contain at least one numeral.');
          Alert.alert('Password must contain at least one numeral.')
          return;
        }
    
        if (!symbolRegex.test(password)) {
          setValidationMessage('Password must contain at least one symbol.');
          Alert.alert('Password must contain at least one symbol.')
          return;
        }
    
        setValidationMessage('Password meets the password policy requirements.');
      };

    const validatePasswordsMatch = () => {
        if (password !== confirmPassword) {
            setConfirmValidationMessage('Passwords do not match.');
        } else {
            setConfirmValidationMessage('Passwords match.');
        }
    };

    const handlePhoneNumberChange = () => {
        // Check if the input contains only numbers
        const isValidPhoneNumber = /^\d{1,10}$/.test(phoneNumber);
        if ( phoneNumber.length < 10 && phoneNumber.length >= 1){
            Alert.alert('Please provide your full 10 digit number')
        } else if( phoneNumber.length > 10) {
            Alert.alert('Please provide no more than 10 numbers')
        }else if(!isValidPhoneNumber && phoneNumber.length >= 1){
            Alert.alert('Number characters only')
        }
        setIsPhoneValid(isValidPhoneNumber);
      };
    
      const handlePassword = () => {
        if(password.length > 0){
            validatePassword(password)
        }
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
                Sign Up
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                color: "warmGray.200"
            }} fontWeight="medium" size="xs">
                (* Required)
                </Heading>
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>
                    <Text style={[styles.validationMessage, email.length >= 1 && (!isEmailValid && styles.failure)]}>
                        Email *
                    </Text>
                    </FormControl.Label>
                    <Input type='email' onChangeText={(text) => setEmail(text)} onBlur={validateEmail}/>
                </FormControl>
                {/* <FormControl>
                    <FormControl.Label>Username *</FormControl.Label>
                    <Input type='username' onChangeText={(text) => setUsername(text)}/>
                </FormControl> */}
                <FormControl>
                    <FormControl.Label>
                    <Text style={[styles.validationMessage, phoneNumber.length >= 1 && (!isPhoneValid && styles.failure)]}>
                        Phone Number *
                    </Text>
                    </FormControl.Label>
                    <Input placeholder="(999)1234567" type='phonenumber' onChangeText={(text) => setPhoneNumber(text)} onBlur={handlePhoneNumberChange}/>
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
                    <FormControl.Label>
                    <Text style={[styles.validationMessage, password.length >= 1 && (!validationMessage.includes('meets') ? styles.failure : styles.success)]}>
                        Password *
                    </Text>
                    </FormControl.Label>
                    <Input type="password" onChangeText={(text) => setPassword(text)} onBlur={handlePassword} />
                </FormControl>
                <FormControl>
                    <FormControl.Label> 
                    <Text style={[styles.validationMessage,  confirmPassword.length >= 1 && (confirmValidationMessage === 'Passwords match.' ?  styles.success : styles.failure)]}>
                        Confirm Password *
                    </Text>
                    </FormControl.Label>
                    <Input type="password" onChangeText={(text) => setConfirmPassword(text)} onBlur={validatePasswordsMatch}  />
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

const styles = StyleSheet.create({
    validationMessage: {
      color: 'black',
      marginVertical: 10,
    },
    success: {
      color: 'green',
    },
    failure: {
      color: 'red',
    }
  });

export default SignUp