import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import 'react-native-gesture-handler';
import ListScreen from '../screens/ListScreen';
import EditBookScreen from '../screens/EditBookScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AddBookScreen from '../screens/AddBookScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddBook" component={AddBookScreen} />
        <Stack.Screen name="Detail" component={ListScreen} />
        <Stack.Screen name="EditBook" component={EditBookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
