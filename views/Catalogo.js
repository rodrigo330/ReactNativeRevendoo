import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, ScrollView, Modal, TouchableHighlight } from "react-native";
import { Icon } from 'react-native-elements'




export default function Catalogo({ navigation }, props) {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/marcas", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        //console.log(JSON.stringify(responseJson));
        setData(responseJson);
      });
  });

  const renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity style={styles.item} onPress={() => console.log(item)}>
        <Text style={styles.itemText}>{item.nome}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView >
        <FlatList
          data={formatData(data, 2)}
          style={styles.container}
          renderItem={renderItem}
          numColumns={2}
        />
      </ScrollView >
      <TouchableOpacity style={styles.registerMarcaButton} onPress={() => navigation.navigate("CadastrarMarca")}>
        <Icon name={"add"}  size={30} color="#01a699" />
      </TouchableOpacity>
    </View>
    
  );





  
}




const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 2, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: 'black',
  },
  registerMarcaButton:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:Dimensions.get('window').width/7,
    height:Dimensions.get('window').width/7,
    backgroundColor:'#fff',
    borderRadius:50,
    position: 'absolute',
    bottom:Dimensions.get('window').width*0.05,
    left: Dimensions.get('window').width*0.80,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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