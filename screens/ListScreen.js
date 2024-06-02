import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import 'react-native-gesture-handler';

const ListScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { entry } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.date}>{entry.date}</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{entry.title}</Text>
        </View>
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.content}>{entry.content}</Text>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditBook', { entry })}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentWrapper: {
    flex: 1,
    padding: 16,
  },
  date: {
    color: '#888',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#23714D',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListScreen;
