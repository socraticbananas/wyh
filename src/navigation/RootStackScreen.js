import React from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import MainStackScreen from './MainStackScreen'


function MenuModal({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}


const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator mode='modal'>
    <RootStack.Screen
      name='Main'
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <RootStack.Screen name='MenuModal' component={MenuModal} />
  </RootStack.Navigator>
);

export default RootStackScreen
