import React from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

function InfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        onPress={() => navigation.navigate('MenuModal')}
        title="Open Menu"
      />
    </View>
  );
}

const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name='InfoScreen'
      component={InfoScreen}
      options={{title: 'Info'}}
    />
    {/* <MainStack.Screen 
      name='MenuModal'
      component={MenuModal}
      options={{title: 'Menu'}} 
    />
    <MainStack.Screen 
      name=''
      component={}
      options={{title: ''}} 
    />
    <MainStack.Screen 
      name=''
      component={}
      options={{title: ''}} 
    /> */}
  </MainStack.Navigator>
);

export default MainStackScreen
