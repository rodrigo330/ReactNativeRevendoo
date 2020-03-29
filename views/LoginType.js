import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={[styles.Column]}>
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
          <Button
            title="ENTRAR COM FACEBOOK"
            color="#3b5998"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <View style={[styles.Button]}>
          <Button
            title="ENTRAR COM GOOGLE"
            color="#DB4437"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <View style={[styles.Button]}>
          <Button
            title="ENTRAR COM E-MAIL"
            color="#0000be"
            onPress={() => navigation.navigate("RegisterEmail")}
          />
        </View>
        <View style={[styles.Button]}>
          <Button
            title="JÁ SOU CADASTRADO"
            onPress={() => navigation.navigate("Login")}
          />
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
    flex: 1
  }
});
