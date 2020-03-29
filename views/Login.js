import React, { useState, useEffect } from "react";
import { Input } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image
} from "react-native";

export default function Login({ navigation }) {
  const [count, setCount] = useState();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });
  const login = () => {
    fetch("https://localhost:5001/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
      .then(response => response.json())
      .then(responseJson => {
        setCount(responseJson); // your JSON response is here
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
          <Button title="ESQUECI MINHA SENHA" color="#0000be" onPress={login} />
        </View>
        <View style={[styles.Button]}>
          <Button title="CADASTRAR COM E-MAIL" color="#0000be" onPress={login} />
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
    flex: 1,
    marginTop: 70
  }
});
