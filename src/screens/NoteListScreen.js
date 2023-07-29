import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const gradientColors = ['#4e54c8', '#8f94fb'];

const NoteListScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Load notes from AsyncStorage when the component mounts
    loadNotes();
  }, []);

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

  const renderNoteItem = ({ item }) => (
    <TouchableOpacity style={styles.noteItem} onPress={() => navigation.navigate('AddNote', { note: item })}>
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
