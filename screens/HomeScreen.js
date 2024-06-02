import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchEntries = async () => {
    const storedEntries = await AsyncStorage.getItem('entries');
    if (storedEntries) setEntries(JSON.parse(storedEntries));
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchEntries().then(() => setRefreshing(false));
  }, []);

  const deleteEntry = async (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    await AsyncStorage.setItem('entries', JSON.stringify(updatedEntries));
  };

  const renderEntry = ({ item }) => (
    <View style={styles.entryContainer}>
      <TouchableOpacity
        style={styles.entry}
        onPress={() => navigation.navigate('Detail', { entry: item })}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteEntry(item.id)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <Image source={require('../images/home.png')} resizeMode='contain' style={styles.image} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderEntry}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddBook')}>
        <Text style={styles.addButtonText}>Add New Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:45,
    backgroundColor: '#1C1C1C',
  },
  entryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: '#fff',
    height:45,
  },
  entry: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: 'red',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height:35,
    marginRight:3,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center'
  },
  addButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#23714D',
    alignItems: 'center',
    marginBottom: 30,
    width:300,
    alignSelf:"center"
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  image:{
    width: 100,
    height: 100,
    marginBottom: 30,
    alignSelf:'center',
    marginTop: 40,

  }
});

export default HomeScreen;
