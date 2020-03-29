import React, { useState, useEffect } from "react";
import { Input } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Button,
  Image
} from "react-native";

export default function RegisterEmail({ navigation }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    nomeCompleto: "",
    cpf: "",
    telefone: ""
  });
  const [errosForm, setErrosForm] = useState({
    username: "",
    password: "",
    nomeCompleto: "",
    cpf: "",
    telefone: "",
    emailConfirm: "",
    passwordConfirm: "",
    responseError: ""
  });
  const [senhaForm, setSenhaForm] = useState({
    password: "",
    passwordConfirm: ""
  });
  const [emailForm, setEmailForm] = useState({ email: "", emailConfirm: "" });
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const validateForm = () => {
    const newValues = { ...form };
    var retorno = true;
    if (emailForm.email == "") {
      setErrosForm(prevState => {
        return { ...prevState, username: "E-Mail invalido" };
      });
      retorno = false;
    } else if (emailForm.email != emailForm.emailConfirm) {
      setErrosForm(prevState => {
        return { ...prevState, emailConfirm: "E-Mails não sao iguais" };
      });
      retorno = false;
    } else {
      newValues.username = emailForm.email;
      setErrosForm(prevState => {
        return { ...prevState, username: "" };
      });
      setErrosForm(prevState => {
        return { ...prevState, emailConfirm: "" };
      });
    }

    if (senhaForm.password == "") {
      setErrosForm(prevState => {
        return { ...prevState, password: "Senha invalida" };
      });
      retorno = false;
    } else if (senhaForm.password != senhaForm.passwordConfirm) {
      setErrosForm(prevState => {
        return { ...prevState, passwordConfirm: "Senhas não sao iguais" };
      });
      retorno = false;
    } else {
      newValues.password = senhaForm.password;
      console.log("asdasdas" + JSON.stringify(newValues));
      setErrosForm(prevState => {
        return { ...prevState, password: "" };
      });
      setErrosForm(prevState => {
        return { ...prevState, passwordConfirm: "" };
      });
    }

    if (form.nomeCompleto == "") {
      setErrosForm(prevState => {
        return { ...prevState, nomeCompleto: "Nome invalido" };
      });
      retorno = false;
    } else
      setErrosForm(prevState => {
        return { ...prevState, nomeCompleto: "" };
      });

    if (form.cpf == "") {
      setErrosForm(prevState => {
        return { ...prevState, cpf: "CPF invalido" };
      });
      retorno = false;
    } else
      setErrosForm(prevState => {
        return { ...prevState, cpf: "" };
      });

    if (form.telefone == "") {
      setErrosForm(prevState => {
        return { ...prevState, telefone: "Telefone invalido" };
      });
      retorno = false;
    } else
      setErrosForm(prevState => {
        return { ...prevState, telefone: "" };
      });

    setForm(newValues);
    if (retorno) {
      return newValues;
    }
    return retorno;
  };

  const cadastrar = () => {
    var formPost = validateForm();
    if (formPost !== false) {
      console.log(JSON.stringify(formPost));
      fetch("https://localhost:5001/api/auth/register", {
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
          throw new Error("HTTP status " + response.status);
        } else {
          setErrosForm(prevState => {
            return { ...prevState, responseError: "Erro no sistema" };
          });
        }
      });
    }
  };

  return (
    <View style={[styles.MainDiv]}>
      <Text>{JSON.stringify(form)}</Text>
      <Text>{errosForm.responseError}</Text>
      <Input
        containerStyle={[styles.Input]}
        placeholder="Nome Completo"
        errorMessage={errosForm.nomeCompleto}
        onChangeText={text => {
          const val = text;
          setForm(prevState => {
            return { ...prevState, nomeCompleto: val };
          });
        }}
      />
      <Input
        containerStyle={[styles.Input]}
        placeholder="CPF"
        errorMessage={errosForm.cpf}
        onChangeText={text => {
          const val = text;
          setForm(prevState => {
            return { ...prevState, cpf: val };
          });
        }}
      />
      <Input
        containerStyle={[styles.Input]}
        placeholder="Telefone"
        errorMessage={errosForm.telefone}
        onChangeText={text => {
          const val = text;
          setForm(prevState => {
            return { ...prevState, telefone: val };
          });
        }}
      />
      <Input
        containerStyle={[styles.Input]}
        placeholder="E-mail"
        errorMessage={errosForm.username}
        onChangeText={text => {
          const val = text;
          setEmailForm(prevState => {
            return { ...prevState, email: val };
          });
        }}
      />
      <Input
        containerStyle={[styles.Input]}
        placeholder="Confirme email"
        errorMessage={errosForm.emailConfirm}
        onChangeText={text => {
          const val = text;
          setEmailForm(prevState => {
            return { ...prevState, emailConfirm: val };
          });
        }}
      />
      <Input
        containerStyle={[styles.Input]}
        placeholder="Senha"
        errorMessage={errosForm.password}
        onChangeText={text => {
          const val = text;
          setSenhaForm(prevState => {
            return { ...prevState, password: val };
          });
        }}
      />
      <Text>
        Crie uma senha com no minimo 4 caracteres, ela será solicitada sempre
        que acessar seu APP.
      </Text>
      <Input
        containerStyle={[styles.Input]}
        placeholder="Confirme senha"
        errorMessage={errosForm.passwordConfirm}
        onChangeText={text => {
          const val = text;
          setSenhaForm(prevState => {
            return { ...prevState, passwordConfirm: val };
          });
        }}
      />
      <View style={[styles.Row, { flex: 2 }]}>
        <View style={[styles.SwitchContainer, styles.Row]}>
          <View style={[styles.SwitchButtonContainer]}>
            <Switch
              trackColor={{ false: "#F0F0F0", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={[styles.SwitchTextContainer]}>
            <Text>Li e aceito os Termos de Uso</Text>
          </View>
        </View>
      </View>
      <View style={[styles.Button]}>
        <Button title="CRIE SUA CONTA" color="#0000be" onPress={cadastrar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainDiv: {
    flex: 1,
    backgroundColor: "white",
    padding: 15
  },
  Input: {
    flexDirection: "column",
    backgroundColor: "#F0F0F0",
    marginTop: 30
  },
  Column: {
    flex: 1,
    flexDirection: "column"
  },
  Row: {
    flex: 1,
    flexDirection: "row"
  },
  Button: {
    flex: 1
  },
  SwitchContainer: {
    padding: 30
  },
  SwitchButtonContainer: {
    flex: 1
  },
  SwitchTextContainer: {
    flex: 5
  }
});
