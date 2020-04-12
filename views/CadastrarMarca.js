import React, { Component, useState } from "react";
import { Input } from "react-native-elements";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button
} from "react-native";



const CadastrarMarca = ({ navigation }) => {
  const [formPost, setFormPost] = useState({});
  const [errosForm, setErrosForm] = useState({responseError: ""});


  const cadastrar = () => {
    console.log(JSON.stringify(formPost));
    fetch("http://localhost:5000/api/marcas", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formPost) //JSON.stringify(form)
    }).then(function(response) {
      console.log(JSON.stringify(response)); // Will show you the status
      console.log(response.status); // Will show you the status
      if (response.ok) {
        setErrosForm(prevState => {
          return { ...prevState, responseError: "" };
        });
        navigation.navigate("Catalogo")
      } else {
        setErrosForm(prevState => {
          return { ...prevState, responseError: "Erro no sistema" };
        });
      }
    });
  };


  return (
    <View  style={{ flex: 1 }}>
      <Text>{errosForm.responseError}</Text>
      <Text>
        Nome da marca:
      </Text>
      <Input
        onChangeText={text => {
          const val = text;
          setFormPost(prevState => {
            return { ...prevState, nome: val };
          });
        }}/>
      <Button title="Cadastrar Marca" color="#0000be" onPress={cadastrar}/>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default CadastrarMarca;
