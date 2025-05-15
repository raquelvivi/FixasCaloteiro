import React, { useState } from 'react';
import {
  StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity,
  useColorScheme, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Modal,Platform
} from 'react-native';


import Row from '../../components/Row';
import MaisInfor from '../../components/MaisInfor';

export default function HomeScreen() {

  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const [mostrarView, setMostrarView] = useState(false);

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
                <MaisInfor />
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

            {/*criar outro componente com o que ta logo a baixo da linha */}
            <TouchableOpacity onPress={() => setMostrarView(true)} style={[styles.infor, { backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }]}>

              <Row label="Nome" valor="Larissa de Lavier" />
              <Row label="Apelido" valor="Irmã de nega" />
              <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Total" valor="200" />
                <Row label="Maximo" valor="150" />
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => setMostrarView(true)} style={[styles.infor, { backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }]}>
              <Row label="Nome" valor="Larissa de Lavier" />
              <Row label="Apelido" valor="Irmã de nega" />
              <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Total" valor="200" />
                <Row label="Maximo" valor="150" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMostrarView(true)} style={[styles.infor, { backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }]}>
              <Row label="Nome" valor="Larissa de Lavier" />
              <Row label="Apelido" valor="Irmã de nega" />
              <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Total" valor="200" />
                <Row label="Maximo" valor="150" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMostrarView(true)} style={[styles.infor, { backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }]}>
              <Row label="Nome" valor="Vivian Raquel Batista Dantas" />
              <Row label="Apelido" valor="Irmã de nega" />
              <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Total" valor="200" />
                <Row label="Maximo" valor="150" />
              </View>
            </TouchableOpacity>

          </View>




          {/* {mostrarView && (
            <MaisInfor />
          )} */}





        </View>


      </ScrollView >


    </View>

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
