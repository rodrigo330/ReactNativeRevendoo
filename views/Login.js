import React, { useState, useEffect } from "react";
import { Input } from "react-native-elements";
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  AsyncStorage
} from "react-native";

import { AuthContext } from "../Context";

export default function Login({ navigation }) {
  const { signIn } = React.useContext(AuthContext);

  const [count, setCount] = useState();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });

  const _storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
    }
  }

  const _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      console.log(value);
      return value;
    } catch (error) {
      // Error retrieving data
    }
  };

  const login = () => {
    axios.post("https://localhost:5001/api/auth/login", loginInfo).then(function (response) {
      if(response.status === 200){
        _storeData('token', JSON.stringify(response.data.token));
        _retrieveData('token');
        signIn();
      }else{
        setCount("asdf");
      }
    });
  };

  return (
    <View style={[styles.Column]}>
      <Text>{JSON.stringify(count)}</Text>
      <View style={{ flex: 2 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ width: 125, height: 27, margin: 10 }}
            source={require("../img/logo.png")}
          />
          <Text style={{ color: "purple" }}>
            Sua melhor ferramenta de vendas
          </Text>
        </View>
      </View>
      <View style={{ flex: 6, margin: 40 }}>
        <View style={[styles.Button]}>
          <Input
            containerStyle={[styles.Input]}
            placeholder="E-Mail"
            onChangeText={text => {
              const val = text;
              setLoginInfo(prevState => {
                return { ...prevState, username: val };
              });
            }}
          />
        </View>
        <View style={[styles.Button]}>
          <Input
            containerStyle={[styles.Input]}
            placeholder="Senha"
            onChangeText={text => {
              const val = text;
              setLoginInfo(prevState => {
                return { ...prevState, password: val };
              });
            }}
          />
        </View>
        <View style={[styles.Button]}>
          <Button title="ENTRAR" color="#0000be" onPress={login} />
        </View>
        <View style={[styles.Button]}>
          <Button title="ESQUECI MINHA SENHA" color="#0000be" onPress={function ()  {_storeData("token", true)} }/>
        </View>
        <View style={[styles.Button]}>
          <Button title="CADASTRAR COM E-MAIL" color="#0000be" onPress={function ()  {_storeData("token", false)}} />
        </View>
      </View>
      <View style={{ flex: 4 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  Column: {
    flex: 1,
    flexDirection: "column"
  },
  Button: {
    marginTop: 15
  }
});
