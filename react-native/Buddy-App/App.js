
import React, { useState, useEffect } from 'react';
import UserDashboard from './components/Dashboard/UserDashBoard';
import LoadingScreen from './components/Loading/LoadingScreen';
import { View, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Login from './components/Login/Login'
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SignUp from './components/SignUp/SignUp';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState();
  const [isSignUp, setIsSignUp] = useState(false)


  useEffect(() => {
    // Simulate some asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after the operation is complete
    }, 4000); // Simulating a 4-second loading time
  }, [handleSetLogin,handleLogout, handleIsSignUp]);

  function handleSetLogin(data) {
    setIsLogin(true)
    setUserData(data)
    setIsLoading(true)
    setIsSignUp(false)
  }

  function handleIsSignUp(bool) {
    setIsSignUp(bool)
    setIsLoading(true)
  }

  function handleLogout(){
    setIsLogin(false);
    setUserData([]);
    setIsLoading(true)
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider >
        <NavigationContainer>
          { isLoading ? <LoadingScreen login={isLogin} /> : (
                  !isLogin ?  (
                  <View style={styles.container}>

                      <Login login={handleSetLogin} signup={handleIsSignUp} /> 

                      <StatusBar style="auto" />
                  </View>
                  ) : 
                    <UserDashboard userData={userData} onLogout={handleLogout} onLogin={handleSetLogin} isLogin={isLogin} isLoading={isLoading}/>
                  
              )
          }
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
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
