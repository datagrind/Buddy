import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const AboutMe = ({ initialValue, aboutMeEdit, setAboutMe }) => {
  const [text, setText] = useState(initialValue);

  const handleSaveClick = () => {
    setAboutMe(false)
  };

  const handleKeyPress = (event) => {
    if (event.nativeEvent.key === 'Enter') {
      setText(text + '\n');
    }
  };

  return (
    <View style={styles.container}>
      {aboutMeEdit ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            onBlur={handleSaveClick}
            onKeyPress={handleKeyPress}
            multiline={true}
            autoFocus
          />
          <TouchableOpacity onPress={handleSaveClick}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
          <Text style={styles.text}>{text}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    minHeight: 50, // Set a minimum height to ensure multiple lines are visible
  },
  saveButton: {
    marginLeft: 10,
    color: 'blue',
  },
  text: {
    fontSize: 16,
  },
});

export default AboutMe;