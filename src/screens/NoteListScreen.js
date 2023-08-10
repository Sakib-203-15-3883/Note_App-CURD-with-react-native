import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert,Clipboard} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'; 
import LinearGradient from 'react-native-linear-gradient';

const gradientColors = ['#4e54c8', '#8f94fb'];

const NoteListScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  // Load notes from AsyncStorage when the component mounts
  useEffect(() => {
    // Load notes from AsyncStorage when the component mounts
    loadNotes();
  }, []);
 // Reload notes when the screen gains focus
  useFocusEffect(() => {
    loadNotes();
  });

  const loadNotes = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('notes');
      if (jsonValue !== null) {
        const storedNotes = JSON.parse(jsonValue);
        setNotes(storedNotes);
      }
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      // Show confirmation alert before deleting the note
      Alert.alert(
        'Delete Note',
        'Are you sure you want to delete this note?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: async () => {
              const updatedNotes = notes.filter((note) => note.id !== noteId);
              setNotes(updatedNotes);
              await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
            },
            style: 'destructive',
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
    Alert.alert('Copied to Clipboard', `The text "${text}" has been copied to the clipboard.`);
  };

  const renderNoteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.noteItem}
      onPress={() => navigation.navigate('AddNote', { note: item })}
      onLongPress={() => {
        Alert.alert(
          'Note Actions',
          'What do you want to do?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete',
              onPress: () => deleteNote(item.id),
              style: 'destructive',
            },
            
            {
              text: 'Copy Content',
              onPress: () => copyToClipboard(item.content),
            },
            
          ],
          { cancelable: true }
        );
      }} // Long press for actions: copy title, copy content, or delete
    >
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <View style={styles.container}>
        <FlatList
          data={notes}
          renderItem={renderNoteItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddNote')}>
          <Text style={styles.addButtonText}>Add Note</Text>
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
  noteItem: {
    backgroundColor: 'black',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default NoteListScreen;
