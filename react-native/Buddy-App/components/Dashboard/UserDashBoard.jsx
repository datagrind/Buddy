// UserDashboard.js

import { useNavigation } from '@react-navigation/native';
import { View, Image, Platform, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from '../Sidebar/Sidebar';
import appSettings from '../Settings/Settings';
import NoPhotoProfile from '../Profile/NoPhotoProfile';
import Profile from '../Profile/Profile';
import SignUp from '../SignUp/SignUp'
import Onboarding1 from '../Onboarding/Onboarding1';
import BottomTabNavigator from '../Navigation/BottomTabNavigator';
import ProfileDetails from '../Profile/ProfileDetails';
import Account from '../Settings/Account';
import ContactSupport from '../Settings/ContactSupport'
import TermConditions from '../Settings/TermConditions'
import SecurityPrivacy from '../Settings/SecurityPrivacy'
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import { useEffect, useState, useLayoutEffect } from 'react';
import PrivacyPolicy from '../Settings/PrivacyPolicy';


const isIos = Platform.OS === 'ios';
 
const Drawer = createDrawerNavigator();

const UserDashboard = ({ onLogout, userData }) => {

  const [dataToken, setDataToken] = useState()
  const [dataAccess, setDataAccess] = useState()
  const [userAccess, setUserAccess] = useState()

  // console.log(" accessToken : ",  dataAccess && dataAccess)
  // console.log(" idToken: ", dataToken && dataToken)
  // console.log(" userAccess: ", userAccess && userAccess )
  // console.log("Userdashboard.userData: ", userData)

  function handleSignOut() {
      onLogout()
  }

  // async function currentAuthenticatedUser() {

  //   try {
  //     const { username, userId, signInDetails } = await getCurrentUser();
  //     console.log(`The username: ${username}`);
  //     console.log(`The userId: ${userId}`);
  //     console.log(`The signInDetails: ${signInDetails}`,JSON.stringify(signInDetails));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function currentSession() {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
      setDataToken(idToken)
      setDataAccess(accessToken)
      setUserAccess(accessToken.payload.token_use)
    } catch (err) {
      console.log("Err: currentSession: ", err);
    }
  }
  
  useLayoutEffect(()=>{
    // currentAuthenticatedUser()
    currentSession()
  },[])
  
  useEffect(()=>{
    userAccess && (userAccess !== 'access' && handleSignOut())
  },[])
  

  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('Profile', { data:  dataToken && dataToken });
  };
  
   
  return (   
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} userData={dataToken && dataToken} onLogout={onLogout} />}
      gestureEnabled={false}
      screenOptions={{
        headerTitle: () => null,
        headerTitleAlign: 'center',
        headerStyle: {
          height: isIos ? 100 : 125,
        },
        headerTransparent: 'transparent',
        headerRight: () => (
          <TouchableOpacity onPress={navigateToProfile}>
            <NoPhotoProfile factor='small' />
          </TouchableOpacity>
        ),

        
      }}
    >
      <Drawer.Screen name='Dashboard' component={BottomTabNavigator} />
      <Drawer.Screen name='Settings' component={appSettings} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Sign Up' component={SignUp} />
      <Drawer.Screen name='Onboarding' component={Onboarding1} />
      <Drawer.Screen name='ProfileDetails' component={ProfileDetails} />
      <Drawer.Screen name='Account' component={Account} />
      <Drawer.Screen name='ContactSupport' component={ContactSupport} />
      <Drawer.Screen name='TermsConditions' component={TermConditions} />
      <Drawer.Screen name='SecurityPrivacy' component={SecurityPrivacy} />
      <Drawer.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
    </Drawer.Navigator> 
  );
};

export default UserDashboard;
