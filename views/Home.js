import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={[styles.Column]}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 3,  margin: 10 }}>
        <View style={[styles.Row]}>
          <View style={[styles.ButtonWrapper]}>
            <TouchableOpacity style={[styles.MainButton, styles.Button]}>
              <View>
                <Text style={[styles.ButtonTittle, styles.ButtonMainTittle]}>
                  VENDAS
                </Text>
                <Text style={[styles.ButtonTittle, styles.ButtonSubTittle]}>
                  Registre suas Vendas e Consulte o Historico de Vendas
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.Row, { flex: 2 }]}>
          <View style={[styles.ButtonWrapper]}>
            <TouchableOpacity style={[styles.SubButton, styles.Button]}>
              <View>
                <Text style={[styles.ButtonTittle, styles.ButtonMainTittle]}>
                  ESTOQUE
                </Text>
                <Text style={[styles.ButtonTittle, styles.ButtonSubTittle]}>
                  Atualize, gerencie e veja a lista de produtos vendidos a serem
                  repostos
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.ButtonWrapper]}>
            <TouchableOpacity style={[styles.SubButton, styles.Button]}>
              <View>
                <Text style={[styles.ButtonTittle, styles.ButtonMainTittle]}>
                  CLIENTES
                </Text>
                <Text style={[styles.ButtonTittle, styles.ButtonSubTittle]}>
                  Consulte, cadastre e veja dicas sobre clientes
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.Row, { flex: 2 }]}>
          <View style={[styles.ButtonWrapper]}>
            <TouchableOpacity style={[styles.SubButton, styles.Button]}>
              <View>
                <Text style={[styles.ButtonTittle, styles.ButtonMainTittle]}>
                  CATÁLOGOS
                </Text>
                <Text style={[styles.ButtonTittle, styles.ButtonSubTittle]}>
                  Consulte catalogos das principais marcas
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.ButtonWrapper]}>
            <TouchableOpacity style={[styles.SubButton, styles.Button]}>
              <View>
                <Text style={[styles.ButtonTittle, styles.ButtonMainTittle]}>
                  RESUMO FINANCEIRO
                </Text>
                <Text style={[styles.ButtonTittle, styles.ButtonSubTittle]}>
                  Acompanhe a evolução das suas receitas e despesas
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  Column: {
    flex: 1,
    flexDirection: "column"
  },
  Row: {
    flex: 1,
    flexDirection: "row"
  },
  ButtonTittle: {
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 5
  },
  ButtonMainTittle: {
    fontSize: 15
  },
  ButtonSubTittle: {
    fontSize: 10
  },
  ButtonWrapper: {
    flex: 1,
    margin: 5
  },
  MainButtonWrapperHeight: {
    flex: 1
  },
  SubButtonWrapperHeight: {
    flex: 2
  },
  Button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  MainButton: {
    backgroundColor: "#4e8dd4"
  },
  SubButton: {
    backgroundColor: "#005dc7"
  },
  test: {
    backgroundColor: "#555555"
  }
});
