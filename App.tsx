//For navigation and async storage handling

//npm install @react-navigation/native @react-navigation/stack @react-native-async-storage/async-storage

//npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NoteListScreen from './src/screens/NoteListScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NoteList">
        <Stack.Screen name="NoteList" component={NoteListScreen} options={{ title: 'Note List' }} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} options={{ title: 'Add Note' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
