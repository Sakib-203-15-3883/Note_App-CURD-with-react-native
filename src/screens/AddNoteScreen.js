import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const gradientColors = ['#4e54c8', '#8f94fb'];

const AddNoteScreen = ({ route, navigation }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const { note } = route.params || {};

  useEffect(() => {
    if (note) {
      setNoteTitle(note.title);
      setNoteContent(note.content);
    }
  }, [note]);

  const saveNote = async () => {
    try {
      const newNote = { id: Date.now(), title: noteTitle, content: noteContent };
      if (note) {
        // Edit existing note
        const updatedNotes = (await AsyncStorage.getItem('notes')) || '[]';
        const parsedNotes = JSON.parse(updatedNotes);
        const index = parsedNotes.findIndex((item) => item.id === note.id);
        if (index !== -1) {
          parsedNotes[index] = newNote;
          await AsyncStorage.setItem('notes', JSON.stringify(parsedNotes));
        }
      } else {
        // Add new note
        const prevNotes = (await AsyncStorage.getItem('notes')) || '[]';
        const parsedPrevNotes = JSON.parse(prevNotes);
        const updatedNotes = JSON.stringify([...parsedPrevNotes, newNote]);
        await AsyncStorage.setItem('notes', updatedNotes);
      }
      navigation.goBack();
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter note title"
        value={noteTitle}
        onChangeText={setNoteTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter note content"
        value={noteContent}
        onChangeText={setNoteContent}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={saveNote}>
        <Text style={styles.saveButtonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginVertical: 8,
    fontSize: 18,
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  saveButtonText: {
    color: "black",
    fontSize: 18,
  },
});

export default AddNoteScreen;
