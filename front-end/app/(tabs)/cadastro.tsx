import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, TextInput, Text, 
  useColorScheme, Button, Alert
} from 'react-native';



import MaisInfor from '../../components/MaisInfor';
import SelectPeople from '../../components/SelectPeople';

export default function HomeScreen() {

  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [creditomax, setCreditomax] = useState("");
  const [bairro, setBairro] = useState("");
  const [datapaga, setDatapaga] = useState("");

  const [dados, setDados] = useState([]);


  const Form = async () => {

    if(nome && apelido && logradouro && numero && creditomax && bairro && datapaga){
      

      try {
        const resposta = await fetch('http://192.168.18.11:8080/api/fixa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nome, apelido, logradouro,numero,creditomax, bairro, datapaga })
        });
    
        setDados(await resposta.json());
    
        if (dados){
          console.log("cadastrado com sucesso")
        }
    
      }
      catch (erro){
        Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
        console.error(erro);
      }


    }else{
      console.log ("preencha todos os campos")
    }

  }


  return (

    <View>

      <Text style={[styles.h1, { color: isDarkMode ? '#fff' : '#000' }]}>Cadastro</Text>

      <View style={styles.Conteine}>

        

        <View style={styles.row}>

          <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Nome:</Text>

          <TextInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
            style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}

          />

        </View>
        <View style={styles.row}>

          <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Apelido:</Text>

          <TextInput
            placeholder="qual é seu apelido"
            value={apelido}
            onChangeText={setApelido}
            placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
            style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}

          />

        </View>
        <View style={styles.row}>

          <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Endereço:</Text>

          <TextInput
            placeholder="digite seu endereço"
            value={logradouro}
            onChangeText={setLogradouro}
            placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
            style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}

          />

        </View>
        <View style={styles.row}>

          <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Numero:</Text>

          <TextInput
            placeholder="Numero"
            value={numero}
            onChangeText={setNumero}
            keyboardType="numeric"
            placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
            style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}

          />

        </View>
        <View style={styles.row}>

          <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Credito max:</Text>

          <TextInput
            placeholder="Credito"
            value={creditomax}
            onChangeText={setCreditomax}
            keyboardType="numeric"
            placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
            style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}

          />

        </View>
        <View style={styles.row}>

          <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Bairro:</Text>

          <TextInput
            placeholder="Bairro"
            value={bairro}
            onChangeText={setBairro}
            placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
            style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}

          />

        </View>
        <View style={styles.row}>

          <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Pagamento:</Text>

          <TextInput
            placeholder="Apenas o Dia"
            value={datapaga}
            onChangeText={setDatapaga}
            keyboardType="numeric"
            placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
            style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}

          />

        </View>

        <Button title= "Enviar" onPress={Form} />

      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  Conteine: {
    marginTop: 50,
    backgroundColor: "#171616",
    margin:10,
    padding: 25,
    borderRadius: 20,

  },

  input: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: 200,
    textAlign: 'center',
    height: 50,
    fontSize: 15,


  },
  label: {
    marginRight: 8,
    fontSize: 15,
  },
  h1:{
    marginTop: 70 ,
    textAlign: 'center',
    fontSize: 25,
  },
  row: {
    flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
    alignItems: 'center',
  }


});
