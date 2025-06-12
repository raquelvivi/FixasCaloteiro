import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity,
  useColorScheme, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Modal, Platform
} from 'react-native';



import MaisInfor from '../../components/MaisInfor';
import SelectPeople from '../../components/SelectPeople';
import { Pessoa } from '../../types'


export default function HomeScreen() {

  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const [mostrarView, setMostrarView] = useState(false);
  const [dados, setDados] = useState<Pessoa[]>([]);
  const [linha, setLinha] = useState<Pessoa|null>(null);
  const [inputs, setInput] = useState("");
  const [result, setResult] = useState([]);


  useEffect(() => {
    fetch('http://192.168.18.11:8080/api/fixa') // use o IP local da sua máquina
      .then((res) => res.json())
      .then((data:Pessoa[]) => setDados(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (inputs.length >= 3) {
        pesquisa(inputs); // Chama a função para buscar no banco
      }
    }, 500); // debounce de 500ms para evitar várias requisições

    return () => clearTimeout(delayDebounce); // limpa o timeout se o texto mudar antes dos 500ms
  }, [inputs]);


  const pesquisa = async (nome = '') => {

    try {
      // Exemplo de chamada para uma API ou banco de dados
      const response = await fetch(`http://192.168.18.11:8080/api/fixa/${nome}`);
      const data:Pessoa[] = await response.json();
      setDados(data);
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  };


  return (

    <View>

      <Modal
        visible={mostrarView}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMostrarView(false)} // para Android voltar
      >
        <TouchableWithoutFeedback onPress={() => setMostrarView(false)}>
          <View style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',


          }}>
            <TouchableWithoutFeedback onPress={() => { }}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              >
                <MaisInfor dado={linha} />
              </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>






      <ScrollView >
        <View style={styles.Conteine}>
          <View style={styles.cabecalho}>
            <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Nome:</Text>

            <TextInput
              placeholder="Nome"
              value={inputs}
              onChangeText={setInput}
              placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
              style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}

            />

          </View>
        </View>




        <View style={styles.main}>

          <View style={styles.fixa}>


            {dados.length == 0 ? (
              <Text style={[styles.texto,{ color: isDarkMode ? '#fff' : '#000' }]}>
                Não tem nenhuma pessoa com esse nome no banco de dados
              </Text>
            ) : (dados.map((item:Pessoa, index) => (

              <View key={index}>
                <TouchableOpacity onPress={() => { setMostrarView(true); setLinha(item) }} style={[styles.infor, { backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }]}>

                  <SelectPeople dado={item} />

                </TouchableOpacity>
              </View>
            ))
            )}





          </View>

        </View>

      </ScrollView >

    </View >



  );
}

const styles = StyleSheet.create({
  Conteine: {
    flex: 1,                      // Ocupa a tela toda
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
    marginBottom: '30%',

  },
  cabecalho: {

    flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
    alignItems: 'center',
    justifyContent: 'space-between',


  },
  label: {
    marginRight: 8,
    fontSize: 15,
  },

  input: {
    borderBottomWidth: 2,
    borderStyle: 'dotted',
    width: "55%",
    textAlign: 'center',
    height: 50,
    fontSize: 15,


  },
  main: {

  },
  infor: {
    padding: 10,
    borderRadius: 20,
    margin: 10,

  },
  fixa: {
    display: 'flex',
  },

  texto: {
    margin: 35
  }

});
