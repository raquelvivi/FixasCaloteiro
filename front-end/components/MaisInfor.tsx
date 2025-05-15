
import React from 'react';
import { View,Image, StyleSheet, useColorScheme } from 'react-native';
import Row from './Row';



export default function MaisInfor() {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';
    return (

        <View style={[styles.MaisInfor, { backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }]}>

            <View style={[styles.juntoImagem]}>

                <Image source={require('../assets/images/rosto.jpeg')} style={[styles.img]} />
                <View style={{ flexDirection: 'column' }}>
                    <Row label="Id" valor="550" />
                    <Row label="Apelido" valor="Irmã de nega do acentamento" />
                </View>
            </View>

            <Row label="Nome" valor="Vivian Raquel Batista dantas dos santos " />
            <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Endereco" valor="Rua Marcos Viana" />
                <Row label="N°" valor="5" />
            </View>
            <Row label="Add Compra" valor="Pagar" />
            <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Total" valor="200" />
                <Row label="Maximo" valor="150" />
            </View>


        </View>

    );
}

const styles = StyleSheet.create({

    cabecalho: {

        flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
        alignItems: 'center',
        justifyContent: 'space-between',
    
      },
  MaisInfor: {
    position: 'absolute',
    zIndex: 2,
    borderBottomWidth: 2,
    borderRadius: 20,
    padding: 10,
    width: "98%",
    maxWidth: "100%",
    marginTop: "60%",
    margin: "1%"

  },
  juntoImagem: {
    flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
    alignItems: 'center',
  },
  img: {

    width: 100,
    height: 100,
    margin: 5,

  },

});
