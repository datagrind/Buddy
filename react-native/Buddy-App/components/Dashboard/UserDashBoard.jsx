// UserDashboard.js
import React from 'react';
import { View, StyleSheet, Image, Platform, TouchableOpacity, useNavigation } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from '../Sidebar/Sidebar';
import BottomTabNavigator from '../Navigation/BottomTabNavigator';
import appSettings from '../Settings/Settings'
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import Profile from '../Profile/Profile';
import NoPhotoProfile from '../Profile/NoPhotoProfile';


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
  console.log(username, "UserDashBoard")
  // const navigation = useNavigation()
  // const renderSideBar = (props) => {
  //   return <Sidebar {...props} username={username} onLogout={onLogout} />
  // }
  // const NavigateToProfile = () => {
  //   return (
  //     <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
  //       <NoPhotoProfile />
  //   </TouchableOpacity>
  //   )
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
          headerRight: () => <NoPhotoProfile factor='smallCircle'/>
        }}
    >
        <Drawer.Screen name='Dashboard' component={DashboardScreen}/> 
        <Drawer.Screen name='Settings' component={appSettings} /> 
        {/* <Drawer.Screen name='Profile' component={Profile} />  */}
    </Drawer.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   content: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   menuButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   circle: {
//     width: 50,
//     height: 50,
//     border: 10,
//     borderColor: 'black',
//     borderRadius: 25, // Half of the width and height to make it a circle
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     marginRight: 20,
//   },
// });

export default UserDashboard;
