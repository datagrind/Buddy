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


const isIos = Platform.OS === 'ios';

const LogoHeader = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('../../assets/logo_white_background.jpg')}
        style={(isIos) ? { width: 75, height: 100, marginBottom: 10 } : { width: 75, height: 100 }}
      />
    </View>
  );
};

const Drawer = createDrawerNavigator();

const UserDashboard = ({ userData, onLogout }) => {


  console.log("UserDashboard.userData: ", userData)


  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('Profile', { data: userData });
  };
  
   
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} userData={userData} onLogout={onLogout} />}
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
    </Drawer.Navigator>
  );
};

export default UserDashboard;
