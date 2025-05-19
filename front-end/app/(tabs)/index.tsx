import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity,
  useColorScheme, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Modal, Platform
} from 'react-native';



import MaisInfor from '../../components/MaisInfor';
import SelectPeople from '../../components/SelectPeople';

export default function HomeScreen() {

  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const [mostrarView, setMostrarView] = useState(false);

  const [dados, setDados] = useState([]);

  const [linha, setLinha] = useState([]);


  useEffect(() => {
    fetch('http://192.168.18.11:8080/api/fixa') // use o IP local da sua máquina
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.log(err));
  }, []);




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
              placeholderTextColor={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
              style={[styles.input, { borderBottomColor: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,1)', color: isDarkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)' }]}
            />

          </View>
        </View>




        <View style={styles.main}>



          <View style={styles.fixa}>


            {dados.map((item, index) => {

              return (

                <View key={index}>
                  <TouchableOpacity onPress={() => { setMostrarView(true); setLinha(item) }} style={[styles.infor, { backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }]}>

                    <SelectPeople dado={item} />

                  </TouchableOpacity>
                </View>
              );
            })}





          </View>




          {/* {mostrarView && (
            <MaisInfor />
          )} */}





        </View>


      </ScrollView >


    </View >

    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     Keyboard.dismiss(); // Fecha o teclado
    //     setMostrarView(false); // Fecha o componente
    //   }}
    // >

    // </TouchableWithoutFeedback>



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

});
