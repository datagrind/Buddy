import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const AboutMe = ({ initialValue, aboutMeEdit, handleEdit, setAboutMe }) => {
  const [text, setText] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(aboutMeEdit);

  console.log("AboutMe.isEditing", isEditing)

  const handleSaveClick = () => {
    setIsEditing((prev) => prev = !aboutMeEdit);
    handleEdit(setAboutMe, false)
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            onBlur={handleSaveClick}
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
    paddingHorizontal: 10,
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
