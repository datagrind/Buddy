// Sidebar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import SignOutButton from '../UI/SignOut/SignOutButton';

const userSelector = (context) => [context.user];

const Sidebar = ({ navigation, userData, onLogout }) => {

  console.log("Sidebar.userData: ", userData)
  const { user, signOut } = useAuthenticator(userSelector);

  return (
    <View style={styles.container} icon={({ focused, size }) => (
      <MaterialCommunityIcons
        name={focused ? 'menu' : 'menu-outline'}
        size={size + 20} // Adjust the size as needed
        color={focused ? 'blue' : 'black'}
      />
    )}>
      <Text style={styles.username}>Hello, {userData[0]} {userData[1]}!</Text>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Dashboard')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile', {data: userData})}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate( 'Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
      {/* Add more menu items as needed */}
      
      {/* <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity> */}
      <SignOutButton userData={userData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    marginBottom: 20,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    textAlign: 'left',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'red',
    padding: 15,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Sidebar;
