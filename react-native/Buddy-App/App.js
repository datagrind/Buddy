
import React, { useState, useEffect } from 'react';
import UserDashboard from './components/Dashboard/UserDashBoard';
import LoadingScreen from './components/Loading/LoadingScreen';
import { View, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Login from './components/Login/Login'
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import theme from './components/UI/Fonts/Font';
import { Box } from 'native-base';
import MainScreen from './components/MainScreen/MainScreen';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');


  useEffect(() => {
    // Simulate some asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after the operation is complete
    }, 4000); // Simulating a 4-second loading time
  }, [handleSetLogin,handleLogout]);

  function handleSetLogin(name) {
    setIsLogin(true)
    setUsername(name)
    setIsLoading(true)
  }

  function handleLogout(){
    setIsLogin(false);
    setUsername('');
    setIsLoading(true)
  };

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <LoadingScreen login={isLogin} /> ;
  }

  return (
    <NativeBaseProvider theme={theme}>
      { isLoading ? <LoadingScreen login={isLogin} /> : (
            <>
              { !isLogin ? (
              <View style={styles.container}>
                  <Login login={handleSetLogin}/>
                  <StatusBar style="auto" />
              </View>
              ) : (
              <NavigationContainer>
                    {/* <MainScreen /> */}
                <UserDashboard username={username} onLogout={handleLogout} onLogin={handleSetLogin} isLogin={isLogin} isLoading={isLoading}/>
              </NavigationContainer>
                )
              }
            </>
          )
      }
    </NativeBaseProvider>
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
