import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
  Linking,
  Platform,
} from "react-native";

import { Link, useRouter } from "expo-router";

import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get("window").width;

import { ip } from "../types";

export default function login() {
  const router = useRouter();
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const abrirWhatsApp = () => {
    const numero = '5584996035491';
    const mensagem = 'Olá, esqueci minha senha e preciso de ajuda';

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url);
  };

  const logar  = async () => {
    await fetch(`${ip}/api/mercado/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, senha }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data > 0) {

          AsyncStorage.setItem('usuarioId', data.toString());

          router.replace({
            pathname: '/(tabs)/home',
            params: { id: data}
          });

        }else{
          alert("Login ou senha incorretos.");
        }
        
      })

      .catch((error) => {
        alert("Login ou senha incorretos.");
        console.error("Erro ao fazer login:", error);
      });

  };

  return (
   <View style={styles.body} >
      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>LOGIN</Text>

      <View style={styles.inputGroup}>
        <View >
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              placeholder=""
              placeholderTextColor="#ffffff"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View >
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              selectTextOnFocus
              placeholder=""
              placeholderTextColor="#ffffff"
              value={senha}
              onChangeText={setSenha}
            />
          </View>

        </View>
        
      </View>

      <TouchableOpacity onPress={logar} style={[styles.button, { backgroundColor: isDarkMode ? '#5a595976' : '#c7c6c6a9'}]} >
          <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkBox} onPress={abrirWhatsApp}> 
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  // ... mantém o CSS exatamente como está, sem mudanças ...
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 40,
  },
  loginBox: {
    borderWidth: 1.5,
    borderColor: '#a6aca8',
    borderRadius: 10,
    padding: 20,
    width: screenWidth - 40,
    alignItems: 'flex-start',
    marginTop: 10,
    height: 250,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d0d7d2',
    alignSelf: 'center',
    marginBottom: 14,
  },
  inputGroup: {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  label: {
    fontSize: 16,
    color: '#d0d7d2',
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    fontSize: 16,
    paddingVertical: 2,
    color: '#ffffff',
    textTransform: 'lowercase'
  },
  linkBox: {
    backgroundColor: '#bcbcbc',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
  },
  link: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    borderWidth: 1.5,
    borderColor: '#ffffff',
    borderRadius: 6,
    paddingHorizontal: 60,
    paddingVertical: 8,
    borderStyle: 'solid',
  },
  buttonText: {
    color: '#c6c6c6',
    fontWeight: 'bold',
    fontSize: 16,
  },
  

});
