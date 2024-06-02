import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';

const AddBookScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigation = useNavigation();

  const saveEntry = async () => {
    const newEntry = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };

    const storedEntries = await AsyncStorage.getItem('entries');
    const entries = storedEntries ? JSON.parse(storedEntries) : [];
    entries.push(newEntry);
    await AsyncStorage.setItem('entries', JSON.stringify(entries));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      
      <TextInput
        style={styles.contentInput}
        placeholder="Review"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={saveEntry}>
        <Text style={styles.buttonText}>Add Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1C1C1C',
  },
  titleInput: {
    height: 40,
    borderColor: '#05D173',
    borderWidth: 2,
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
    color:'#fff'
  },
  contentInput: {
    height: 100,
    borderColor: '#05D173',
    borderWidth: 1,
    padding: 8,
    textAlignVertical: 'top',
    borderRadius: 8,
    marginBottom: 16,
    color:'#fff'
  },
  button: {
    backgroundColor: '#23714D',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default AddBookScreen;
