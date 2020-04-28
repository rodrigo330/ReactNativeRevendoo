import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';
import LoginType from './views/LoginType';
import Catalogo from './views/Catalogo';
import Login from './views/Login';
import RegisterEmail from './views/RegisterEmail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';
import CadastrarMarca from './views/CadastrarMarca';

import { AuthContext } from "./Context";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const Stack = createStackNavigator();
const StackScreen  = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Catalogo" component={Catalogo} />
    <Stack.Screen name="CadastrarMarca" component={CadastrarMarca} />
  </Stack.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen  = () => (
  <AuthStack.Navigator initialRouteName="LoginType">
    <AuthStack.Screen name="LoginType" component={LoginType} />
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="RegisterEmail" component={RegisterEmail} />
  </AuthStack.Navigator>
);

export default () =>{
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        _retrieveData("token");
      },
      signUp: () => {
        _retrieveData("token");
        console.log(userToken);
      },
      signOut: () => {
        AsyncStorage.removeItem("token");
        setUserToken(null);
      }
    };
  }, []);

  let _retrieveData =  async (key) => {
    let value = await AsyncStorage.getItem(key);
    setUserToken(value);
  }

  _retrieveData("token");
    
  return (
    <View style={[styles.container]}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken ? <StackScreen /> : <AuthStackScreen />}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
