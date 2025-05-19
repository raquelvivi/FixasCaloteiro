
import React from 'react';
import { View,Image, StyleSheet, useColorScheme } from 'react-native';
import Row from './Row';



export default function MaisInfor( {dado = {}}) {

    const theme = useColorScheme();
    const isDarkMode = theme === 'dark';


    console.log (dado);

    return (

        <View style={[styles.MaisInfor, { backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }]}>

            <View style={[styles.juntoImagem]}>

                <Image source={require('../assets/images/rosto.jpeg')} style={[styles.img]} />
                <View style={{ flexDirection: 'column' }}>
                    <Row label="Id" valor={dado.id} />
                    <Row label="Apelido" valor= {dado.apelido} />
                    
                </View>
            </View>

            <Row label="Nome" valor={dado.nome} />
            <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Endereco" valor={dado.logradouro} />
                <Row label="N°" valor={dado.numero} />
            </View>
            <Row label="Add Compra" valor="Pagar" />
            <View style={[styles.cabecalho, { flex: 0.5, }]}>
                <Row label="Total" valor="200" />
                <Row label="Maximo" valor={dado.creditomax} />
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
