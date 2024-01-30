
import React, { useState, useEffect } from 'react';
import UserDashboard from './components/Dashboard/UserDashBoard';
import LoadingScreen from './components/LoadingScreen';
import { View, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Login from './components/Login/Login'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Simulate some asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after the operation is complete
    }, 3000); // Simulating a 3-second loading time
  }, []);

  function handleSetLogin(name) {
    setIsLogin(true)
    setUsername(name)
  }

  function handleLogout(){
    setIsLogin(false);
    setUsername('');
  };


  return (
    <>
      {isLoading ? (
          <View style={styles.container}>
            <LoadingScreen />
          </View>
          ) : (
            <>
              { !isLogin ? (
              <View style={styles.container}>
                  <Login login={handleSetLogin}/>
                  <StatusBar style="auto" />
              </View>
              ) : (
              <NavigationContainer>
                <UserDashboard username={username} onLogout={handleLogout} onLogin={handleSetLogin} isLogin={isLogin} isLoading={isLoading}/>
              </NavigationContainer>
                )
              }
            </>
          )
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
