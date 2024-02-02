// UserDashboard.js
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Platform, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from '../Sidebar/Sidebar';
import BottomTabNavigator from '../Navigation/BottomTabNavigator';
import appSettings from '../Settings/Settings'
import NoPhotoProfile from '../Profile/NoPhotoProfile';
import Profile from '../Profile/Profile';


const isIos = Platform.OS === 'ios'


const DashboardScreen = () => {
  return (
    <>
      <BottomTabNavigator />
    </>
  );
};

const LogoHeader = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('../../assets/logo_white_background.jpg')}
        style={ (isIos) ? { width: 75, height: 100, marginBottom: 10} : { width: 75, height: 100}}
          // Adjust the width and height as needed
      />
    </View>
  )
}

const Drawer = createDrawerNavigator();

const UserDashboard = ({ username, onLogout }) => {
  const navigation = useNavigation()
  console.log(username, "UserDashBoard")
  // const navigation = useNavigation()
  // const renderSideBar = (props) => {
  //   return <Sidebar {...props} username={username} onLogout={onLogout} />
  // }
  return (
    <Drawer.Navigator 
      drawerContent={
        (props) => {
          return <Sidebar {...props} username={username} onLogout={onLogout} />
        }
      }
      screenOptions={{
          headerTitle: (props) => <LogoHeader {...props} />,
          headerTitleAlign: 'center',
          // headerLeft: (focused, size=50) => {
          //   return <Ionicons name={focused ? 'menu' : ''} size={size} onPress={()=>{renderSideBar}}/>
          // },
          headerStyle: {
            height: isIos ? 140 : 125, // Adjust the height as needed
          },
          // headerRight: (props) => {return <NavigateToProfile {...props} />},
          headerRight: () => <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <NoPhotoProfile factor='small'/>
          </TouchableOpacity>
      }}
    >
        <Drawer.Screen name='Dashboard' component={DashboardScreen}/> 
        <Drawer.Screen name='Settings' component={appSettings} /> 
        <Drawer.Screen name='Profile' component={Profile} />  
    </Drawer.Navigator>
  );
};

// const styles = StyleSheet.create({
// });

export default UserDashboard;
