import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { Spacer } from 'native-base';

const Account = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChangePassword = () => {
    // Implement password change logic here
    Alert.alert('Password Changed Successfully');
  };

  const handleUpdatePersonalInfo = () => {
    // Implement personal information update logic here
    Alert.alert('Personal Information Updated Successfully');
  };

  const handleRequestDeleteAccount = () => {
    Alert.alert(
      'Confirm Account Deletion',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: deleteAccount, style: 'destructive' },
      ]
    );
  };

  const deleteAccount = () => {
    // Implement account deletion logic here
    Alert.alert('Account Deletion Processed', 'Please allow 24-48 hours for deletion to process');
  };

  return (
    <View style={styles.container}>
        <Spacer height={125} />
        <Text style={styles.title}>Account Settings</Text>
        <ScrollView showsVerticalScrollIndicator={false} >
            <Text style={styles.sectionTitle}>Change Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Current Password"
                secureTextEntry
                value={currentPassword}
                onChangeText={setCurrentPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm New Password"
                secureTextEntry
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
            />
            <Button title="Change Password" onPress={handleChangePassword}  />

            <Text style={styles.sectionTitle}>Update Personal Information</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <Button title="Update Personal Info" onPress={handleUpdatePersonalInfo} />

            <Text style={styles.sectionTitle}>Request Account Deletion</Text>
            <Text style={styles.paragraph}>
                If you wish to delete your account, please click the button below. Note
                that this action is irreversible.
            </Text>
            <Button
                title="Request Account Deletion"
                onPress={handleRequestDeleteAccount}
            />
            <Spacer height={125} />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default Account;
