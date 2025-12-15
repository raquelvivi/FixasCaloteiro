import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity,
  useColorScheme, TouchableWithoutFeedback, KeyboardAvoidingView, Modal, Platform
} from 'react-native';



import MaisInfor from '../../components/MaisInfor';
import SelectPeople from '../../components/SelectPeople';
import { Pessoa, ip } from '../../types'

export const mudou = 0;



export default function HomeScreen() {

  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const branco = 'rgba(255, 255, 255, 0.57)'

  const [mostrarView, setMostrarView] = useState(false);
  const [dados, setDados] = useState<Pessoa[]>([]);
  const [linha, setLinha] = useState<Pessoa|null>(null);
  const [inputs, setInput] = useState("");
  const [result, setResult] = useState<Pessoa[]>([]);
  const [reset, setReset] = useState(0);

  const [loading, setLoading] = useState(true); // tela de carregamento


  // Pesquisa no banco as Fixas
  useEffect(() => {
    fetch(`http://${ip}:8080/api/fixa`) //${ip}
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDados(data); //dados e result recebem as fixas
          setResult(data);
        } else if (data) {
          setDados([data]); // transforma objeto único em array
        } else {
          setDados([]); // nada encontrado
        }
      })
      .catch((err) => {
        console.log("Erro no fetch:", err);
        setDados([]);
      });
  });

  // pesquisa de fixas no input
  useEffect(() => {
    const delayDebounce = setTimeout(() => {

      if (inputs.length >= 3) { // So busca no banco se for digitado 3 ou mais letras
        pesquisa(inputs); // Chama a função pesquisa para pesquisar por fixas com o nome x
      }else if (inputs == "" && result.length > 1) {
        setDados(result)
      }
    }, 500); // debounce de 500ms para evitar várias requisições

    return () => clearTimeout(delayDebounce); // limpa o timeout se o texto mudar antes dos 500ms
  }, [inputs]);



  // Pesquisa fixa por nome no banco de dados
  const pesquisa = async (nome = '') => {

    try {
      const response = await fetch(`http://${ip}:8080/api/fixa/${nome}`);
      const data:Pessoa[] = await response.json();
      if (Array.isArray(data)) {
        setDados(data);
      } else if (data) {
        setDados([data]);
      } else {
        setDados([]);
      }
      
    } catch (error) {
      console.error('Erro na busca:', error);
      setDados([]);
    }
  };

  


  return (

    <View >

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
              placeholderTextColor={isDarkMode ? branco : 'rgba(0, 0, 0, 0.6)'}
              style={[styles.input, { borderBottomColor: isDarkMode ? branco : 'rgba(0,0,0,1)', color: isDarkMode ? '#fff' : 'rgba(0, 0, 0, 1)' }]}

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
                <TouchableOpacity onPress={() => { setMostrarView(true); setLinha(item) }} style={[styles.infor, { backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', borderColor: isDarkMode ? branco : 'rgba(0, 0, 0, 0.47)'  }]}>

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
    
    borderWidth: 2,

  },
  fixa: {
    display: 'flex',
  
  },

  texto: {
    margin: 35
  }

});
