
import React, { useState, useEffect, useLayoutEffect } from 'react';
import UserDashboard from './components/Dashboard/UserDashBoard';
import LoadingScreen from './components/Loading/LoadingScreen';
import { StyleSheet} from 'react-native';
import { View } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import Login from './components/Login/Login'
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import SignUp from './components/SignUp/SignUp';
import { fetchAuthSession } from 'aws-amplify/auth';
import { signOut } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json'
import { Authenticator } from '@aws-amplify/ui-react-native';
Amplify.configure(amplifyconfig);




const App = () =>  {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState('');
  const [isSignUp, setIsSignUp] = useState(false)
  const [dataAccess, setDataAccess] = useState()
  const [userAccess, setUserAccess] = useState()

  // console.log("App.userData: ", userData && userData)

  const userSelector = (context) => context; 


  
  function handleSetLogin(data, bool) {
    setIsLogin((prev) => prev = bool)
    setIsLoading((prev) => prev = true)
    setIsSignUp((prev) => prev = false)
  }
  
  function handleIsSignUp(bool) {
    setIsSignUp((prev) => prev = bool)
  }
  
  async function handleLogout(){
    try {
      console.log("handleSignOut: signingout...")
      console.log("handleSignOut.userSelector: ", userSelector.authStatus)
      await signOut();
      setIsLogin((prev) => prev = false);
      setUserData((prev) => prev = []);
      setIsLoading((prev) => prev = true)
      // await signOut({ global: true }); //signout of all devices
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  
  
  async function currentSession() {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
      setDataAccess(accessToken)
      setUserAccess(accessToken.payload.token_use)
      accessToken.payload.token_use && handleSetLogin(idToken, true)
    } catch (err) {
      console.log("Err: currentSession: ", err);
    }
  }
  
  useLayoutEffect(()=>{
    currentSession()
  },[])

  useEffect(() => {
    // Simulate some asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading((prev) => prev = false); // Set loading to false after the operation is complete
    }, 4000); // Simulating a 4-second loading time
    userAccess && (userAccess !== 'access' && handleLogout())
  }, [handleSetLogin,handleLogout, handleIsSignUp]);


  return (
    <Authenticator.Provider>
      <NativeBaseProvider >
        <NavigationContainer>
          { isLoading ? <LoadingScreen login={isLogin} /> : (
                  !isLogin ?  (
                  <View style={styles.container}>
                    { isSignUp ? <SignUp login={handleSetLogin} /> :
                      <Login login={handleSetLogin} signup={handleIsSignUp} userData={userData} /> 
                    }
                      <StatusBar style="auto" />
                  </View>
                  ) : 
                    <UserDashboard userData={userData} onLogout={handleLogout} onLogin={handleSetLogin} isLogin={isLogin} isLoading={isLoading}/>
              )
          }
        </NavigationContainer>
      </NativeBaseProvider>
    </Authenticator.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
})

// const signUpConfig = {
//   header: 'Custom Sign Up',
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: 'Firstname',
//       key: 'firstname',
//       required: true,
//       displayOrder: 1,
//       type: 'string',
//     },
//     {
//       label: 'Lastname',
//       key: 'lasstname',
//       required: true,
//       displayOrder: 2,
//       type: 'string',
//     },
//     {
//       label: 'Email',
//       key: 'email',
//       required: true,
//       displayOrder: 3,
//       type: 'string',
//     },
//     {
//       label: 'Password',
//       key: 'password',
//       required: true,
//       displayOrder: 4,
//       type: 'string',
//     },
//     {
//       label: 'Confirm Password',
//       key: 'confirmpassword',
//       required: true,
//       displayOrder: 5,
//       type: 'string',
//     },
//   ]
// }

export default App