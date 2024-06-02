import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity,Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import 'react-native-gesture-handler';

const EditBookScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { entry } = route.params;
  const [title, setTitle] = useState(entry.title);
  const [content, setContent] = useState(entry.content);

  const saveEntry = async () => {
    const updatedEntry = { ...entry, title, content };
    const storedEntries = await AsyncStorage.getItem('entries');
    const entries = storedEntries ? JSON.parse(storedEntries) : [];
    const updatedEntries = entries.map((e) => (e.id === entry.id ? updatedEntry : e));
    await AsyncStorage.setItem('entries', JSON.stringify(updatedEntries));
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
        <Text style={styles.buttonText}>Save Review</Text>
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
        borderColor: '#00AC5D',
        borderWidth: 2,
        padding: 8,
        marginBottom: 16,
        borderRadius: 8,
        color:'#fff'
      },
      contentInput: {
        height: 100,
        borderColor: '#00AC5D',
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

export default EditBookScreen;
